import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to discuss your photography needs or ask any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-24 px-8">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-5xl text-foreground mb-12">
                  Contact Information
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">
                      Phone
                    </h3>
                    <a
                      href="tel:9442715605"
                      className="font-paragraph text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      9442715605
                    </a>
                    <p className="font-paragraph text-sm text-foreground/60 mt-2">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:aarthidigitaltsi@gmail.com"
                      className="font-paragraph text-lg text-foreground/80 hover:text-primary transition-colors duration-300 break-all"
                    >
                      aarthidigitaltsi@gmail.com
                    </a>
                    <p className="font-paragraph text-sm text-foreground/60 mt-2">
                      Send us an email anytime
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">
                      Location
                    </h3>
                    <p className="font-paragraph text-lg text-foreground/80">
                      Tenkasi, Tamil Nadu
                    </p>
                    <p className="font-paragraph text-sm text-foreground/60 mt-2">
                      Serving Tenkasi and surrounding areas
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      <p className="font-paragraph text-base text-foreground/80">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                      </p>
                      <p className="font-paragraph text-base text-foreground/80">
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-accent-gold/10 rounded-2xl p-12 flex flex-col justify-center"
            >
              <h2 className="font-heading text-5xl text-foreground mb-6">
                Ready to Book?
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-10">
                Start your journey with us today. Fill out our booking form and we'll get back to you within 24 hours to discuss your photography needs.
              </p>

              <div className="space-y-6">
                <Link to="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-10 py-5 bg-primary text-primary-foreground rounded-lg font-paragraph text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  >
                    Book Your Session
                  </motion.button>
                </Link>

                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-10 py-5 bg-transparent border border-secondary text-secondary rounded-lg font-paragraph text-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    View Our Services
                  </motion.button>
                </Link>
              </div>

              <div className="mt-12 pt-12 border-t border-foreground/10">
                <p className="font-paragraph text-base text-foreground/70 mb-4">
                  Or reach out directly via WhatsApp
                </p>
                <a
                  href="https://wa.me/919442715605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-lg font-paragraph text-base hover:bg-[#20BA5A] transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-24 px-8 bg-white">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-5xl text-foreground mb-6">
              Visit Our Studio
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Located in the heart of Tenkasi, we're easily accessible and ready to serve you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[500px] bg-gradient-to-br from-primary/5 to-accent-gold/5 rounded-2xl flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="font-heading text-2xl text-foreground mb-2">
                AARTHI STUDIO & VEDIO
              </p>
              <p className="font-paragraph text-lg text-foreground/70">
                Tenkasi, Tamil Nadu
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
