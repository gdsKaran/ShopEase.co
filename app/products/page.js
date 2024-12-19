import BentoGrids from "@/components/HomePageContent/bentoGrids";
import CollectionSec from "@/components/HomePageContent/collectionSection";
import LogoClouds from "@/components/HomePageContent/logoClouds";
import PromoSection from "@/components/HomePageContent/PromoSection";
import SummerCollection from "@/components/HomePageContent/summerStyle";
import ViewList from "@/components/HomePageContent/viewList";
import ViewList2 from "@/components/HomePageContent/viewList2";

export default function Products() {
  return (
    <>
      <SummerCollection />
      <ViewList />
      <ViewList2 />
      <CollectionSec />
      <PromoSection />
      <BentoGrids />
      <LogoClouds />
    </>
  );
}
