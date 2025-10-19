// import React from 'react'
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'

// const Home = () => {
//   return (
//     <div>
//       <Hero></Hero>
//       <LatestCollection></LatestCollection>
//       <BestSeller></BestSeller>
//       <OurPolicy></OurPolicy>
//       <NewsletterBox></NewsletterBox>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    // The main tag provides better semantic structure for your page content.
    <main>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </main>
  );
};

export default Home;