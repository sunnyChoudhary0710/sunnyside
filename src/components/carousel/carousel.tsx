"use client";
import Image from "next/image";
import { Data_Array } from "@/app/constants/constants";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const ref = useRef() as MutableRefObject<HTMLDivElement>;
	const [buttonDisabledController, setButtonDisabledController] = useState({
		left: true,
		right: false,
	});

	useEffect(() => {
		const item = document.getElementById(`carousel-item-${currentSlide}`);
		if (item && item.parentElement) {
			item.parentElement.scroll({
				left: item.offsetLeft,
				top: 0,
				behavior: "smooth",
			});
		}
		console.log(ref.current.scrollLeft);
		// if (ref && ref.current) {
		// 	ref.current.style.transform = `translateX(${ref.current.offsetWidth})`
		// }
	}, [currentSlide]);

	useEffect(() => {
		setButtonDisabledController({
			left: ref.current.scrollLeft === 0,
			right:
				ref.current.scrollWidth -
					(ref.current.offsetWidth + ref.current.scrollLeft) ===
				0,
		});
	}, []);

	useEffect(() => {
		ref.current.addEventListener("scroll", () => {
			setButtonDisabledController({
				left: ref.current.scrollLeft === 0,
				right:
					ref.current.scrollWidth -
						(ref.current.offsetWidth + ref.current.scrollLeft) ===
					0,
			});
		});
		return ref.current.removeEventListener("scroll", () => {
			setButtonDisabledController({
				left: ref.current.scrollLeft === 0,
				right:
					ref.current.scrollWidth -
						(ref.current.offsetWidth + ref.current.scrollLeft) ===
					0,
			});
		});
	}, []);

	return (
		<section className="w-full bg-port-yellow-ultra-light py-12 prose-xl">
			<div className="flex flex-col gap-8">
				<h2 className="px-6 font-notosans max-w-screen-2xl w-full m-auto lg:px-12">
					Carousel{" "}
					<span className="relative after:inline-text-underliner">Title</span>
				</h2>
				<div
					ref={ref}
					className="invisibility-scroll overflow-x-auto whitespace-nowrap snap-x snap-mandatory transition-all"
				>
					{Data_Array.map((item, i) => {
						return (
							<article
								key={i}
								id={`carousel-item-${i}`}
								className="w-3/4 lg:w-1/5 inline-block mx-5 lg:mx-8 snap-start scroll-ml-9 lg:scroll-mx-12"
							>
								<Image
									className="rounded-t-3xl m-0"
									blurDataURL={item.blurDataUrl}
									src={item.src}
									quality={75}
									width={500}
									height={300}
									style={{ width: "auto", height: "auto" }}
									alt={item.alt}
									placeholder="blur"
								></Image>
								<section className="rounded-b-3xl p-4 whitespace-normal bg-port-yellow-light text-port-yellow-ultra-dark m-0">
									<h2 className="m-0">{item.title}</h2>
									<p className="m-0 leading-9">{item.body}</p>
								</section>
							</article>
						);
					})}
				</div>
				<div className="flex flex-row gap-5 items-start px-6 font-notosans max-w-screen-2xl w-full m-auto lg:px-12">
					<a
						className={`px-7 py-4 rounded-full bg-port-yellow-light transition-all hover:bg-port-pink-base hover:-translate-x-2 hover:cursor-pointer ${
							buttonDisabledController.left
								? "hover:cursor-not-allowed opacity-30"
								: ""
						}`}
						onClick={() => {
							currentSlide !== 0 && setCurrentSlide(currentSlide - 1);
						}}
					>
						<img
							className="rotate-180 w-11 h-auto m-0"
							src="arrow.svg"
							alt="Go Left"
						></img>
					</a>
					<a
						className={`px-7 py-4 rounded-full bg-port-yellow-light transition-all hover:bg-port-pink-base hover:-translate-x-2 hover:cursor-pointer ${
							buttonDisabledController.right
								? "hover:cursor-not-allowed opacity-30"
								: ""
						}`}
						onClick={() => {
							currentSlide !== Data_Array.length - 1 &&
								setCurrentSlide(currentSlide + 1);
						}}
					>
						<img
							className="w-11 h-auto m-0"
							src="arrow.svg"
							alt="Go Right"
						></img>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
