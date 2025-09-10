"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Globe, Mail, Phone, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Main Street", "Downtown Cañon City", "Colorado 81212"],
      color: "text-primary"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Opening",
      details: ["Spring 2026", "Construction in Progress", "Stay Updated"],
      color: "text-accent"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Reserve Membership",
      details: ["hotelwebsite.com/membership", "Limited Spots Available", "Founding Members Only"],
      color: "text-primary"
    }
  ];

  const additionalInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "info@hotelwebsite.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "(719) 555-0123"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Mon-Fri 9AM-6PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to become a founding member? Have questions about our community? 
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ${detail.color}`}>
                    {detail.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {detail.title}
                  </h3>
                  <div className="space-y-2">
                    {detail.details.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-muted-foreground">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Contact Information
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re here to help you join our community. Reach out with any questions about membership, 
              the hotel, or our bike services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 bg-background/50 rounded-lg p-4 border border-border/30"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-primary">
                    {info.icon}
                  </div>
                </div>
                <span className="text-foreground font-medium">{info.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-background/80 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-foreground mb-3">
                Ready to Join Pedal Inn?
              </h4>
              <p className="text-muted-foreground mb-6">
                Don&apos;t wait - founding memberships are limited and filling up fast. 
                Secure your spot in Cañon City&apos;s newest adventure community.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("reservation");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Reserve Your Membership Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border/30"
        >
          <p className="text-muted-foreground">
            © 2024 Pedal Inn Hotel & Bike Hub. Building community in Cañon City, Colorado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}