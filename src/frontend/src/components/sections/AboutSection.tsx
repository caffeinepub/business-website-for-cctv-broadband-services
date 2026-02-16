import { Shield, Clock, Award, Users, Wrench, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const differentiators = [
    {
      icon: Clock,
      title: 'Fast Installation',
      description: 'Same-day or next-day installation available. We respect your time and work efficiently.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '5-year warranty on all installations. We stand behind our work with comprehensive coverage.'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Trained and certified technicians with years of experience in security and networking.'
    },
    {
      icon: Users,
      title: 'Local Service',
      description: 'Family-owned business serving your community with personalized attention and care.'
    },
    {
      icon: Wrench,
      title: 'Free Maintenance',
      description: 'First year of maintenance included. Regular check-ups to ensure optimal performance.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support. We\'re here whenever you need assistance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Why Choose <span className="text-primary">Skynet Services</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Your trusted partner for security and connectivity solutions in{' '}
            <span className="font-semibold text-foreground">Your City & Surrounding Areas</span>
          </p>
          <p className="text-base text-muted-foreground">
            We're a locally-owned business dedicated to protecting homes and businesses with 
            state-of-the-art CCTV systems and providing reliable high-speed internet connectivity. 
            With over a decade of experience, we've built our reputation on quality workmanship, 
            honest pricing, and exceptional customer service.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
