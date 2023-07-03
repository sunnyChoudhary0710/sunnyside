export const expandexperience = (
	containerId: string,
	targetId: string,
	expandedElementId: string
) => {
	const container = document.getElementById(containerId) as HTMLElement;
	if (container) {
		Array.from(container.querySelectorAll<HTMLElement>(`.${targetId}`)).forEach(
			(card) => {
				card.addEventListener("click", (e) => {
					e.stopPropagation();
					if (document.getElementById(expandedElementId) !== null) {
						return;
					}
					document.body.classList.toggle("modal-open");
					const clone = card.cloneNode(true) as HTMLElement;
					card.classList.toggle("flat");
					clone.setAttribute("id", expandedElementId);
					clone.style.position = "fixed";
					clone.style.left = card.offsetLeft + "px";
					clone.style.top = card.offsetTop - window.scrollY + "px";
					clone.style.width = card.clientWidth + "px";
					clone.style.height = card.clientHeight + "px";
					clone.style.zIndex = "40";
					document.body.appendChild(clone);
					setTimeout(() => clone.classList.add("card-full"), 0);
					clone.addEventListener("click", (e) => {
						document.body.classList.toggle("modal-open");
						clone.classList.remove("card-full");
						card.classList.toggle("flat");
						setTimeout(() => clone.remove(), 500);
					});
				});
			}
		);
	}
};

export const ObserverHandler = (ob: Array<any>) => {
	if (ob && ob.length > 0) {
		ob.forEach((el) => {
			if (el.isIntersecting) {
				debugger;
				el.target.classList.add(
					"animate-in-from-right", "animation-delay-100", "animation-fill-mode-[both]",
				);
			}
		});
	}
};
