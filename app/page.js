import CollectionSec from "@/components/HomePageContent/collectionSection";
import SummerCollection from "@/components/HomePageContent/summerStyle";
import ViewList from "@/components/HomePageContent/viewList";
import BentoGrids from "@/components/HomePageContent/bentoGrids";
import LogoClouds from "@/components/HomePageContent/logoClouds";
import PromoSection from "@/components/HomePageContent/PromoSection";

export default function Home() {
  return (
    <>
      <SummerCollection />
      <CollectionSec />
      <ViewList />
      <PromoSection />
      <ViewList />
      <BentoGrids />
      <LogoClouds />
    </>
  );
}
