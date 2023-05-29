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
    <div className="text-white h-screen overflow-scroll bg-slate-700">
      <Head>
        <title>Safe Roads</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Slogan */}
      <section id="Home">
        <Slogan />
      </section>

      {/* About */}
      <section id="About">
        <About />
      </section>

      {/* Architecture */}
      <section id="Architecture">
        <Architecture />
      </section>

      {/* Calendar */}
      <section id="Calendar">
        <Calendar />
      </section>

      {/* Documentation */}
      <section id="Documentation">
        <Documentation />
      </section>

      {/* Team */}
      <section id="Team">
        <Team />
      </section>
    </div>
  );
};

export default Home;
