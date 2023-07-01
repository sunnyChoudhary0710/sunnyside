"use client";
import { Experience_Data } from "@/app/constants/constants";
import { useEffect } from "react";

const List = () => {
  useEffect(() => {
    const container = document.getElementById(
      "experience-container"
    ) as HTMLElement;
    if (container) {
      Array.from(
        container.querySelectorAll<HTMLElement>(".experience")
      ).forEach((card) => {
        card.addEventListener("click", (e) => {
          // Clone the clicked element
          const clone = card.cloneNode(true) as HTMLElement;
          card.classList.toggle("flat");

          /* Set some initial styles to match it,
           * but fix the position and flow it outside of the grid
           */
          clone.style.position = "fixed";
          clone.style.left = card.offsetLeft + "px";
          clone.style.top = card.offsetTop + "px";
          clone.style.width = card.clientWidth + "px";
          clone.style.height = card.clientHeight + "px";

          // Add the cloned element
          if (card && card.parentElement) {
            card.parentElement.appendChild(clone);
          }

          // Add the card-full class on the next tick to keep the animation
          setTimeout(() => clone.classList.add("card-full"), 100);

          // Shrink the full view back down to where it came from, then remove it
          clone.addEventListener("click", (e) => {
            clone.classList.remove("card-full");
            card.classList.toggle("flat");
            setTimeout(() => clone.remove(), 300);
          });
        });
      });
    }
  }, []);
  return (
    <>
      <div id="experience-container" className="bg-port-pink-base p-6">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-4 px-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:py-12">
          {Experience_Data.map((item) => {
            return (
              <>
                <article className="experience bg-port-yellow-light prose-xl p-4 min-w-[300px] min-h-[200px] rounded-2xl shadow-lg transition-all hover:shadow-2xl">
                  <div className="flex flex-col items-start justify-start">
                    <h2 className="m-0 text-port-pink-dark">{item.heading}</h2>
                    <div className="flex flex-row justify-between w-full my-4">
                      <span>{item.date}</span>
                      <span className="rounded-full py-2 px-6 bg-black text-white text-sm">
                        {item.status}
                      </span>
                    </div>
                    <p>{item.description}</p>
                    <button>{item.ctaText}</button>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
