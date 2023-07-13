import CardAbout from "../components/CardAbout";
import profil from "../assets/about-me.png";

function About() {
  return (
    <section className="text-black px-7 md:px-12 pb-8 flex flex-col items-center gap-y-6 xl:flex-row xl:justify-center xl:gap-x-16">
      <div className="relative md:scale-125">
        <img src={profil} alt="profil" className="m-auto" />
        <div className="absolute w-full bottom-10">
          <div className="absolute bottom-0 w-full -z-[1]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#F1C21B"
                d="M66.4,-21.2C75.5,6.3,65,40.6,40.9,58.8C16.8,76.9,-20.9,78.8,-44.4,61.6C-67.8,44.4,-77,8.2,-67.2,-20.3C-57.5,-48.7,-28.7,-69.4,0,-69.4C28.7,-69.4,57.4,-48.7,66.4,-21.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="scale-110 absolute w-full bottom-0 -z-[2]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFF"
                d="M66.4,-21.2C75.5,6.3,65,40.6,40.9,58.8C16.8,76.9,-20.9,78.8,-44.4,61.6C-67.8,44.4,-77,8.2,-67.2,-20.3C-57.5,-48.7,-28.7,-69.4,0,-69.4C28.7,-69.4,57.4,-48.7,66.4,-21.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="scale-[1.15] absolute w-full bottom-0 -z-[3]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#8A3FFC"
                d="M66.4,-21.2C75.5,6.3,65,40.6,40.9,58.8C16.8,76.9,-20.9,78.8,-44.4,61.6C-67.8,44.4,-77,8.2,-67.2,-20.3C-57.5,-48.7,-28.7,-69.4,0,-69.4C28.7,-69.4,57.4,-48.7,66.4,-21.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start gap-y-4 xl:w-1/2">
        <h1 className="text-[#5D5DDC] text-lg md:text-xl">ABOUT ME</h1>
        <h2 className="text-slate-800 text-3xl font-bold md:text-4xl">
          Designing Solutions, Not Just Visuals
        </h2>
        <p className="text-slate-600 md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam animi
          sint porro consequatur odit maxime.
        </p>
        <div className="flex flex-col gap-y-3">
          <CardAbout
            heading={"5k+ Complete Project"}
            children={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sapiente."
            }
          />
          <CardAbout
            heading={"8+ Years of Experience"}
            children={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, provident quae."
            }
            className={"bg-green-300"}
          />
        </div>
        <button className="bg-yellow-500 text-white px-6 py-4 rounded-full border-2 border-yellow-500 hover:bg-inherit hover:text-yellow-500 transition w-1/2 md:w-1/3 md:text-xl">
          Download CV
        </button>
      </div>
    </section>
  );
}

export default About;
