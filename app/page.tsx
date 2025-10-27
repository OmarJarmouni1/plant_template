import { Button } from "@nextui-org/button";
import ArticlePage from "./article/page";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:py-8 md:py-1">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#F5F5F5]">
          <div className="w-full h-auto md:w-[820px] md:h-[300px]">
            <h3 className="font-Jost uppercase text-[#3D3D3D] lg:pl-6 md:pl-10 pt-10 font-medium md:text-left">
              Welcome to GreenShop
            </h3>
            <div className="font-bold text-4xl md:text-7xl pt-4 lg:pl-6 md:pl-10 md:text-left">
              <h1 className="font-Jost uppercase text-[#3D3D3D]">
                Let’s Make a{" "}
              </h1>
              <h1 className="font-Jost uppercase text-[#3D3D3D]">
                Better{" "}
                <span className="font-Jost uppercase text-[#46A358]">
                  Planet
                </span>
              </h1>
            </div>
            <p className="font-Jost px-4 pt-4 md:text-left lg:pl-6 md:pl-10 text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use <br /> our plants to create a unique Urban
              Jungle. Order your favorite plants!
            </p>
            <Button className="font-Jost bg-[#46A358] text-white mx-4 mt-6 rounded-md font-medium lg:ml-7 lg:pl-4 md:pl-10">
              SHOP NOW
            </Button>
          </div>
          <div className="flex items-end justify-center relative md:justify-start md:right-20 md:bottom-28 lg:left-[400px] lg:bottom-3">
            <img
              src="/planet.png"
              alt="Plant"
              className="lg:w-[400px] lg:h-[400px] md:w-96 md:h-96"
            />
          </div>
        </div>
        <br />
        <ArticlePage />
        <BlogPage />
      </div>
    </section>
  );
}
