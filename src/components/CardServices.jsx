import clsx from "clsx";

function CardServices({ props, heading, text, image, className }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "mt-7 py-9 rounded-lg bg-slate-200 cursor-pointer group transition hover:bg-[#5D5DDC] md:w-[40%] xl:w-[25%]"
      )}
    >
      <div>
        <div className="w-12 h-12  bg-slate-400 rounded-full mx-auto relative">
          <div className="absolute -top-2 -right-2 w-[90%] transition group-hover:text-white">
            {image}
          </div>
        </div>
      </div>
      <h3 className="mt-6 font-semibold text-lg group-hover:text-white">
        {heading}
      </h3>
      <p className="text-slate-800 group-hover:text-white">{text}</p>
    </div>
  );
}

export default CardServices;
