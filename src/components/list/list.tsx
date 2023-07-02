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
			<div id="experience-article-container" className="bg-port-yellow-ultra-dark p-6  prose-xl">
			<h2 className="font-notosans text-port-yellow-ultra-light max-w-screen-2xl w-full px-3 py-8 m-auto md:gap-6 lg:px-6 lg:py-12">
					Projects and{" "}
					<span className="relative after:inline-text-underliner">Career</span>
				</h2>
				<div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-4 px-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:py-12">
					{Experience_Data.map((item) => {
						return (
							<article
								key={item.heading}
								className="experience-article bg-port-yellow-light p-4 min-w-[300px] min-h-[200px] rounded-2xl shadow-lg  prose-xl transition-all duration-500 hover:shadow-2xl hover:cursor-pointer"
							>
								<div className="flex flex-col items-start justify-start w-full">
									<h2 className="m-0 text-port-pink-dark">{item.heading}</h2>
									<div className="flex flex-row justify-between w-full my-4">
										<span>{item.date}</span>
										<span className={`rounded-full py-2 px-6 text-white text-sm h-9  ${item.status === 'Ongoing' ? 'bg-port-yellow-ultra-dark animate-pulse':'bg-black'}`}>
											{item.status}
										</span>
									</div>
									<p className="font-normal text-base leading-8 text-port-pink-dark lg:text-lg lg:leading-8 hover:cursor-default">{item.description}</p>
									<div className="details hidden flex-col gap-5">
										<img width={250} src={item.details.logo} alt={item.heading}></img>
										<p className="font-normal text-base leading-8 text-port-pink-dark lg:text-lg lg:leading-8 hover:cursor-default">{item.details.paragraph}</p>
									</div>
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
