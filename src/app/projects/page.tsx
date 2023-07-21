import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import List from "@/components/list/list";

export default function Project() {
	return (
		<>
			<div className="relative font-sans bg-port-yellow-light overflow-x-hidden z-40">
				<Header />
				<List />
			</div>
			<Footer />
		</>
	);
}
