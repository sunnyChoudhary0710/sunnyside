"use client";

import { ObserverHandler } from "@/app/utils/utils";
import { useEffect } from "react";

const Footer = () => {
	useEffect(() => {
		let options = {
			root: document,
			rootMargin: "0px",
			threshold: [0.4],
		};
		let observer = new IntersectionObserver(ObserverHandler, options);
		let els = document.querySelectorAll("[data-observeforanimation]");
		els.forEach((el) => {
			observer.observe(el);
		});
	}, []);
	return (
		<>
			<footer className="flex flex-col gap-6 px-4 py-8 text-white prose-xl text-center bg-port-grey lg:px-12 lg:py-24">
				<div className="max-w-screen-2xl mx-auto w-full gap-6 px-4 flex flex-col-reverse justify-between items-center md:flex-col-reverse lg:gap-12 lg:grid lg:grid-cols-footer">
					<div className="h-auto flex items-center justify-center opacity-0"
					data-observeforanimation
					data-class="animate-in-from-bottom animation-delay-400 animation-fill-mode-[both] lg:animation-delay-[0]"
					>
						<img
							className="w-28 h-auto object-contain cursor-pointer transition-transform hover:rotate-12 hover:scale-125 lg:w-32"
							src="/port-logo.svg"
							alt="Sunny Side"
							onClick={() => {
								window.open("/", "_self");
							}}
						/>
					</div>
					<div className="flex flex-col items-center justify-center gap-6 md:flex-row lg:flex-row lg:gap-8">
						<a
							className="text-white opacity-0 px-8 transition-all port-nav-hover hover:scale-100 hover:cursor-pointer"
							href="/projects"
							data-observeforanimation
							data-class="animate-in-from-bottom animation-delay-100 animation-fill-mode-[both]"
						>
							Projects
						</a>
						<a
							className=" text-white opacity-0 px-8 transition-all port-nav-hover hover:scale-100 hover:cursor-pointer"
							href="/contact"
							data-observeforanimation
							data-class="animate-in-from-bottom animation-delay-200 animation-fill-mode-[both]"
						>
							Contact
						</a>
						<a
							className="text-white opacity-0 px-8 transition-all port-nav-hover hover:scale-100 hover:cursor-pointer"
							href="/Sunny_Resume_2023.pdf"
							data-observeforanimation
							data-class="animate-in-from-bottom animation-delay-300 animation-fill-mode-[both]"
						>
							Resume
						</a>
					</div>
					<div
						id="action-zone"
						className="z-20 opacity-0 flex flex-col gap-5 justify-around lg:animation-delay-400"
						data-observeforanimation
						data-class="animate-in-from-bottom animation-fill-mode-[both] lg:animation-delay-400"
					>
						<a
							className=" text-center max-w-md px-10 py-2 border-2 my-4 bg-black text-white rounded-full font-notosans text-xl transition-colors duration-300 lg:w-fit hover:bg-port-yellow-ultra-dark lg:my-0"
							href="/contact"
						>
							Say Hi 👋
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
