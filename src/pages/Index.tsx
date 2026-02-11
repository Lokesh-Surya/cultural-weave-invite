import HeroSection from "@/components/wedding/HeroSection";
import OrnamentalDivider from "@/components/wedding/OrnamentalDivider";
import InvitationSection from "@/components/wedding/InvitationSection";
import MidPanel from "@/components/wedding/MidPanel";
import EventDetails from "@/components/wedding/EventDetails";
import CulturalBand from "@/components/wedding/CulturalBand";
import UnityStatement from "@/components/wedding/UnityStatement";
import ClosingSection from "@/components/wedding/ClosingSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <OrnamentalDivider />
      <InvitationSection />
      <MidPanel />
      <EventDetails />
      <CulturalBand />
      <UnityStatement />
      <ClosingSection />
    </main>
  );
};

export default Index;
