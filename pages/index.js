import Head from "next/head";

import Favorites from "@/components/Favorites";
import Results from "@/components/Results";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <>
      <div className="intro-benner-container">
      <div className="intro-banner">
      </div>
        <h1 className="intro-title">Fly your journy</h1>
      </div>
      <SearchSection />
      <Favorites />
      <Results />
    </>
  );
}
