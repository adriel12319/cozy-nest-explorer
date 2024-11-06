import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import FeaturedListings from "@/components/FeaturedListings";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
              alt="Hero background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-airbnb-secondary mb-8">
              Find your next stay
            </h1>
            <SearchForm />
          </div>
        </div>

        {/* Featured Listings */}
        <FeaturedListings />
      </main>
    </div>
  );
};

export default Index;