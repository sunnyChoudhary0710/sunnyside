import Carousel from "@/components/carousel/carousel";
import Header from "@/components/header/header";
import Ribbon from "@/components/ribbon/ribbon";
import Overview from "@/components/overview/overview";
import List from "@/components/list/list";

export default function Home() {
  return (
    <>
      <div className="font-sans bg-port-yellow-light">
        <Header />
        <Overview />
      </div>

      {/* <div className="hidden absolute w-[calc(100vw+100px)] -left-3 h-fit bg-port-yellow-ultra-light text-port-yellow-ultra-dark top-2/3 z-0 -rotate-6 lg:block">
        <Ribbon slow/>
      </div>
      <div className="hidden absolute w-[calc(100vw+150px)] -left-3 h-fit bg-port-yellow-ultra-light text-port-yellow-ultra-dark bottom-72 z-0 -rotate-12  lg:block">
        <Ribbon />
      </div> */}
      {/* <Carousel /> */}
      <List />

      {/* <main>This is main content area</main>

      <footer>This is the footer</footer> */}
    </>
  );
}
