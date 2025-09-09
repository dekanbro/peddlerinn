"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, CreditCard, Calendar, Users } from "lucide-react";

export function ReservationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    membershipType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-2 border-primary/20">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                  Thank You!
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your reservation request has been submitted successfully. We&apos;ll contact you within 24 hours to confirm your founding membership and discuss next steps.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Reserve Your Peddler Inn Membership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join Peddler Inn and secure your spot in Cañon City&apos;s newest adventure community. 
            Limited founding memberships available.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    Membership Application
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll contact you to complete your founding membership.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="membershipType" className="block text-sm font-medium text-foreground mb-2">
                        Membership Tier *
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <select
                          id="membershipType"
                          name="membershipType"
                          required
                          value={formData.membershipType}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors appearance-none bg-background"
                        >
                          <option value="">Select membership tier</option>
                          <option value="founders">Peddler Inn Founders Package - $1,000</option>
                          <option value="adventure">Peddler Inn Adventure Tier - $2,500</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your adventure interests, questions, or special requests..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="termsAgreement"
                        name="termsAgreement"
                        required
                        className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                      />
                      <label htmlFor="termsAgreement" className="text-sm text-muted-foreground leading-relaxed">
                        I agree to the{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          Terms & Conditions
                        </a>{" "}
                        and understand that this membership provides prepaid lodging credits and service perks only, not ownership or investment rights.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Reserve My Peddler Inn Membership"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Submit Application</h4>
                      <p className="text-sm text-muted-foreground">Complete the form with your details and membership preference</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">We&apos;ll Contact You</h4>
                      <p className="text-sm text-muted-foreground">Within 24 hours to confirm details and answer questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Secure Your Spot</h4>
                      <p className="text-sm text-muted-foreground">Complete payment and receive your founding member benefits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Limited Availability</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Peddler Inn founding memberships are limited to ensure an exclusive community experience. 
                  Don&apos;t miss your chance to be part of Cañon City&apos;s newest adventure hub.
                </p>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Opening:</strong> Spring 2026</p>
                    <p><strong>Location:</strong> Main Street, Downtown Cañon City</p>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="border border-border/50">
                <CardContent className="p-6">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong>Disclaimer:</strong> Memberships provide prepaid lodging credits and service perks only. 
                    They do not represent an ownership interest, equity participation, or entitlement to any profits of The Peddler Inn or its affiliates. 
                    This is not an investment offering.
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <a
                      href="/terms"
                      className="text-xs text-primary hover:text-primary/80 underline transition-colors"
                    >
                      View complete Terms & Conditions →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}