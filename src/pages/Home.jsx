import HomeHero from '../features/home/HomeHero';
import HomeBox from '../features/home/HomeBox';

/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <div className="section-layer flex flex-wrap space-y-5 bg-primary px-12 py-12 lg:pb-20" id='Home'>
      <HomeHero />
      <HomeBox />
    </div>
  );
}

export default Home;
