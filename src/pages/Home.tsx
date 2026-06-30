import Slider from "../components/Slider";
import BestSellers from "@/components/BestSellers";
import PricesTable from "@/components/PricesTable";

function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Slider />

        <PricesTable />

        <BestSellers />
      </main>
    </div>
  );
}

export default Home;
