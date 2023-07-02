"use client";
interface RibbonProps {
  slow?: boolean;
}

const Ribbon = (props: RibbonProps) => {
  return (
    <div>
      <p className="marquee w-full my-0 mx-auto overflow-hidden box-border hover:cursor-default">
        <span
          className={`inline-block w-max pl-[100%] will-change-transform animate-repeat-itself ${
            props.slow ? "animation-delay" : ""
          }`}
        >
          UX&nbsp;&nbsp;Designer&nbsp;&nbsp;☀&nbsp;&nbsp;UI&nbsp;&nbsp;Developer&nbsp;&nbsp;☀&nbsp;&nbsp;ReactJs&nbsp;&nbsp;☀&nbsp;&nbsp;NextJs&nbsp;&nbsp;☀&nbsp;&nbsp;HTML&nbsp;&nbsp;☀&nbsp;&nbsp;CSS3&nbsp;&nbsp;☀&nbsp;&nbsp;Tailwind
        </span>
      </p>
    </div>
  );
};

export default Ribbon;
