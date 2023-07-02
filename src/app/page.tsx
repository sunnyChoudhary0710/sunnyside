import Carousel from "@/components/carousel/carousel";
import Header from "@/components/header/header";
import Overview from "@/components/overview/overview";
import List from "@/components/list/list";

export default function Home() {
	return (
		<>
			<div className="relative font-sans bg-port-yellow-light overflow-x-hidden">
				<Header />
				<Overview />
			</div>
			{/* <Carousel /> */}
			<List />

      {/* <aside id="common-modal" className="absolute h-screen w-screen top-0 left-0 pointer-events-none"></aside> */}
			{/* <main>This is main content area</main>
      <footer>This is the footer</footer> */}
		</>
	);
}
