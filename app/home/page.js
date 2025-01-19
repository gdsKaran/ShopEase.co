import { getProducts } from "@/actions/products";
import BentoGrids from "@/components/HomePageContent/bentoGrids";
import BigViewList from "@/components/HomePageContent/BigViewList";
import BigViewList2 from "@/components/HomePageContent/BigViewList2";
import CollectionSec from "@/components/HomePageContent/collectionSection";
import LogoClouds from "@/components/HomePageContent/logoClouds";
import PromoSection from "@/components/HomePageContent/PromoSection";
import SummerCollection from "@/components/HomePageContent/summerStyle";
import ViewList from "@/components/HomePageContent/viewList";
import ViewList2 from "@/components/HomePageContent/viewList2";
// import { verifyAuth } from "@/lib/auth";
// import { redirect } from "next/navigation";
export default async function Home() {
  const products = await getProducts();
  // const result = await verifyAuth();
  // if (!result.user) {
  //   return redirect("/authentication");
  // }
  return (
    <>
      <SummerCollection />
      <ViewList products={products} />
      <ViewList2 products={products} />
      <CollectionSec />
      <BigViewList products={products} />
      <BigViewList2 products={products} />
      <PromoSection />
      <BentoGrids />
      <LogoClouds />
    </>
  );
}
