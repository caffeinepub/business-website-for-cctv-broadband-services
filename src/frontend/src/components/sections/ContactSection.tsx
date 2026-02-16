import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useContactForm } from '../hooks/useContactForm';

export function ContactSection() {
  const { formData, errors, isSubmitting, isSuccess, handleChange, handleSelectChange, handleSubmit, resetForm } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to secure your property or upgrade your internet? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us anytime</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">Phone</div>
                    <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">Email</div>
                    <a href="mailto:info@secureconnect.com" className="text-sm text-muted-foreground hover:text-primary">
                      info@secureconnect.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">Location</div>
                    <p className="text-sm text-muted-foreground">
                      123 Main Street<br />
                      Your City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-1">Business Hours</div>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-center">
                  <span className="font-semibold">Emergency Service Available</span>
                  <br />
                  <span className="text-muted-foreground">
                    24/7 support for existing customers
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <Alert className="bg-primary/10 border-primary/20">
                    <AlertDescription className="text-center py-8">
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/20">
                          <Send className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Message Sent Successfully!</h3>
                          <p className="text-muted-foreground mb-4">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                          <Button onClick={resetForm} variant="outline">
                            Send Another Message
                          </Button>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact">Phone or Email *</Label>
                        <Input
                          id="contact"
                          name="contact"
                          placeholder="+1 (555) 123-4567"
                          value={formData.contact}
                          onChange={handleChange}
                          className={errors.contact ? 'border-destructive' : ''}
                        />
                        {errors.contact && (
                          <p className="text-xs text-destructive">{errors.contact}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger className={errors.service ? 'border-destructive' : ''}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cctv">CCTV Security Systems</SelectItem>
                          <SelectItem value="broadband">Broadband Services</SelectItem>
                          <SelectItem value="both">Both CCTV & Broadband</SelectItem>
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-destructive">{errors.service}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
