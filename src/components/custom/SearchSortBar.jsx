import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SortingButtons from "./SortingButtons";

const SearchSortBar = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Search Bar */}
      <div className="relative w-full max-w-xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Sorting Buttons */}
      <div className="mt-4 flex gap-2">
       <SortingButtons></SortingButtons>
      </div>
    </div>
  );
};

export default SearchSortBar;