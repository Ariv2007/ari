import { motion } from 'framer-motion';
import { Gift, Frame, Coffee, Home, Lightbulb, Upload, Heart, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Image } from '@/components/ui/image';

export default function GiftsPage() {
  const navigate = useNavigate();

  const gifts = [
    {
      id: 'photo-frames',
      icon: Frame,
      name: 'Photo Frames',
      description: 'Elegant frames crafted to showcase your precious memories. Available in various sizes and premium finishes.',
      features: ['Premium quality materials', 'Multiple size options', 'Custom designs available', 'Perfect for home decor'],
      sizes: ['4x6 inches', '5x7 inches', '8x10 inches', '11x14 inches'],
      image: 'https://static.wixstatic.com/media/c3a651_74d71ec0b7094366926ef0d2c9c96b0e~mv2.png'
    },
    {
      id: 'magic-mug',
      icon: Coffee,
      name: 'Magic Mug',
      description: 'Heat-reveal photo mugs that surprise and delight. Watch your photo appear as you pour hot beverages.',
      features: ['Heat-activated reveal', 'High-quality ceramic', 'Dishwasher safe', 'Perfect gift for loved ones'],
      sizes: ['11 oz', '15 oz'],
      image: 'https://static.wixstatic.com/media/c3a651_74d71ec0b7094366926ef0d2c9c96b0e~mv2.png'
    },
    {
      id: 'printed-pillow',
      icon: Home,
      name: 'Printed Pillow',
      description: 'Comfortable pillows featuring your favorite photos. Soft, durable, and machine washable.',
      features: ['Soft premium fabric', 'Vibrant photo printing', 'Machine washable', 'Multiple sizes available'],
      sizes: ['16x16 inches', '18x18 inches', '20x20 inches'],
      image: 'https://static.wixstatic.com/media/c3a651_74d71ec0b7094366926ef0d2c9c96b0e~mv2.png'
    },
    {
      id: 'led-photo-frame',
      icon: Lightbulb,
      name: 'LED Photo Frame',
      description: 'Illuminated frames that bring your photos to life. Perfect for creating a stunning display in any room.',
      features: ['LED backlighting', 'Energy efficient', 'Modern design', 'Easy to use'],
      sizes: ['5x7 inches', '8x10 inches'],
      image: 'https://static.wixstatic.com/media/c3a651_74d71ec0b7094366926ef0d2c9c96b0e~mv2.png'
    }
  ];

  const handleOrderGift = (gift: typeof gifts[0]) => {
    navigate('/booking', { state: { selectedGift: gift } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-32 px-8 bg-gradient-to-br from-accent-gold/10 to-primary/5">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <Gift className="w-10 h-10 text-accent-gold" />
              </div>
            </div>
            <h1 className="font-heading text-6xl md:text-7xl text-foreground mb-6">
              Personalized Gifts
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Transform your cherished memories into beautiful, personalized gifts that will be treasured forever
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-24 px-8 bg-white">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-foreground mb-6">
              How It Works
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Creating your personalized gift is simple and easy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Choose Your Gift', description: 'Select from our range of personalized gift options' },
              { step: '02', title: 'Select Details & Size', description: 'Choose your preferred size and customize the details' },
              { step: '03', title: 'Upload Your Photo', description: 'Share your favorite photo and we\'ll create your gift' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block mb-6">
                  <span className="font-heading text-6xl text-primary/20">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Products */}
      <section className="w-full py-24 px-8">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-foreground mb-6">
              Our Gift Collection
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Each gift is carefully crafted with attention to detail and quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {gifts.map((gift, index) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent-gold/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src={gift.image}
                    alt={gift.name}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                      <gift.icon className="w-8 h-8 text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl text-foreground mb-3">
                        {gift.name}
                      </h3>
                      <p className="font-paragraph text-base text-foreground/70">
                        {gift.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {gift.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />
                        <span className="font-paragraph text-sm text-foreground/70">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                    <p className="font-paragraph text-sm text-foreground/70 mb-3">
                      <span className="font-heading text-foreground">Available Sizes:</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {gift.sizes.map((size, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white border border-primary/20 rounded-full text-xs font-paragraph text-foreground">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOrderGift(gift)}
                    className="w-full px-8 py-4 bg-accent-gold text-primary-foreground rounded-lg font-paragraph text-base hover:bg-accent-gold/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Customize & Order
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="w-full py-24 px-8 bg-gradient-to-br from-primary/5 to-accent-gold/5">
        <div className="max-w-[60rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Upload className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Ready to Create Your Gift?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              Contact us to place your order. Share your photos via WhatsApp or email, and we'll create something special for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/919442715605"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#25D366] text-white rounded-lg font-paragraph text-base hover:bg-[#20BA5A] transition-all duration-300 shadow-lg flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </motion.button>
              </a>

              <a href="mailto:aarthidigitaltsi@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border border-primary text-primary rounded-lg font-paragraph text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Email Your Photos
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-24 px-8 bg-white">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl text-foreground mb-6">
              Why Choose Our Gifts?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Heart, title: 'Made with Love', description: 'Each gift is crafted with care and attention to detail' },
              { icon: Gift, title: 'Premium Quality', description: 'We use only the finest materials for lasting memories' },
              { icon: Upload, title: 'Easy Process', description: 'Simple ordering and quick turnaround time' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
