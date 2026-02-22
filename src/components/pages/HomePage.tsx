// HPI 1.7-G
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Camera, Heart, Gift, Sparkles, ArrowRight, Star, Aperture } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { PhotographyServices } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Utility Components for Motion & Layout ---

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          width={1200}
        />
      </motion.div>
    </div>
  );
};

const SectionHeading = ({ children, subtitle, align = "center" }: { children: React.ReactNode; subtitle?: string; align?: "left" | "center" | "right" }) => {
  return (
    <div className={`flex flex-col gap-4 mb-16 ${align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      {subtitle && (
        <span className="font-paragraph text-xs tracking-[0.2em] uppercase text-accent-gold">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.9]">
        {children}
      </h2>
      <div className={`h-px w-24 bg-primary/30 mt-4 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
};

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Main Component ---

export default function HomePage() {
  // 1. Data Fidelity Protocol: Canonize Data Sources
  const [services, setServices] = useState<PhotographyServices[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Static Data Preservation (Gifts & Features)
  const features = [
    { icon: Camera, label: 'High-End Equipment', desc: 'Using the latest Sony & Canon mirrorless systems.' },
    { icon: Heart, label: 'Passionate Team', desc: 'Dedicated artists who love what they do.' },
    { icon: Sparkles, label: 'Creative Editing', desc: 'Signature color grading and retouching.' },
    { icon: Gift, label: 'Premium Products', desc: 'Handcrafted albums and custom frames.' }
  ];

  const gifts = [
    { name: 'Photo Frames', description: 'Elegant frames for your precious memories', image: 'https://static.wixstatic.com/media/c3a651_22338d29d70e48b9861cc10b4fdd81e0~mv2.png?originWidth=384&originHeight=384' },
    { name: 'Magic Mug', description: 'Heat-reveal photo mugs that surprise', image: 'https://static.wixstatic.com/media/c3a651_1821ca99ed0244f1aa079df32d192c53~mv2.png?originWidth=384&originHeight=384' },
    { name: 'Printed Pillow', description: 'Comfortable pillows with your photos', image: 'https://static.wixstatic.com/media/c3a651_2646943cca984a729de398ceab455053~mv2.png?originWidth=384&originHeight=384' },
    { name: 'LED Photo Frame', description: 'Illuminated frames for stunning display', image: 'https://static.wixstatic.com/media/c3a651_8f62142d7d7e4094923c1aa2fedf1ebe~mv2.png?originWidth=384&originHeight=384' }
  ];

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

  // Scroll Progress for Global Elements
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-gold origin-left z-50"
        style={{ scaleX }}
      />

      <Header />

      {/* --- HERO SECTION: The Cinematic Opening --- */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        {/* Background Parallax Layer */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://static.wixstatic.com/media/c3a651_f647588b8afd40f98076b036a498808c~mv2.png?originWidth=1152&originHeight=640"
            alt="Cinematic Wedding Photography Background"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block py-2 px-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-paragraph text-xs md:text-sm tracking-widest uppercase">
              Aarthi Studio & Vedio • Tenkasi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-white mb-8 mix-blend-overlay"
          >
            Timeless <br />
            <span className="text-white/90 italic font-light">Elegance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-paragraph text-lg md:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed"
          >
            Crafting visual legacies for weddings, festivals, and life's most precious beginnings. We don't just take photos; we preserve emotions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/booking">
              <button className="group relative px-10 py-4 bg-white text-foreground font-paragraph font-medium overflow-hidden rounded-sm transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Shoot <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </Link>
            <Link to="/services">
              <button className="px-10 py-4 bg-transparent border border-white/40 text-white font-paragraph font-medium rounded-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
                Explore Services
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- MARQUEE SECTION: Dynamic Flow --- */}
      <div className="w-full bg-foreground py-6 overflow-hidden border-y border-white/10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-white/20 font-heading text-4xl md:text-5xl">WEDDING PHOTOGRAPHY</span>
              <Star className="w-6 h-6 text-accent-gold/40" />
              <span className="text-white/20 font-heading text-4xl md:text-5xl">CINEMATIC VIDEO</span>
              <Star className="w-6 h-6 text-accent-gold/40" />
              <span className="text-white/20 font-heading text-4xl md:text-5xl">CANDID MOMENTS</span>
              <Star className="w-6 h-6 text-accent-gold/40" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- PHILOSOPHY SECTION: Editorial Layout --- */}
      <section className="w-full py-32 px-6 md:px-12 bg-background">
        <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <FadeIn>
              <span className="text-accent-gold font-paragraph text-sm tracking-widest uppercase mb-4 block">Our Philosophy</span>
              <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-8 leading-tight">
                The Art of <br />
                <span className="italic text-primary">Visual Storytelling</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
                Based in Tenkasi, Aarthi Studio & Vedio is more than a photography service. We are archivists of joy. We believe that every smile, every tear, and every glance holds a story waiting to be told.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
                <div>
                  <h4 className="font-heading text-3xl text-foreground mb-2">10+</h4>
                  <p className="text-sm text-foreground/60">Years Experience</p>
                </div>
                <div>
                  <h4 className="font-heading text-3xl text-foreground mb-2">500+</h4>
                  <p className="text-sm text-foreground/60">Happy Couples</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="group p-8 bg-white rounded-sm border border-foreground/5 hover:border-primary/30 transition-colors duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{feature.label}</h3>
                <p className="font-paragraph text-sm text-foreground/60 leading-relaxed">
                  {feature.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION: Sticky Sidebar & Parallax List --- */}
      <section className="w-full py-32 bg-white relative" id="services">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Sticky Header */}
            <div className="lg:col-span-4 h-fit lg:sticky lg:top-32 z-10">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-accent-gold" />
                  <span className="text-accent-gold font-paragraph text-sm tracking-widest uppercase">Services</span>
                </div>
                <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-8">
                  Curated <br />
                  <span className="text-primary italic">Collections</span>
                </h2>
                <p className="font-paragraph text-lg text-foreground/70 mb-12 max-w-md">
                  From the grandeur of weddings to the intimacy of newborn portraits, explore our specialized photography packages.
                </p>
                <Link to="/services">
                  <button className="hidden lg:flex items-center gap-3 text-foreground font-paragraph text-sm uppercase tracking-widest hover:text-primary transition-colors group">
                    View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Scrollable Content */}
            <div className="lg:col-span-8">
              {isLoading ? (
                <div className="flex items-center justify-center h-[400px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : services.length > 0 ? (
                <div className="flex flex-col gap-24">
                  {services.map((service, index) => (
                    <motion.div
                      key={service._id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="group relative"
                    >
                      <Link to={`/services/${service._id}`} className="block">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          {/* Image Side */}
                          <div className={`relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-[3/4] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <Image
                              src={service.representativeImage || 'https://static.wixstatic.com/media/c3a651_96a683feedbc4c26851ae00df66c98fc~mv2.png?originWidth=768&originHeight=1024'}
                              alt={service.serviceName || 'Service'}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                              width={800}
                            />
                            {/* Floating Category Tag */}
                            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                              <span className="text-xs font-paragraph uppercase tracking-wider text-foreground">
                                {service.categoryType || 'Photography'}
                              </span>
                            </div>
                          </div>

                          {/* Content Side */}
                          <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1 md:text-right items-end' : 'md:text-left items-start'}`}>
                            <h3 className="font-heading text-4xl md:text-5xl text-foreground mb-6 group-hover:text-primary transition-colors">
                              {service.serviceName}
                            </h3>
                            <p className="font-paragraph text-foreground/70 mb-8 line-clamp-3 max-w-md">
                              {service.description}
                            </p>
                            <span className="inline-flex items-center gap-2 text-sm font-paragraph uppercase tracking-widest border-b border-foreground/20 pb-1 group-hover:border-primary group-hover:text-primary transition-all">
                              Discover Details
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 border border-dashed border-foreground/20 rounded-lg">
                  <p className="font-paragraph text-foreground/50">Services are being curated. Check back soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- GIFTS SECTION: Grid Layout --- */}
      <section className="w-full py-32 bg-background border-t border-foreground/5">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <SectionHeading subtitle="Personalized" align="center">
            The Gift Collection
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gifts.map((gift, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link to="/gifts" className="group block h-full">
                  <div className="bg-white p-4 h-full rounded-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary/10">
                    <div className="relative aspect-square overflow-hidden rounded-sm mb-6 bg-background">
                      <Image
                        src={gift.image}
                        alt={gift.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        width={400}
                      />
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {gift.name}
                    </h3>
                    <p className="font-paragraph text-sm text-foreground/60">
                      {gift.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/gifts">
              <button className="px-12 py-4 bg-foreground text-white font-paragraph text-sm uppercase tracking-widest hover:bg-primary transition-colors rounded-sm">
                View All Gifts
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: Atmospheric --- */}
      <section className="relative w-full py-40 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/c3a651_527e185b81b34ce7863ab5f60327f338~mv2.png?originWidth=1920&originHeight=1024"
            alt="Background"
            className="w-full h-full object-cover opacity-20 grayscale"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Aperture className="w-12 h-12 text-accent-gold mx-auto mb-8 opacity-80" />
            <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-8">
              Let's Create Something <br />
              <span className="text-primary italic">Beautiful Together</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
              Your story deserves to be told with elegance and artistry. Book your session today and let us capture the magic.
            </p>
            <Link to="/booking">
              <button className="px-16 py-5 bg-accent-gold text-white font-paragraph text-lg rounded-sm hover:bg-accent-gold/90 transition-all shadow-lg hover:shadow-accent-gold/30 transform hover:-translate-y-1">
                Book Your Session
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}