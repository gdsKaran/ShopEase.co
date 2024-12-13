import BentoGrids from "@/components/HomePageContent/bentoGrids";
import CollectionSec from "@/components/HomePageContent/collectionSection";
import LogoClouds from "@/components/HomePageContent/logoClouds";
import PromoSection from "@/components/HomePageContent/PromoSection";
import SummerCollection from "@/components/HomePageContent/summerStyle";
import ViewList from "@/components/HomePageContent/viewList";

export default function Products() {
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
