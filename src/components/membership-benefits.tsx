"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Bike, Calendar, Percent, Users, Gift } from "lucide-react";

export function MembershipBenefits() {
  const foundersBenefits = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "5 prepaid nights",
      description: "Valid for 12 months at our boutique hotel"
    },
    {
      icon: <Bike className="w-5 h-5" />,
      title: "Premium bike service",
      description: "1 tune-up or rental credit included"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Priority booking",
      description: "Reserve peak weekends and events first"
    },
    {
      icon: <Percent className="w-5 h-5" />,
      title: "10% discount",
      description: "On retail purchases and future bookings"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Exclusive events",
      description: "Members-only rides & community gatherings"
    }
  ];

  const adventureBenefits = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "12 prepaid nights",
      description: "Extended stay privileges"
    },
    {
      icon: <Bike className="w-5 h-5" />,
      title: "2 premium tune-ups",
      description: "Keep your bike in perfect condition"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "VIP event passes",
      description: "Access to exclusive local events"
    }
  ];

  return (
    <section id="membership" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Membership Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the membership tier that fits your adventure lifestyle and become part of our exclusive community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Founders Club Package */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Pedal Inn Founders Package
                </CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  $1,000
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  Perfect for local adventurers and frequent visitors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {foundersBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="pt-6">
                  <Button 
                    onClick={() => {
                      const element = document.getElementById("reservation");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Join Pedal Inn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Adventure Tier */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-accent/30 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Pedal Inn Adventure Tier
                </CardTitle>
                <div className="text-4xl font-bold text-accent mt-4">
                  $2,500
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  For the ultimate adventure enthusiasts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {adventureBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Includes all Founders benefits */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">Plus all Pedal Inn Founders benefits:</strong>
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div>✓ Priority booking</div>
                    <div>✓ 10% discount</div>
                    <div>✓ Exclusive events</div>
                    <div>✓ Community access</div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button 
                    onClick={() => {
                      const element = document.getElementById("reservation");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Join Adventure Tier
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All memberships include lifetime access to our community events and special pricing on future stays. 
            Limited time offer - secure your founding member status today!
          </p>
        </motion.div>
      </div>
    </section>
  );
}