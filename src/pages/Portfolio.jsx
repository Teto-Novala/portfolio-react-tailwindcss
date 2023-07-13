import CardPortfolio from "../components/CardPortfolio";
import FindMovie from "../assets/find-movie.png";
import portfolioTailwind from "../assets/portfolio-tailwind.png";
import bookList from "../assets/book-list.png";

function Portfolio() {
  return (
    <section className="text-black text-center p-7 md:p-12">
      <h1 className="mt-6 text-[#5D5DDC] font-bold text-xl">Portfolio</h1>
      <p className="text-slate-900 font-semibold text-3xl">Project Showcase</p>
      <div className="mt-9 flex flex-col gap-y-6 md:gap-y-9 xl:flex-row xl:flex-wrap xl:justify-center xl:gap-x-7">
        <CardPortfolio
          text={"Find Movie"}
          image={FindMovie}
          link={"https://teto-novala.github.io/search-movie/"}
        />
        <CardPortfolio
          text={"Portfolio Tailwindcss"}
          image={portfolioTailwind}
          link={"https://teto-novala.github.io/portfolio-tailwind/"}
        />
        <CardPortfolio
          text={"Book List"}
          image={bookList}
          link={"https://teto-novala.github.io/Todo-List/"}
        />
      </div>
    </section>
  );
}

export default Portfolio;
