import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const FilterSidebar = () => {
  return (
    <aside className="w-64 p-4 border-r bg-white">
      <h3 className="font-semibold">Genre</h3>
      <div className="flex flex-wrap gap-2 my-2">
        <Badge variant="secondary">Action ✖</Badge>
        <Badge variant="secondary">Crime ✖</Badge>
        <Badge variant="secondary">Thriller ✖</Badge>
      </div>

      <h3 className="font-semibold mt-4">Year</h3>
      <Slider defaultValue={[1990, 2025]} min={1900} max={2025} className="mt-2" />

      <h3 className="font-semibold mt-4">Type</h3>
      <div className="flex flex-col space-y-1">
        <Checkbox defaultChecked>Movies</Checkbox>
        <Checkbox defaultChecked>TV Shows</Checkbox>
        <Checkbox>People</Checkbox>
      </div>

      <h3 className="font-semibold mt-4">Language</h3>
      <div className="flex flex-col space-y-1">
        <Checkbox defaultChecked>English</Checkbox>
        <Checkbox defaultChecked>Spanish</Checkbox>
        <Checkbox defaultChecked>French</Checkbox>
      </div>
    </aside>
  );
};

export default FilterSidebar;