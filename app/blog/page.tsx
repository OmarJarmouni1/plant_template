import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { ArrowRight } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 relative mt-20">
        <div className="w-full h-auto md:w-[610px] md:h-[250px] bg-[#FBFBFB]">
          <h2 className="font-Jost uppercase relative pt-5 font-semibold text-xl text-right">
            Summer cactus <br /> {"   "} & succulents
          </h2>
          <img src="/sercle.png" alt="sercle" className="mt-[110px] h-[65px]" />{" "}
          <img
            src="/planet5.png"
            alt="planet"
            className="relative bottom-[300px] w-[270px] h-[270px]"
          />
          <p className="font-Jost text-[#3D3D3D] pl-[220px] relative bottom-[430px] text-right">
            Discover the beauty of summer cactus and succulents, while also
            appreciating the unique flora around you.
          </p>
          <Button className="font-Jost bg-[#46A358] text-white rounded-sm relative left-[450px] bottom-[400px]">
            Find More
            <FaArrowRightLong className="relative pl-1 w-10 pt-1 text-xl" />
          </Button>
        </div>

        <div className="w-full h-auto md:w-[610px] md:h-[250px] bg-[#FBFBFB]">
          <h2 className="font-Jost uppercase pt-5 font-semibold text-xl text-right">
            Styling trends <br /> {"   "} & much more
          </h2>
          <img src="/sercle.png" alt="sercle" className="mt-[110px] h-[65px]" />{" "}
          <img
            src="/planet3.png"
            alt="planet"
            className="relative bottom-[300px] w-[270px] h-[270px]"
          />
          <p className="font-Jost text-[#3D3D3D] pl-[220px] relative bottom-[430px] text-right font-light">
            Discover the beauty of summer cactus and succulents, while also
            appreciating the unique flora around you.
          </p>
          <Button className="font-Jost bg-[#46A358] text-white rounded-sm relative left-[450px] bottom-[400px]">
            Find More
            <FaArrowRightLong className="relative pl-1 w-10 pt-1 text-xl" />
          </Button>
        </div>
      </div>
      <h1 className="font-Jost text-2xl font-semibold relative mt-36 text-center">
        Our Blog Posts
      </h1>
      <p className="font-Jost relative text-center text-[#727272]">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="relative mt-10">
        <div className="flex space-x-6 min-w-max ">
          {siteConfig.blogPosts.map((post, index) => (
            <div
              key={index}
              className="overflow-hidden w-72 flex-shrink-0 bg-[#FBFBFB] font-Jost"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-[#46A358] text-sm mb-2">
                  {post.date} | Read in {post.readTime}
                </p>
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <a
                  href="#"
                  className="flex items-center hover:underline font-normal hover:text-[#46A358]"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </>
  );
}
