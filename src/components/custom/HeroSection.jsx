import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold">Film Finder</h1>
      <p className="text-gray-500 mt-2">Find the next thing to watch</p>
      <div className="flex gap-2 mt-4">
        <Input placeholder="Search for a film or TV show" className="w-64" />
        <Button>Submit</Button>
      </div>
      <Button variant="secondary" className="mt-4">Get Random</Button>
    </section>
  );
};

export default HeroSection;