interface LinkProps extends HTMLAnchorElement {
  text: string;
  target: string;
}

const Link = ({text, target, ...props}: LinkProps) => {
  return <a href={target || "#"}>{text}</a>;
};

export default Link;
