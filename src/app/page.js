import Banner from "@/components/Banner";
import CommunityStats from "@/components/CTA";
import HowItWorks from "@/components/HowItsWork";
import TrendingInnovations from "@/components/TredingInnovations";

export default function Home() {
  return (
    <div>
      <Banner />
      <TrendingInnovations />
      <HowItWorks />
      <CommunityStats />
    </div>
  );
}
