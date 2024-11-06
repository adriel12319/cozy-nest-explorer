import PropertyCard from "./PropertyCard";

const FEATURED_PROPERTIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    title: "Luxury Villa with Ocean View",
    location: "Malibu, California",
    price: 550,
    rating: 4.97,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84",
    title: "Modern Downtown Loft",
    location: "New York City",
    price: 299,
    rating: 4.85,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 399,
    rating: 4.92,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224",
    title: "Beachfront Paradise",
    location: "Miami Beach, Florida",
    price: 450,
    rating: 4.88,
  },
];

const FeaturedListings = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Featured places to stay</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {FEATURED_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;