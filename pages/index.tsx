import type { NextPage } from 'next'
import Head from 'next/head'
import Barner from '../components/Barner'
import Header from '../components/Header'
import requests from '../utils/requests'



const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#0105111] lg:h-[140vh]'>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
          <Barner />
          <section>
              {/* Row  */}
              {/* Row  */}
              {/* Row  */}
              {/* Row  */}
              {/* Row  */}
          </section>
          {/* Modal  */}
      </main>
    </div>
  )
}

export default Home


export const getServerSideProps = async () => {
  
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
}