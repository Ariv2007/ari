import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[120rem] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-6xl md:text-7xl mb-6 text-secondary">
                AARTHI STUDIO & VEDIO
              </h1>
              <p className="font-paragraph text-xl text-foreground mb-8 leading-relaxed">
                We are a professional photography and videography studio dedicated to capturing your most precious moments with creativity, passion, and excellence.
              </p>
              <p className="font-paragraph text-lg text-foreground mb-8 leading-relaxed">
                Based in Tenkasi, we specialize in creating stunning visual content that tells your unique story. From weddings and events to commercial projects, we bring your vision to life with cutting-edge equipment and artistic expertise.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-96 md:h-full">
              <Image
                src="https://static.wixstatic.com/media/c3a651_a34c49501d69438da7aa623659c5d044~mv2.png?originWidth=640&originHeight=384"
                alt="AARTHI STUDIO & VEDIO - Professional Photography Studio"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-20 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-accent-gold rounded-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-heading text-2xl mb-4 text-secondary">Location</h3>
              <p className="font-paragraph text-foreground text-lg">
                Tenkasi
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-accent-gold rounded-lg flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-heading text-2xl mb-4 text-secondary">Phone</h3>
              <a href="tel:9442715605" className="font-paragraph text-foreground text-lg hover:text-accent-gold transition-colors">
                9442715605
              </a>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-accent-gold rounded-lg flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-heading text-2xl mb-4 text-secondary">Email</h3>
              <a href="mailto:aarthidigitaltsi@gmail.com" className="font-paragraph text-foreground text-lg hover:text-accent-gold transition-colors">
                aarthidigitaltsi@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden h-96">
              <Image
                src="https://static.wixstatic.com/media/c3a651_5669787f4e7840e683e91631482b9ff3~mv2.png?originWidth=640&originHeight=384"
                alt="Our Mission - Professional Photography Services"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-5xl md:text-6xl mb-6 text-secondary">
                Our Mission
              </h2>
              <p className="font-paragraph text-lg text-foreground mb-6 leading-relaxed">
                At AARTHI STUDIO & VEDIO, our mission is to deliver exceptional photography and videography services that exceed expectations. We believe every moment deserves to be captured beautifully and preserved forever.
              </p>
              <p className="font-paragraph text-lg text-foreground mb-6 leading-relaxed">
                We combine technical expertise with creative vision to produce stunning visual content that resonates with your audience and stands the test of time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-paragraph text-foreground">Professional and experienced team</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-paragraph text-foreground">State-of-the-art equipment and technology</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-paragraph text-foreground">Creative and personalized approach</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mt-3 flex-shrink-0"></div>
                  <span className="font-paragraph text-foreground">Timely delivery and exceptional quality</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-[100rem] mx-auto px-6 py-20 text-center">
          <h2 className="font-heading text-5xl md:text-6xl mb-6 text-secondary">
            Ready to Capture Your Moments?
          </h2>
          <p className="font-paragraph text-xl text-foreground mb-10 max-w-2xl mx-auto">
            Get in touch with us today to discuss your photography and videography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-accent-gold text-white font-heading text-lg rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-8 py-4 border-2 border-secondary text-secondary font-heading text-lg rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              View Services
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
