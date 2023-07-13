import me from "../assets/me.png";
import Button from "../components/Button";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

function Home() {
  return (
    <section className="px-7 bg-[#5D5DDC] h-screen flex flex-col gap-y-10 xl:flex-row-reverse xl:items-center">
      <div className="relative z-0 py-5 xl:w-1/2">
        <img src={me} alt="profil" className="md:m-auto" />
        <div className="absolute w-full -bottom-12 -z-[1] md:w-[80%] md:bottom-0 md:left-20 xl:w-[90%] xl:top-5 xl:left-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M24.9,-36.1C39,-29.7,61.9,-34.2,70.5,-28.4C79.2,-22.5,73.7,-6.4,66.1,5.7C58.5,17.8,48.8,25.9,41.4,37.9C34.1,49.9,29.1,65.9,19.7,70.1C10.3,74.3,-3.5,66.6,-13,57.7C-22.6,48.9,-27.8,38.8,-40.9,31.2C-53.9,23.7,-74.8,18.7,-83.3,7.5C-91.9,-3.7,-88.1,-21.1,-74.8,-27.6C-61.6,-34.1,-39,-29.8,-25,-36.3C-10.9,-42.8,-5.5,-60.1,0,-60C5.4,-60,10.8,-42.6,24.9,-36.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute w-full -top-1/4 left-1/4 -z-[1] md:w-[40%] md:top-1/2 md:left-10 xl:top-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M24.9,-4.3C24.9,11.1,12.4,22.2,-7.5,22.2C-27.3,22.2,-54.7,11.1,-54.7,-4.3C-54.7,-19.7,-27.3,-39.5,-7.5,-39.5C12.4,-39.5,24.9,-19.7,24.9,-4.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute w-[50%] -top-2 right-48 -z-[1] md:right-0 md:top-1/3 xl:top-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M40.4,-20.8C41.8,-8.6,25.4,1.8,7.7,15.9C-9.9,29.9,-28.7,47.6,-31.4,45.2C-34.1,42.8,-20.7,20.2,-12.8,-0.9C-4.9,-22,-2.4,-41.7,8.5,-44.4C19.4,-47.2,38.9,-33.1,40.4,-20.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 md:px-12 xl:w-1/2">
        <div>
          <h1 className="font-semibold text-2xl mb-5 md:text-5xl">
            Hello, I'm Teto Novala An Frontend Developer
          </h1>
          <p className="md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
            ullam?
          </p>
        </div>
        <div className="flex gap-x-2">
          <Button>Get Started</Button>
          <Button className={"flex gap-x-2"}>
            <IconPlayerPlayFilled />
            Watch Intro
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
