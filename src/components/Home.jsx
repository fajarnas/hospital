// Home.js
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero-7f1bb39c.png";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <section>
      <div className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
        {/* Left Section: Text Content */}
        <div className="max-w-xs md:max-w-md lg:max-w-xl tracking-wide space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold-mono">
            Kesehatan Anda Adalah Prioritas Utama Kami
          </h1>
          <p className="text-lg md:text-base lg:text-xl">
            Bagikan riwayat medis lengkap Anda dengan dokter dan orang-orang terkasih secara aman, untuk komunikasi dan perawatan yang lebih baik.
          </p>
          <button 
            className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-2 rounded-full shadow-lg transition-all duration-300"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>

      
        <div className="w-full md:w-1/2 lg:w-2/5">
          <img src={hero} alt="hero" className="w-full h-auto" />
        </div>
      </div>
      </section>
      {/* AboutUs Section */}
      <AboutUs/>
      <Footer/>
      
    </div>
  );
}

export default Home;
