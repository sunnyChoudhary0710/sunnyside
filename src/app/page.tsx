//import Carousel from "@/components/carousel/carousel";
import Header from "@/components/header/header";
import Overview from "@/components/overview/overview";
import List from "@/components/list/list";
import Footer from "@/components/footer/footer";

export default function Home() {
	return (
		<>
			<div className="relative font-sans bg-port-yellow-light overflow-x-hidden">
				<Header />
				<Overview />
			</div>
			<List />
			<Footer />
		</>
	);
}
