import Header from "components/Header";
import Slogan from "components/Slogan";
import About from "components/About";
import Architecture from "components/Architecture";
import Calendar from "components/Calendar";
import Documentation from "components/Documentation";
import Team from "components/Team";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-scroll bg-slate-700">
      <Head>
        <title>Safe Roads</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Slogan */}
      <section id="Home" className="snap-start">
        <Slogan />
      </section>

      {/* About */}
      <section id="About" className="snap-center">
        <About />
      </section>

      {/* Architecture */}
      <section id="Architecture" className="snap-center">
        <Architecture />
      </section>

      {/* Calendar */}
      <section id="Calendar" className=" snap-start">
        <Calendar />
      </section>

      {/* Documentation */}
      <section id="Documentation" className="snap-center">
        <Documentation />
      </section>

      {/* Team */}
      <section id="Team" className=" snap-end">
        <Team />
      </section>
    </div>
  );
};

export default Home;
