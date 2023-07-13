import clsx from "clsx";

function Button({ props, children, className }) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "bg-yellow-500 px-5 py-2 rounded-full box-border border-2 border-yellow-500 hover:bg-inherit transition md:text-2xl"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
