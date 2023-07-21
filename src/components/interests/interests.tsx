const Interests = () => {
	const items = [
		{
			title: "Coding",
			desc: "Been in love with coding for 8 years now.",
			imageClass: "bg-img-coding",
		},
		{
			title: "Designing",
			desc: "A little noon at this but the time simply flies while I do my website designing.",
			imageClass: "bg-img-designing",
		},
		{
			title: "Gaming",
			desc: "Definately a pro at this. When I am not coding, there's a solid 92% chance you'll find me gaming.",
			imageClass: "bg-img-gaming",
		},
		{
			title: "Travelling",
			desc: "Now, who doesn't like to travel.",
			imageClass: "bg-img-travelling",
		},
	];
	return (
		<section className="max-w-screen-2xl my-24 px-6 m-auto lg:px-12 prose-xl bg-port-yellow-ultra-light">
			<div>
				<h1 className="mb-12">Interests</h1>
			</div>
			<div className="flex flex-col gap-5 lg:gap-7">
				{items.map((item) => {
					return (
						<article className={`bg-cover ${item.imageClass} transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl`}>
							<div className={`min-h-[500px] w-full`}>
								<h3>{item.title}</h3>
                                <p>{item.desc}</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Interests;
