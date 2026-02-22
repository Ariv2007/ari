import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { PhotographyServices } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [services, setServices] = useState<PhotographyServices[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<PhotographyServices>('photographyservices');
      setServices(result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-32 px-8 bg-gradient-to-br from-primary/5 to-accent-gold/5">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl text-foreground mb-6">
              Our Photography Services
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Professional photography services tailored to capture your most precious moments with elegance and creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-32 px-8">
        <div className="max-w-[100rem] mx-auto">
          <div className="min-h-[600px]">
            {isLoading ? null : services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((service, index) => (
                  <motion.div
                    key={service._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/services/${service._id}`}>
                      <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                        <div className="relative h-96 overflow-hidden">
                          <Image
                            src={service.representativeImage || 'https://static.wixstatic.com/media/c3a651_7a64c766a32a4e15827a990d4f6b3b30~mv2.png?originWidth=576&originHeight=384'}
                            alt={service.serviceName || 'Photography Service'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            width={600}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                          
                          {service.categoryType && (
                            <div className="absolute top-6 right-6">
                              <span className="px-4 py-2 bg-primary/90 text-primary-foreground rounded-lg font-paragraph text-xs backdrop-blur-sm">
                                {service.categoryType}
                              </span>
                            </div>
                          )}

                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="font-heading text-4xl text-white mb-2">
                              {service.serviceName}
                            </h3>
                          </div>
                        </div>
                        
                        <div className="p-8">
                          <p className="font-paragraph text-base text-foreground/80 mb-6 line-clamp-4">
                            {service.description}
                          </p>

                          {service.packageDetails && (
                            <div className="mb-6 p-6 bg-background rounded-lg">
                              <h4 className="font-heading text-xl text-foreground mb-3">
                                Package Details
                              </h4>
                              <p className="font-paragraph text-sm text-foreground/70 whitespace-pre-line">
                                {service.packageDetails}
                              </p>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <span className="font-paragraph text-base text-primary group-hover:text-accent-gold transition-colors duration-300">
                              View Details →
                            </span>
                            <Link to="/booking">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => e.stopPropagation()}
                                className="px-6 py-2 bg-transparent border border-primary text-primary rounded-lg font-paragraph text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                              >
                                Book Now
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground/50">
                  No services available at the moment
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-32 px-8 bg-white">
        <div className="max-w-[100rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-foreground mb-6">
              Ready to Book Your Session?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
              Contact us today to discuss your photography needs and create beautiful memories together
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-primary text-primary-foreground rounded-lg font-paragraph text-base hover:bg-primary/90 transition-all duration-300 shadow-lg"
                >
                  Book Your Shoot
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-transparent border border-secondary text-secondary rounded-lg font-paragraph text-base hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
