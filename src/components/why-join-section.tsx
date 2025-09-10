"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Heart, MapPin, Clock, Users, Mountain } from "lucide-react";

export function WhyJoinSection() {
  const reasons = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Lock in Discounted Stays",
      description: "Secure founding member rates before we open to the public. Your investment pays for itself with exclusive pricing that won't be available after launch.",
      color: "text-primary"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Exclusive Local Community",
      description: "Join a curated group of adventure enthusiasts, local business owners, and community leaders who share your passion for outdoor exploration.",
      color: "text-accent"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Support Downtown Revitalization",
      description: "Be part of Cañon City's exciting transformation. Your membership directly supports local economic growth and community development.",
      color: "text-primary"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Early access to bookings"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Monthly community rides"
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      text: "Exclusive trail access"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Local business partnerships"
    }
  ];

  return (
    <section id="why-join" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Why Join Now?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t miss your chance to be part of something special in Cañon City. 
            Limited founding memberships available.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ${reason.color}`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What Makes Pedal Inn Different
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re not just another hotel. Pedal Inn is building a community hub that celebrates the outdoor lifestyle 
              and supports local businesses in Cañon City.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-background/50 rounded-lg p-4 border border-border/30"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-foreground font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Pedal Inn?
            </h3>
            <p className="text-muted-foreground mb-6">
              Secure your founding member status and be part of Cañon City&apos;s newest community hub. 
              Limited memberships available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById("reservation");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Reserve Your Spot
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}