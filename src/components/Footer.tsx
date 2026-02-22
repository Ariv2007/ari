import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="max-w-[100rem] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl mb-4">
              AARTHI STUDIO
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/80 mb-6">
              Capturing life's precious moments with elegance and artistry. Professional photography services in Tenkasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                Home
              </Link>
              <Link to="/services" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                Services
              </Link>
              <Link to="/gifts" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                Personalized Gifts
              </Link>
              <Link to="/contact" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                Contact
              </Link>
              <Link to="/booking" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                Book Now
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading text-xl mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:9442715605" className="flex items-start gap-3 text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm">9442715605</span>
              </a>
              <a href="mailto:aarthidigitaltsi@gmail.com" className="flex items-start gap-3 text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm break-all">aarthidigitaltsi@gmail.com</span>
              </a>
              <a href="https://maps.app.goo.gl/zDQpuBboyRVC1Tb5A?g_st=aw" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-secondary-foreground/80 hover:text-accent-gold transition-colors duration-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm">Tenkasi, Tamil Nadu</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-xl mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent-gold transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} AARTHI STUDIO & VEDIO. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              Crafted with passion in Tenkasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
