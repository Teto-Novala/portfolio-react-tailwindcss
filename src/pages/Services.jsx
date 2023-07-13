import CardServices from "../components/CardServices";

function Services() {
  return (
    <section className="text-black px-7 py-3 text-center">
      <h1 className="text-[#5D5DDC] font-semibold text-xl mb-3">Services</h1>
      <h2 className="text-slate-900 text-4xl font-bold">
        Expertise Servis! Let's check it out
      </h2>
      <p className="mt-5 text-slate-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        suscipit et excepturi veritatis earum, eos harum aperiam quibusdam
        molestiae cum.
      </p>
      <div className="flex justify-center items-center gap-x-4 flex-wrap">
        <CardServices
          heading={"UI UX Design"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, itaque!"
          }
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-heart-rate-monitor"
              width="100%"
              height="100%  "
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
              <path d="M7 20h10"></path>
              <path d="M9 16v4"></path>
              <path d="M15 16v4"></path>
              <path d="M7 10h2l2 3l2 -6l1 3h3"></path>
            </svg>
          }
        />
        <CardServices
          heading={"Webflow Design"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sequi!"
          }
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-box-multiple-5"
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
              <path d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
              <path d="M12 14h2a2 2 0 1 0 0 -4h-2v-4h4"></path>
              <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
            </svg>
          }
        />
        <CardServices
          heading={"Produk Design"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos?"
          }
          image={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-asset"
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
              <path d="M9 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
              <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M14.218 17.975l6.619 -12.174"></path>
              <path d="M6.079 9.756l12.217 -6.631"></path>
              <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            </svg>
          }
        />
      </div>
    </section>
  );
}

export default Services;
