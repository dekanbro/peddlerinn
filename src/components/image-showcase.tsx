"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ImageShowcase() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
            Experience the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the vibrant bike community at Pedal Inn, where adventure meets hospitality in the heart of Cañon City.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Day Scene */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/pedalinn-day-re-render.png"
                alt="Pedal Inn Day - Bikers and community gathering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Day Adventures</h3>
                <p className="text-white/90">
                  Start your day with fellow cyclists, plan your routes, and enjoy the vibrant downtown atmosphere.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Night Scene */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/pedalinn-night.png"
                alt="Pedal Inn Night - Festive biker community gathering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Evening Gatherings</h3>
                <p className="text-white/90">
                  Wind down with the community, share stories from the trails, and enjoy the festive evening atmosphere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              More Than Just a Place to Stay
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚴‍♂️</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Bike Community Hub</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow cyclists, plan group rides, and access premium bike services.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Mixed-Use Living</h4>
                <p className="text-sm text-muted-foreground">
                  Short-term suites and long-term rentals create a diverse, vibrant community.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Downtown Location</h4>
                <p className="text-sm text-muted-foreground">
                  Right in the heart of Cañon City, steps away from local shops, restaurants, and trails.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}