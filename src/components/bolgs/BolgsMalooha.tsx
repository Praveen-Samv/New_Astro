

// import { Link } from 'react-router-dom'; // Import for navigation
// import Footer from '../HomePages/Footer';


// const blogs = [
//   {
//     date: 'January 01, 2025',
//     title: 'Zodiac Sign',
//     author: 'Srikant Todalagoppa',
//     image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1v5Zea.img?w=1280&h=720&m=4&q=39',
//     link: '/blog/Zodiac', // Link to the blog detail page
//   },
//   {
//     date: 'January 5, 2025',
//     title: 'Career and Love Horoscopes',
//     author: 'Gowtham',
//     image: 'https://avatars.mds.yandex.net/i?id=5d4e3ab968fc5e1ebe0b4b2d3dbd01745e3b01ad-8209833-images-thumbs&n=13',
//     link: '/blog/astrology-chakras-psychic-energy',
//   },
//   {
//     date: 'Javuary 06, 2025',
//     title: 'Mercury Retrograde',
//     author: 'Vikram Lohe',
//     image: 'https://static.life.ru/ip/unsafe/rs:fill:1200:/gravity:ce/q:100/czM6Ly9saWZlLXN0YXRpYy9wdWJsaWNhdGlvbnMvMjAyMy8xMi8xNC8xMjE5NTQ2MTEyNzI3LjIyMS53ZWJw',
//     link: '/blog/mercury-retro',
//   },
//   {
//     date: 'January 06, 2025',
//     title: 'Finacial-Astrology',
//     author: 'Goutham Krishna',
//     image: 'https://avatars.mds.yandex.net/i?id=d72525ac728fd161d807a9f5c591897a314c1d0d-12636876-images-thumbs&n=13',
//     link: '/blog/finacial-astrology'
//   },
//   {
//     date: 'January, 07, 2025',
//     title: 'Astrological Events and Their Influence on Global Affairs',
//     author: 'Vikram Lohe',
//     image: 'https://gosta.media/wp-content/themes/gosta/inc/horoskop-en/day/2024/11/29/horoskop-29-11-2024.webp',
//     link: '/blog/global-affairs-events.'
//   },
//   {
//     date: 'January 08, 2025',
//     title: 'Unlocking the Secrets of Astrology',
//     author: 'Goutham Krishna',
//     image: 'https://i.ytimg.com/vi/WV6EMOK8sG4/maxresdefault.jpg',
//     link: '/blog/astrology-educational',
//   },
//   {
//     date: 'Janyary 9, 2025',
//     title: 'Major Astrological Shifts in 2025',
//     author: 'Praveen Kumar',
//     image: 'https://static1.smi2.net/img/1200x630/7917851.jpeg',
//     link: '/blog/astrology-shift-2025',
//   },
  
//   // Add the rest of the blogs with their respective links...
// ];

// const BlogsMalooha = () => {
//   return (
//     <div className="bg-white text-black p-10 -z-10 mt-20">
//       <h1 className="text-4xl font-bold mb-8">Explore Our Blogs</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="relative group bg-transparent rounded-lg shadow-lg overflow-hidden"
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center blur-sm opacity-70 transition-all duration-300 group-hover:opacity-90"
//               style={{ backgroundImage: `url(${blog.image})` }}
//             ></div>
//             <div className="relative h-full backdrop-blur-md bg-black/30">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <p className="text-sm text-gray-200">{blog.date}</p>
//                 <h2 className="text-2xl font-semibold mb-2 text-white">{blog.title}</h2>
//                 <p className="text-gray-200 text-sm mb-4">{blog.author}</p>
//                 <Link
//                   to={blog.link}
//                   className="bg-orange-600 hover:bg-orange-500 text-white py-2 px-6 rounded-full transition duration-300 inline-block"
//                 >
//                   Read Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default BlogsMalooha;



import { Link } from 'react-router-dom'; // Import for navigation
import Footer from '../HomePages/Footer';

const blogs = [
  {
    date: 'January 01, 2025',
    title: 'Zodiac Sign',
    author: 'Srikant Todalagoppa',
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1v5Zea.img?w=1280&h=720&m=4&q=39',
    link: '/blog/Zodiac', // Link to the blog detail page
  },
  {
    date: 'January 5, 2025',
    title: 'Career and Love Horoscopes',
    author: 'Gowtham',
    image: 'https://avatars.mds.yandex.net/i?id=5d4e3ab968fc5e1ebe0b4b2d3dbd01745e3b01ad-8209833-images-thumbs&n=13',
    link: '/blog/astrology-chakras-psychic-energy',
  },
  {
    date: 'Javuary 06, 2025',
    title: 'Mercury Retrograde',
    author: 'Vikram Lohe',
    image: 'https://static.life.ru/ip/unsafe/rs:fill:1200:/gravity:ce/q:100/czM6Ly9saWZlLXN0YXRpYy9wdWJsaWNhdGlvbnMvMjAyMy8xMi8xNC8xMjE5NTQ2MTEyNzI3LjIyMS53ZWJw',
    link: '/blog/mercury-retro',
  },
  {
    date: 'January 06, 2025',
    title: 'Finacial-Astrology',
    author: 'Goutham Krishna',
    image: 'https://avatars.mds.yandex.net/i?id=d72525ac728fd161d807a9f5c591897a314c1d0d-12636876-images-thumbs&n=13',
    link: '/blog/finacial-astrology',
  },
  {
    date: 'January, 07, 2025',
    title: 'Astrological Events and Their Influence on Global Affairs',
    author: 'Vikram Lohe',
    image: 'https://avatars.mds.yandex.net/i?id=d0631df05d15f7ff8f0cd3f0ad41d6d478291da9-10385057-images-thumbs&n=13',
    link: '/blog/global-affairs-events',
  },
  {
    date: 'January 08, 2025',
    title: 'Unlocking the Secrets of Astrology',
    author: 'Goutham Krishna',
    image: 'https://i.ytimg.com/vi/WV6EMOK8sG4/maxresdefault.jpg',
    link: '/blog/astrology-educational',
  },
  {
    date: 'Janyary 9, 2025',
    title: 'Major Astrological Shifts in 2025',
    author: 'Praveen Kumar',
    image: 'https://static1.smi2.net/img/1200x630/7917851.jpeg',
    link: '/blog/astrology-shift-2025',
  },
  // Add the rest of the blogs with their respective links...
];

const BlogsMalooha = () => {
  return (
    <>
    <div className="bg-white text-black p-10 -z-10 mt-20 w-full">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative group bg-transparent rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm opacity-70 transition-all duration-300 group-hover:opacity-90"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>
            <div className="relative h-full backdrop-blur-md bg-black/30">
              <img
                src={blog.image}
                alt={blog.title}    
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-200">{blog.date}</p>
                <h2 className="text-2xl font-semibold mb-2 text-white">{blog.title}</h2>
                <p className="text-gray-200 text-sm mb-4">{blog.author}</p>
                <Link
                  to={blog.link}
                  className="bg-orange-600 hover:bg-orange-500 text-white py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Read Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add a gap between the blogs and the footer */}
      {/* <div className="mt-16">
        <Footer />
      </div> */}
    </div>
    <div className="mt-16">
    <Footer />
  </div>
  </>
  );
};

export default BlogsMalooha;