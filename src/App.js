import Hero from "./components/Hero";
import PopularProduct from "./components/PopularProduct";
import SupperQuality from "./components/SupperQuality";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import CustomerReviews from "./components/CustomerReviews";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </div>
      <div className="padding">
        <PopularProduct />
      </div>
      <div className="padding">
        <SupperQuality />
      </div>
      <div className="padding-x py-10">
        <Services />
      </div>
      <div className="padding">
        <SpecialOffer />
      </div>
      <div className="padding bg-pale-blue">
        <CustomerReviews />
      </div>
      <div className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </div>
      <div className="padding-x bg-black padding-t pb-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
