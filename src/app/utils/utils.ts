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

					const clone = card.cloneNode(true) as HTMLElement;
					card.classList.toggle("flat");
					clone.setAttribute("id", expandedElementId);
					clone.style.position = "fixed";
					if (card.parentElement) {
						clone.style.left = card.parentElement.offsetLeft + "px";
						clone.style.top =
							card.parentElement.offsetTop - window.scrollY + "px";
						clone.style.width = card.parentElement.clientWidth + "px";
						clone.style.height = card.parentElement.clientHeight + "px";
					}
					clone.style.zIndex = "40";
					document.body.appendChild(clone);
					document.body.classList.toggle("modal-open");
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
				const animationClassList = el.target
					.getAttribute("data-class")
					.split(" ");
				el.target.classList.add(...animationClassList);
			}
		});
	}
};
