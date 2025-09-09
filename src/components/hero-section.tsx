"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 via-background to-accent/10 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Day Image - Left Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full opacity-20">
          <Image
            src="/peddlerinn-day.png"
            alt="Peddler Inn Day - Bikers and community"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Night Image - Right Side */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <Image
            src="/peddler-inn-night.png"
            alt="Peddler Inn Night - Festive biker community"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/30"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/heritage-logo-2.png"
              alt="Peddler Inn Logo"
              width={240}
              height={240}
              className="mx-auto object-contain"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight font-serif">
              Join the{" "}
              <span className="text-primary relative">
                Peddler Inn
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
              Adventure. Community. Exclusive Perks.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We&apos;re launching The Peddler Inn — a boutique mixed-use property in downtown Cañon City, combining 4 short-term boutique suites, 3–4 long-term residential rentals, and a street-level bike service hub. Be part of the founding community and enjoy exclusive member benefits.
            </p>
          </motion.div>

          {/* Key Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Main Street, Downtown Cañon City</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Opening</h3>
              <p className="text-sm text-muted-foreground">Spring 2026</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Reserve</h3>
              <p className="text-sm text-muted-foreground">hotelwebsite.com/membership</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              onClick={() => {
                const element = document.getElementById("reservation");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Reserve Your Membership
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
    </section>
  );
}