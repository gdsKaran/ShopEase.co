import BentoGrids from "@/components/HomePageContent/bentoGrids";
import CollectionSec from "@/components/HomePageContent/collectionSection";
import LogoClouds from "@/components/HomePageContent/logoClouds";
import PromoSection from "@/components/HomePageContent/PromoSection";
import SummerCollection from "@/components/HomePageContent/summerStyle";
import ViewList from "@/components/HomePageContent/viewList";
import ViewList2 from "@/components/HomePageContent/viewList2";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const result = await verifyAuth();
  if (!result.user) {
    return redirect("/authentication");
  }
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
