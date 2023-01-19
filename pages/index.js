// import Head from 'next/head'

import Favorites from "@/components/Favorites";
import Results from "@/components/Results";
import SearchSection from "@/components/SearchSection";


export default function Home() {
  return (
    <>
     <SearchSection />
     <Favorites />
     <Results />
    </>
  )
}
