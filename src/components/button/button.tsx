interface ButtonProps {
  text: String;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="flex h-full w-full py-4 rounded-full justify-center items-center transition-all ease-out duration-500 text-white prose-2xl bg-black lg:bg-port-yellow-dark hover:bg-black hover:text-white"
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
