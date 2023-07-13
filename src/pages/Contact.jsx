import Button from "../components/Button";
import profil from "../assets/contact-me.png";

function Contact() {
  return (
    <section className="bg-[#5D5DDC] px-7 h-screen flex flex-col items-center xl:flex-row-reverse xl:justify-center xl:items-start xl:pt-10">
      <img src={profil} alt="profil" />
      <div className="xl:w-[40%] xl:pt-[10%]">
        <h1 className="text-3xl pt-7 font-semibold md:text-4xl xl:pt-0">
          Got A Project! Let's Talk
        </h1>
        <p className="mt-3 md:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
          deserunt!
        </p>
        <Button className={"mt-6"}>Contact</Button>
      </div>
    </section>
  );
}

export default Contact;
