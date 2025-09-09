import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ImageShowcase } from "@/components/image-showcase";
import { MembershipBenefits } from "@/components/membership-benefits";
import { WhyJoinSection } from "@/components/why-join-section";
import { ReservationForm } from "@/components/reservation-form";
import { ContactInfo } from "@/components/contact-info";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ImageShowcase />
      <MembershipBenefits />
      <WhyJoinSection />
      <ContactInfo />
      <ReservationForm />
    </div>
  );
}
