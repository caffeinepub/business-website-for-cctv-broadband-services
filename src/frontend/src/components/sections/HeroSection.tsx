import { ArrowRight, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-cctv-broadband.dim_1600x900.png"
          alt="CCTV and Broadband Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted Security & Connectivity Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance animate-fade-in">
            Secure Your Space,{' '}
            <span className="text-primary">Connect Your World</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-fade-in">
            Professional CCTV installation and high-speed broadband services for homes and businesses. 
            Protect what matters most with cutting-edge security and stay connected with reliable internet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="gap-2 text-base px-8 shadow-glow-lg group"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="gap-2 text-base px-8"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Installations Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5 Years</div>
                <div className="text-sm text-muted-foreground">Warranty Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
