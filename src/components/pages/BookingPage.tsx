import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Phone, Mail, Package, MessageSquare, Send, Upload, X } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { BookingInquiries, PhotographyServices } from '@/entities';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function BookingPage() {
  const location = useLocation();
  const selectedServiceFromState = location.state?.selectedService;
  const selectedGiftFromState = location.state?.selectedGift;
  const isGiftBooking = !!selectedGiftFromState;

  const [services, setServices] = useState<PhotographyServices[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    email: '',
    eventDate: '',
    location: '',
    selectedPackage: selectedServiceFromState || (isGiftBooking ? selectedGiftFromState?.name : ''),
    specialNotes: '',
    giftSize: selectedGiftFromState?.sizes?.[0] || '',
    giftDetails: ''
  });

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const result = await BaseCrudService.getAll<PhotographyServices>('photographyservices');
      setServices(result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setUploadedPhotos(prev => [...prev, event.target?.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const bookingData: BookingInquiries = {
        _id: crypto.randomUUID(),
        customerName: formData.customerName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        eventDate: formData.eventDate,
        location: formData.location,
        selectedPackage: formData.selectedPackage,
        specialNotes: formData.specialNotes
      };

      await BaseCrudService.create('bookinginquiries', bookingData);

      // Create WhatsApp message
      let message = `*New ${isGiftBooking ? 'Gift' : 'Booking'} Inquiry*%0A%0A*Name:* ${formData.customerName}%0A*Phone:* ${formData.phoneNumber}%0A*Email:* ${formData.email}%0A*Event Date:* ${formData.eventDate}%0A*Location:* ${formData.location}%0A*Package:* ${formData.selectedPackage}`;
      
      if (isGiftBooking) {
        message += `%0A*Gift Size:* ${formData.giftSize}%0A*Gift Details:* ${formData.giftDetails}%0A*Photos Uploaded:* ${uploadedPhotos.length}`;
      }
      
      message += `%0A*Special Notes:* ${formData.specialNotes || 'None'}`;
      
      // Redirect to WhatsApp
      window.location.href = `https://wa.me/919442715605?text=${message}`;
    } catch (error) {
      console.error('Error submitting booking:', error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-24 px-8 bg-gradient-to-br from-primary/5 to-accent-gold/5">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl text-foreground mb-6">
              {isGiftBooking ? 'Customize Your Gift' : 'Book Your Photography Session'}
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              {isGiftBooking 
                ? 'Select your preferred size, add details, and upload your photos to create your perfect personalized gift'
                : 'Fill out the form below and we\'ll get back to you shortly to confirm your booking'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="w-full py-24 px-8">
        <div className="max-w-[60rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-10 md:p-16 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Customer Name */}
              <div>
                <Label htmlFor="customerName" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                  <User className="w-5 h-5 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="customerName"
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => handleChange('customerName', e.target.value)}
                  placeholder="Enter your full name"
                  className="h-14 font-paragraph text-base"
                />
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    placeholder="Enter your phone number"
                    className="h-14 font-paragraph text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="Enter your email"
                    className="h-14 font-paragraph text-base"
                  />
                </div>
              </div>

              {/* Event Date and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="eventDate" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    Event Date *
                  </Label>
                  <Input
                    id="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => handleChange('eventDate', e.target.value)}
                    className="h-14 font-paragraph text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    Event Location *
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    placeholder="Enter event location"
                    className="h-14 font-paragraph text-base"
                  />
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <Label htmlFor="selectedPackage" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                  <Package className="w-5 h-5 text-primary" />
                  {isGiftBooking ? 'Gift Type' : 'Select Package'} *
                </Label>
                {isGiftBooking ? (
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="font-paragraph text-base text-foreground font-semibold">
                      {formData.selectedPackage}
                    </p>
                  </div>
                ) : (
                  <Select
                    value={formData.selectedPackage}
                    onValueChange={(value) => handleChange('selectedPackage', value)}
                    required
                  >
                    <SelectTrigger className="h-14 font-paragraph text-base">
                      <SelectValue placeholder="Choose a photography package" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem
                          key={service._id}
                          value={service.serviceName || ''}
                          className="font-paragraph text-base"
                        >
                          {service.serviceName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              {/* Gift-specific fields */}
              {isGiftBooking && (
                <>
                  {/* Gift Size Selection */}
                  <div>
                    <Label htmlFor="giftSize" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                      <Package className="w-5 h-5 text-primary" />
                      Select Size *
                    </Label>
                    <Select
                      value={formData.giftSize}
                      onValueChange={(value) => handleChange('giftSize', value)}
                      required
                    >
                      <SelectTrigger className="h-14 font-paragraph text-base">
                        <SelectValue placeholder="Choose a size" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedGiftFromState?.sizes?.map((size: string) => (
                          <SelectItem
                            key={size}
                            value={size}
                            className="font-paragraph text-base"
                          >
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Gift Details */}
                  <div>
                    <Label htmlFor="giftDetails" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Gift Details & Customization
                    </Label>
                    <Textarea
                      id="giftDetails"
                      value={formData.giftDetails}
                      onChange={(e) => handleChange('giftDetails', e.target.value)}
                      placeholder="Describe any specific details or customizations you'd like (e.g., text to include, color preferences, etc.)"
                      className="min-h-32 font-paragraph text-base resize-none"
                    />
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <Label className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                      <Upload className="w-5 h-5 text-primary" />
                      Upload Your Photos *
                    </Label>
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label htmlFor="photo-upload" className="cursor-pointer">
                        <Upload className="w-12 h-12 text-primary/40 mx-auto mb-3" />
                        <p className="font-paragraph text-base text-foreground mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="font-paragraph text-sm text-foreground/60">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </label>
                    </div>

                    {/* Uploaded Photos Preview */}
                    {uploadedPhotos.length > 0 && (
                      <div className="mt-6">
                        <p className="font-paragraph text-sm text-foreground mb-4">
                          {uploadedPhotos.length} photo{uploadedPhotos.length !== 1 ? 's' : ''} uploaded
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {uploadedPhotos.map((photo, index) => (
                            <div key={index} className="relative group">
                              <Image src={photo} alt={`Uploaded photo ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
                              <button
                                type="button"
                                onClick={() => removePhoto(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Special Notes */}
              <div>
                <Label htmlFor="specialNotes" className="flex items-center gap-2 font-paragraph text-base text-foreground mb-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Special Notes or Requirements
                </Label>
                <Textarea
                  id="specialNotes"
                  value={formData.specialNotes}
                  onChange={(e) => handleChange('specialNotes', e.target.value)}
                  placeholder="Tell us about any special requirements or preferences..."
                  className="min-h-32 font-paragraph text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full h-16 bg-primary text-primary-foreground rounded-lg font-paragraph text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit {isGiftBooking ? 'Gift Order' : 'Booking'} Request
                  </>
                )}
              </motion.button>

              <p className="text-center font-paragraph text-sm text-foreground/60">
                After submitting, you'll be redirected to WhatsApp to confirm your details
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="font-paragraph text-base text-foreground/70 mb-4">
              Prefer to call us directly?
            </p>
            <a
              href="tel:9442715605"
              className="inline-block font-heading text-3xl text-primary hover:text-accent-gold transition-colors duration-300"
            >
              9442715605
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
