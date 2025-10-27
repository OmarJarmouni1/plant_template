"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { siteConfig } from "@/config/site";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { ButtonUI } from "./ButtonUI";

const categories = [
  { name: "House Plants", count: 33 },
  { name: "Potter Plants", count: 12 },
  { name: "Seeds", count: 65 },
  { name: "Small Plants", count: 39 },
  { name: "Big Plants", count: 23 },
  { name: "Succulents", count: 17 },
  { name: "Terrariums", count: 19 },
  { name: "Gardening", count: 13 },
  { name: "Accessories", count: 18 },
];

const sizes = [
  { name: "Small", count: 119 },
  { name: "Medium", count: 86 },
  { name: "Large", count: 78 },
];

export default function ArticlePage() {
  const [priceRange, setPriceRange] = useState([39, 199]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4 font-Jost">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.name}
                className="flex justify-between items-center font-Jost"
              >
                <span>{category.name}</span>
                <span className="text-gray-500 font-Jost">
                  ({category.count})
                </span>
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mt-8 mb-4 font-Jost">
            Price Range
          </h2>
          <Slider
            defaultValue={[39, 199]}
            max={199}
            min={39}
            step={1}
            onValueChange={setPriceRange}
            className="bg-[#46a358] dark:bg-[#46a358]"
          />
          <div className="flex justify-between mt-2 font-Jost">
            <h3 className="font-Jost">
              Price:{" "}
              <span className="text-[#46a358] font-semibold">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </h3>
          </div>
          <ButtonUI />
          <h2 className="text-lg font-semibold mt-8 mb-4">Size</h2>
          <ul className="space-y-2 font-Jost">
            {sizes.map((size) => (
              <li key={size.name} className="flex justify-between items-center">
                <span>{size.name}</span>
                <span className="text-gray-500">({size.count})</span>
              </li>
            ))}
          </ul>
          <img
            src="/pub1.png"
            alt="Sale plant"
            className="object-cover rounded-lg pt-5 w-[620px] h-[400px]"
          />
        </aside>
        <main className="w-full font-Jost">
          <div className="flex justify-between items-center mb-6">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-green-600 font-semibold">
                    All Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Sale
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center">
              <span className="mr-2">Short by:</span>
              <select className="rounded p-1">
                <option>Default sorting</option>
                <option>Default sorting</option>
                <option>Default sorting</option>
                <option>Default sorting</option>
                <option>Default sorting</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-Jost">
            {siteConfig.plants.map((plant) => (
              <div key={plant.name} className="border rounded-lg p-4">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-48 items-center object-cover mb-4 rounded-lg relative left-9"
                />
                <h3 className="font-semibold">{plant.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-600 font-bold">
                    ${plant.price.toFixed(2)}
                  </span>
                  {plant.oldPrice && (
                    <span className="text-gray-500 line-through">
                      ${plant.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {plant.discount && (
                  <span className="bg-green-100 text-[#46A358] text-xs font-semibold px-2 py-1 rounded">
                    {plant.discount}
                  </span>
                )}
                <div className="flex justify-between mt-4 bg-transparent hover:bg-transparent">
                  <Button className="bg-white text-black hover:bg-white hover:text-[#46A358]">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button className="bg-white text-black hover:bg-white hover:text-[#46A358]">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button className="bg-white text-black hover:bg-white hover:text-[#46A358]">
                    <span className="sr-only">View details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <nav className="relative inline-flex lg:left-[340px] gap-2">
              <Button className="hover:bg-[#46a358] hover:text-white bg-white text-black">
                1
              </Button>
              <Button className="hover:bg-[#46a358] hover:text-white bg-white text-black">
                2
              </Button>
              <Button className="hover:bg-[#46a358] hover:text-white bg-white text-black">
                3
              </Button>
              <Button className="hover:bg-[#46a358] hover:text-white bg-white text-black">
                4
              </Button>
              <Button className="hover:bg-[#46a358] hover:text-white bg-white text-black">
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
