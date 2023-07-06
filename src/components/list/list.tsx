"use client";
import { Experience_Data } from "@/app/constants/constants";
import { ObserverHandler, expandexperience } from "@/app/utils/utils";
import { useEffect } from "react";

const List = () => {
	useEffect(() => {
		expandexperience(
			"experience-article-container",
			"experience-article",
			"active-experience-article"
		);
	}, []);
	useEffect(() => {
		let options = {
			root: document,
			rootMargin: "0px",
			threshold: [0.9],
		};
		let observer = new IntersectionObserver(ObserverHandler, options);
		let els = document.querySelectorAll("[data-observeforanimation]");
		els.forEach((el) => {
			observer.observe(el);
		});
	}, []);
	return (
		<>
			<div
				id="experience-article-container"
				className="bg-port-yellow-ultra-light px-6 py-8 prose-xl md:py-12 lg:py-12"
			>
				<h1 className="font-notosans text-port-yellow-ultra-dark max-w-screen-2xl w-full px-3 py-8 m-auto md:gap-6 lg:px-6 lg:py-12 hover:cursor-default">
					Projects and{" "}
					<span className="relative after:inline-text-underliner">Career</span>
				</h1>
				<div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-4 px-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:py-12">
					{Experience_Data.map((item) => {
						return (
							<div
								key={item.heading}
								className="opacity-0"
								data-observeforanimation
								data-class={item.animationClass}
							>
								<article className="experience-article bg-port-yellow-light w-full h-full p-4 min-w-[300px] min-h-[200px] rounded-2xl shadow-lg  prose-xl transition-all duration-500 hover:shadow-2xl hover:cursor-pointer">
									<div className="flex flex-col items-start justify-start w-full gap-5">
										<h2 className="m-0 text-port-pink-dark">{item.heading}</h2>
										<div className="flex flex-row justify-between w-full my-4 gap-3 text-sm">
											<span className="flex items-center">{item.date}</span>
											<span
												className={`rounded-full py-2 px-6 text-white text-sm h-9  ${
													item.status === "Ongoing"
														? "bg-port-yellow-ultra-dark animate-pulse"
														: "bg-black"
												}`}
											>
												{item.status}
											</span>
										</div>
										<p className="font-normal text-base leading-8 text-port-pink-dark lg:text-lg lg:leading-8">
											{item.description}
										</p>
										<div className="details hidden flex-col gap-5 p-4">
											<img
												width={250}
												src={item.details.logo}
												alt={item.heading}
											></img>
											{item.details.paragraph.map((item, i) => {
												return (
													<p
														key={i}
														className="font-normal text-base m-0 leading-8 text-port-pink-dark lg:text-lg lg:leading-8 hover:cursor-default"
													>
														{item}
													</p>
												);
											})}
										</div>
									</div>
								</article>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default List;
