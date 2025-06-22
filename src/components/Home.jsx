import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Rs from "../assets/rs.png";
import Footer from "./Footer";
import { useState } from "react";
import aia from "../assets/aia.jpeg";
import pertamina from "../assets/pertamina.png";
import panin from "../assets/panin.jpeg";
import manulife from "../assets/manulife.png";


function Home() {
  const navigate = useNavigate();
  const [currentArticle, setCurrentArticle] = useState(0);
  const articles = [
    {
      title: "Tips Menjaga Kesehatan Jantung",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ9Nk1lzQrdJFWISq27gPhCIzqb6v8e_hvA&s",
      summary: "Pelajari cara menjaga kesehatan jantung Anda dengan pola makan sehat dan olahraga teratur.",
    },
    {
      title: "Pentingnya Vaksinasi untuk Anak",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr45wwmOkhepN_SkCDndMw6bMIlN6CG6qLPA&s",
      summary: "Vaksinasi membantu melindungi anak dari berbagai penyakit berbahaya. Simak manfaat dan jadwalnya di sini.",
    },
    {
      title: "Cara Mengelola Stres di Era Modern",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU4HH0726A32XFyRO1mAco13z1IDDRKieQw&s",
      summary: "Stres bisa berdampak pada kesehatan. Temukan tips mengelola stres agar hidup lebih sehat dan bahagia.",
    },
  ];

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handlePrevArticle = () => {
    setCurrentArticle((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };
  const handleNextArticle = () => {
    setCurrentArticle((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <Header />
      <section>
      <div className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
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
            Login / Register
          </button>
        </div>

      
        <div className="w-full md:w-1/2 lg:w-2/5">
          <img src={Rs} alt="hero" className="w-30 h-30" />
        </div>
      </div>
      </section>

      {/* Jadwal Dokter Preview */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">Jadwal Dokter Hari Ini</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border  rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mb-4 bg-blue-100">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="dr. Ani" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">dr. Ani</h3>
              <p className="text-blue-600 mb-1">Spesialis Anak</p>
              <p className="text-gray-600">08:00 - 12:00 WIB</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white border rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mb-4 bg-blue-100">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="dr. Budi" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">dr. Budi</h3>
              <p className="text-blue-600 mb-1">Spesialis Jantung</p>
              <p className="text-gray-600">10:00 - 14:00 WIB</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border  rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mb-4 bg-blue-100">
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="dr. Citra" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">dr. Citra</h3>
              <p className="text-blue-600 mb-1">Spesialis Kulit</p>
              <p className="text-gray-600">13:00 - 17:00 WIB</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/JadwalDokter")}
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Lihat Jadwal Lengkap
          </button>
        </div>
      </section>

      {/* Review Pasien */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">Review Pasien</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center mb-3 bg-blue-100">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Andi Rahman" className="w-full h-full object-cover" />
              </div>
              <p className="italic mb-2">Pelayanan sangat ramah dan dokter sangat membantu!</p>
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="font-semibold text-gray-700">Andi Rahman</span>
            </div>
            {/* Review 2 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center mb-3 bg-blue-100">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Siti Rahma" className="w-full h-full object-cover" />
              </div>
              <p className="italic mb-2">Fasilitas lengkap dan proses pendaftaran mudah.</p>
              <div className="flex mb-1">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                <span className="text-gray-300">★</span>
              </div>
              <span className="font-semibold text-gray-700">Siti Rahma</span>
            </div>
            {/* Review 3 */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center mb-3 bg-blue-100">
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Budi Nugroho" className="w-full h-full object-cover" />
              </div>
              <p className="italic mb-2">Dokter dan perawat sangat profesional dan cepat tanggap.</p>
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="font-semibold text-gray-700">Budi Nugroho</span>
            </div>
          </div>
        </div>
      </section>
   
      {/* Artikel Kesehatan */}
      <section className=" py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">Artikel Kesehatan</h2>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevArticle}
              className="p-2 rounded-full bg-white border shadow hover:bg-blue-100"
              aria-label="Sebelumnya"
            >
              &#8592;
            </button>
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col items-center">
              <img
                src={articles[currentArticle].image}
                alt={articles[currentArticle].title}
                className="w-full h-full object-cover rounded mb-4"
              />
              <h3 className="font-bold text-lg mb-2">
                {articles[currentArticle].title}
              </h3>
              <p className="text-gray-600 mb-2">
                {articles[currentArticle].summary}
              </p>
            </div>
            <button
              onClick={handleNextArticle}
              className="p-2 rounded-full bg-white border shadow hover:bg-blue-100"
              aria-label="Berikutnya"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* Asuransi Rekanan */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Asuransi Rekanan</h2>
          <div
            className="
              flex md:grid md:grid-cols-3 lg:grid-cols-5
              gap-6
              overflow-x-auto md:overflow-x-visible
              pb-2
              scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50
              justify-start md:justify-center
            "
          >
            {/* Card 1 */}
            <div className="min-w-[32vw] max-w-xs md:min-w-[200px] md:max-w-none bg-white-50 border rounded-xl shadow-lg p-4 flex flex-col items-center flex-shrink-0">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAxPuQ4XWttO7NU30fscZUovy4Mk4mmisCg&s" alt="BPJS Kesehatan" className="h-12 mb-2" />
              <span className="font-semibold ">BPJS Kesehatan</span>
            </div>
            {/* Card 2 */}
            <div className="min-w-[32vw] max-w-xs md:min-w-[200px] md:max-w-none bg-white-50 border rounded-xl shadow-lg p-4 flex flex-col items-center flex-shrink-0">
              <img src={pertamina} alt="Pertamina Life" className="h-12 mb-2" />
              <span className="font-semibold ">Pertamina Life</span>
            </div>
            {/* Card 3 */}
            <div className="min-w-[32vw] max-w-xs md:min-w-[200px] md:max-w-none bg-white-50 border rounded-xl shadow-lg p-4 flex flex-col items-center flex-shrink-0">
              <img src={aia} alt="AIA" className="h-12 mb-2" />
              <span className="font-semibold ">AIA</span>
            </div>
            {/* Card 4 */}
            <div className="min-w-[32vw] max-w-xs md:min-w-[200px] md:max-w-none bg-white-50 border rounded-xl shadow-lg p-4 flex flex-col items-center flex-shrink-0">
              <img src={panin} alt="Panin Life" className="h-12 mb-2" />
              <span className="font-semibold ">Panin Life</span>
            </div>
            {/* Card 5 */}
            <div className="min-w-[32vw] max-w-xs md:min-w-[200px] md:max-w-none bg-white-50 border rounded-xl shadow-lg p-4 flex flex-col items-center flex-shrink-0">
              <img src={manulife} alt="Manulife" className="h-12 mb-2" />
              <span className="font-semibold ">Manulife</span>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      
    </div>
  );
}

export default Home;
