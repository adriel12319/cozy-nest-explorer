import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white rounded-full shadow-lg p-2">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 w-full md:w-auto p-2">
          <Input
            type="text"
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border-none focus:ring-0"
          />
        </div>
        
        <div className="flex-1 w-full md:w-auto p-2 border-t md:border-t-0 md:border-l border-gray-200">
          <Input
            type="date"
            placeholder="Check in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border-none focus:ring-0"
          />
        </div>
        
        <div className="flex-1 w-full md:w-auto p-2 border-t md:border-t-0 md:border-l border-gray-200">
          <Input
            type="date"
            placeholder="Check out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border-none focus:ring-0"
          />
        </div>
        
        <div className="p-2">
          <Button type="submit" className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;