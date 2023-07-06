import Header from "@/components/header/header";
import Contact from "@/components/contact/contact";
import List from "@/components/list/list";
import Footer from "@/components/footer/footer";

export default function Project() {
	return (
		<>
			<div className="relative font-sans bg-port-yellow-light overflow-hidden z-40">
				<Header />
			</div>
			<div className="relative font-sans py-16 bg-port-yellow-light">
				<Contact />
			</div>
			<Footer />
		</>
	);
}
