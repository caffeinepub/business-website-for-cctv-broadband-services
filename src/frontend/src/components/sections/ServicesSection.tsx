import { Camera, Wifi, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
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

  const services = [
    {
      icon: Camera,
      title: 'CCTV Security Systems',
      description: 'Advanced surveillance solutions to protect your property 24/7 with crystal-clear video quality and remote monitoring capabilities.',
      features: [
        'HD & 4K camera installation',
        'Remote viewing via mobile app',
        'Night vision technology',
        'Motion detection alerts',
        'Cloud & local storage options',
        'Professional system design'
      ],
      color: 'primary'
    },
    {
      icon: Wifi,
      title: 'Broadband Services',
      description: 'Lightning-fast internet connectivity for seamless streaming, gaming, and business operations with reliable uptime and expert support.',
      features: [
        'High-speed fiber connections',
        'Flexible data plans',
        'Router setup & optimization',
        'Network security configuration',
        'Business-grade solutions',
        'Technical support included'
      ],
      color: 'chart-2'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive security and connectivity solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={scrollToContact}
                    className="w-full gap-2 group"
                    variant="default"
                  >
                    Request Service
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer tailored packages for businesses and large properties.
          </p>
          <Button onClick={scrollToContact} variant="outline" size="lg">
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
}
