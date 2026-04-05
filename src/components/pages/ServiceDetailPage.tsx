import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Package } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { PhotographyServices } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<PhotographyServices | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadService();
  }, [id]);

  const loadService = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const data = await BaseCrudService.getById<PhotographyServices>('photographyservices', id);
      setService(data);
    } catch (error) {
      console.error('Error loading service:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full py-16 px-8">
        <div className="max-w-[100rem] mx-auto">
          <Link to="/services">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300 mb-12"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-paragraph text-base">Back to Services</span>
            </motion.button>
          </Link>

          <div className="min-h-[600px]">
            {isLoading ? (
              <div className="flex items-center justify-center py-32">
                <LoadingSpinner />
              </div>
            ) : !service ? (
              <div className="text-center py-32">
                <h2 className="font-heading text-4xl text-foreground mb-4">
                  Service Not Found
                </h2>
                <p className="font-paragraph text-lg text-foreground/70 mb-8">
                  The service you're looking for doesn't exist or has been removed.
                </p>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-paragraph text-base hover:bg-primary/90 transition-all duration-300"
                  >
                    View All Services
                  </motion.button>
                </Link>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Hero Image */}
                <div className="relative h-[70vh] rounded-2xl overflow-hidden mb-16">
                  <Image
                    src={service.representativeImage || 'https://static.wixstatic.com/media/672e5b_615463682fed44cd802c5ffbbbff8e60~mv2.png?originWidth=1152&originHeight=576'}
                    alt={service.serviceName || 'Photography Service'}
                    className="w-full h-full object-cover"
                    width={1200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {service.categoryType && (
                    <div className="absolute top-8 right-8">
                      <span className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-paragraph text-sm backdrop-blur-sm">
                        {service.categoryType}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-12 left-12 right-12">
                    <h1 className="font-heading text-6xl md:text-7xl text-white mb-4">
                      {service.serviceName}
                    </h1>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl p-10 shadow-sm mb-8">
                      <h2 className="font-heading text-4xl text-foreground mb-6">
                        About This Service
                      </h2>
                      <p className="font-paragraph text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>

                    {service.packageDetails && (
                      <div className="bg-white rounded-xl p-10 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                          <Package className="w-6 h-6 text-primary" />
                          <h2 className="font-heading text-4xl text-foreground">
                            Package Details
                          </h2>
                        </div>
                        <div className="font-paragraph text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                          {service.packageDetails}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-xl p-8 sticky top-24">
                      <h3 className="font-heading text-3xl text-foreground mb-8">
                        Book This Service
                      </h3>

                      <div className="space-y-6 mb-10">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg text-foreground mb-1">
                              Flexible Scheduling
                            </h4>
                            <p className="font-paragraph text-sm text-foreground/70">
                              Choose a date that works for you
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg text-foreground mb-1">
                              Your Location
                            </h4>
                            <p className="font-paragraph text-sm text-foreground/70">
                              We come to your preferred venue
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Package className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg text-foreground mb-1">
                              Custom Packages
                            </h4>
                            <p className="font-paragraph text-sm text-foreground/70">
                              Tailored to your specific needs
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link to="/booking" state={{ selectedService: service.serviceName }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-paragraph text-base hover:bg-primary/90 transition-all duration-300 shadow-lg mb-4"
                        >
                          Book This Service
                        </motion.button>
                      </Link>

                      <Link to="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-8 py-4 bg-transparent border border-secondary text-secondary rounded-lg font-paragraph text-base hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                        >
                          Ask a Question
                        </motion.button>
                      </Link>

                      <div className="mt-8 pt-8 border-t border-foreground/10">
                        <p className="font-paragraph text-sm text-foreground/60 text-center">
                          Have questions? Call us at
                        </p>
                        <a
                          href="tel:9442715605"
                          className="block text-center font-heading text-2xl text-primary hover:text-accent-gold transition-colors duration-300 mt-2"
                        >
                          9442715605
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
