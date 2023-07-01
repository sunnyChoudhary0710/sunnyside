import Testimonial from "../testimonial/testimonial";
import Image from "next/image";
import { Placeholder_Image } from "@/app/constants/constants";
import Ribbon from "../ribbon/ribbon";

const Overview = () => {
	return (
		<div className="relative">
			<div className="max-w-screen-2xl m-auto flex px-5 flex-col gap-3 text-center my-12 lg:my-3 prose-xl text-clamp lg:grid lg:grid-cols-2 lg:text-left lg:px-12">
				<div id="intro" className="flex flex-col gap-3 my-7 lg:mt-40 lg:gap-9">
					<h3 className="text-port-pink-base font-special font-medium text-base m-0 lg:text-lg hover:cursor-default">
						Sunny Choudhary
					</h3>
					<div className="relative my-4 lg:my-5">
						<h1 className="relative z-[1] text-port-yellow-ultra-dark font-notosans font-semibold my-0 hover:cursor-default">
							User Interface Developer
						</h1>
						<span className="text-underliner"></span>
					</div>
					<p className="backdrop-blur-sm font-notosans z-20 font-normal text-base leading-8 text-port-pink-dark lg:text-lg lg:leading-8 hover:cursor-default">
						Hey there! I&apos;m a Front End designer and developer, and I&apos;m all about
						creating awesome digital experiences. I&apos;ve got a knack for blending
						design principles with coding wizardry to make things look good and
						work even better.
					</p>
					{/* <p className="font-notosans font-normal text-port-pink-dark text-base lg:text-lg">
          Go ahead. Take a look around. If you like what you see, feel free
          to...
        </p> */}

					{/* <div className="animate-bounce w-full h-50 flex justify-start items-center">
          <img
            className="w-10 h-auto rotate-180 m-0"
            src="/point.svg"
            alt="See below"
          />
        </div> */}

					<div
						id="action-zone"
						className="z-20 flex flex-col gap-5 justify-around"
					>
						<a
							className=" text-center px-10 py-5 border-2 my-9 bg-black text-white rounded-full font-notosans text-xl transition-colors duration-300 lg:w-fit hover:bg-port-yellow-ultra-dark lg:my-5"
							href="mailto:sun.c7@outlook.com?subject=Hi there, saw your portfolio. Let's chat!"
						>
							Say Hi 👋
						</a>
					</div>
				</div>
				<div
					id="portrait"
					className="relative flex justify-center items-center h-fit drop-shadow-2xl z-20"
				>
					{/* <img className="" src="https://assets.website-files.com/606ba6cb7fddaa4aa95b526d/60716ae1736035d3251ae4d8_Hero%20Image.png" alt="portrait"/> */}
					<Image
						className="rounded-full"
						blurDataURL={Placeholder_Image}
						src="/sun.jpg"
						quality={75}
						width={500}
						height={800}
						style={{ width: "100%", height: "auto" }}
						alt="portrait"
						placeholder="blur"
					></Image>
					<div className="absolute right-0 -bottom-8 lg:bottom-16">
						<Testimonial />
					</div>
				</div>
			</div>
			<div className="hidden absolute w-[calc(100vw+100px)] -left-3 h-fit bg-port-yellow-ultra-light text-port-yellow-ultra-dark top-2/3 z-0 -rotate-6 lg:block">
				<Ribbon slow />
			</div>
			<div className="hidden absolute w-[calc(100vw+150px)] -left-3 h-fit bg-port-yellow-ultra-light text-port-yellow-ultra-dark top-2/3 z-0 -rotate-12  lg:block">
				<Ribbon />
			</div>
		</div>
	);
};

export default Overview;
