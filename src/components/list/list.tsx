"use client";
import { Experience_Data } from "@/app/constants/constants";
import { expandexperience } from "@/app/utils/utils";
import { useEffect } from "react";

const List = () => {
	useEffect(() => {
		expandexperience(
			"experience-article-container",
			"experience-article",
			"active-experience-article"
		);
	}, []);
	return (
		<>
			<div id="experience-article-container" className="bg-port-grey p-6">
				<div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-4 px-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:py-12">
					{Experience_Data.map((item) => {
						return (
							<article
								key={item.heading}
								className="experience-article bg-port-yellow-ultra-light prose-xl p-4 min-w-[300px] min-h-[200px] rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:cursor-pointer"
							>
								<div className="flex flex-col items-start justify-start">
									<h2 className="m-0 text-port-pink-dark">{item.heading}</h2>
									<div className="flex flex-row justify-between w-full my-4">
										<span>{item.date}</span>
										<span className="rounded-full py-2 px-6 bg-black text-white text-sm">
											{item.status}
										</span>
									</div>
									<p>{item.description}</p>
									<a
										href="www.google.com"
										onClick={() => {
											return false;
										}}
									>
										{item.ctaText}
									</a>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default List;
