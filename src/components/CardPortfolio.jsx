import { IconArrowUpRight } from "@tabler/icons-react";

function CardPortfolio({ props, text, image, link }) {
  return (
    <div
      {...props}
      className="bg-slate-200 p-5 rounded-lg xl:w-[30%] hover:bg-[#5D5DDC] cursor-pointer transition relative group/parent"
    >
      <img src={image} alt="find-movie" />
      <h2 className="mt-5 text-xl font-semibold">{text}</h2>
      <a
        href={link}
        target="_blank"
        className="bg-[#5D5DDC] group-hover/parent:bg-slate-200 w-fit p-1 rounded-full absolute bottom-0 right-0 group/circle"
      >
        <IconArrowUpRight className="w-9 h-9 transition group-hover/circle:animate-bounce" />
      </a>
    </div>
  );
}

export default CardPortfolio;
