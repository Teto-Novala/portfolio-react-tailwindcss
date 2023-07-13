import clsx from "clsx";
import React from "react";

function CardAbout({ props, children, heading, className = "bg-red-300" }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "flex gap-x-2 items-start justify-between p-3 rounded-lg"
      )}
    >
      <div className="w-[20%] md:w-[10%] xl:w-[6%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-bar-to-right"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 12l-10 0"></path>
          <path d="M14 12l-4 4"></path>
          <path d="M14 12l-4 -4"></path>
          <path d="M20 4l0 16"></path>
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-xl md:text-2xl">{heading}</h3>
        <p className="md:text-lg">{children}</p>
      </div>
    </div>
  );
}

export default CardAbout;
