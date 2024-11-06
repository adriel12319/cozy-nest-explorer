import { Card } from "@/components/ui/card";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
}

const PropertyCard = ({ image, title, location, price, rating }: PropertyCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-none">
      <div className="aspect-square overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-airbnb-secondary">{location}</h3>
          <div className="flex items-center">
            <span className="text-sm">★ {rating}</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-airbnb-light">{title}</p>
        <p className="mt-1">
          <span className="font-semibold">${price}</span> night
        </p>
      </div>
    </Card>
  );
};

export default PropertyCard;