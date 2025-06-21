import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Rs from "../assets/rs.png";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [currentArticle, setCurrentArticle] = useState(0);
  const articles = [
    {
      title: "Tips Menjaga Kesehatan Jantung",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      summary: "Pelajari cara menjaga kesehatan jantung Anda dengan pola makan sehat dan olahraga teratur.",
    },
    {
      title: "Pentingnya Vaksinasi untuk Anak",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      summary: "Vaksinasi membantu melindungi anak dari berbagai penyakit berbahaya. Simak manfaat dan jadwalnya di sini.",
    },
    {
      title: "Cara Mengelola Stres di Era Modern",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
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
                className="w-full h-40 object-cover rounded mb-4"
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
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50 justify-center">
            {/* Card 1 */}
            <div className="min-w-[200px] bg-white-50 border  rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAxPuQ4XWttO7NU30fscZUovy4Mk4mmisCg&s" alt="BPJS Kesehatan" className="h-12 mb-2" />
              <span className="font-semibold ">BPJS Kesehatan</span>
            </div>
            {/* Card 2 */}
            <div className="min-w-[200px] bg-white-50 border  rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="data:image/jpeg;base64,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" alt="Pertamina Life" className="h-12 mb-2" />
              <span className="font-semibold ">Pertamina Life</span>
            </div>
            {/* Card 3 */}
            <div className="min-w-[200px] bg-white-50 border rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAkFBMVEX////TEUXSAD722d/SADv11dv++/z87/PRADb++PrTAEHRADj65Or99ffVFk/PACj0ytPwr8DvssDnlqTjeY/xucfQAC7pjKXplKjZQGPliJzsmq/76u/bUW/UAEj31d/faoDngZzWMVfbPGjaSWjeYXzeUXXlcpHup7rVJlDhXIHiZYfZNmDhbojqoK/ywMxjpLEiAAAC00lEQVRIie2V2ZKiMBSGsyAJIWCg2VcBRZDF93+7CYi2XQO2fTlTfcqLkNTn2f6cAPBr/7kRaT+HhP3hSPuwhfEDLI8OIdt7e/lj4SHA73JFSb0qcAXGwg16Tyn9tzC3Vdr4KTnim3ovvsXUiLZF8nWPO1CJ1decFmSp+/e2dcxG7aW/mDl87SA/ZNYrn4IdkvUTfjJfFFfrj19O+fVzjY/1NlhA+wvH3fNnfBZrtjhCnacvgyQaGFuf36UzmFtgAJ8Kg69TL7W4ZEN+28nhSr1nSy+fa+EDQ8qUOyHTw6Vg9bDO4fahD9IEBA+RTDApGVSK264drvfSMlXAxRQgKZqmCNMpcPWMIITOTGhmvp5iBazcvnCAK0u1av1WxCuVIAutaV2tJxl1jQt46lX93L54mN2QbnLJ6En67+J1sJe52G17WGobF3Osow4n02uB62A9VJYAEgSWu+hFi8JptetleRiEKMvYusdRair3P6LqXgJ+qmQj1Gu4HyUs423XtWOdXSdtEftUgZVNd1/lrtHM8bb2KpiHECGG9LJbUFEiVvtzcwVlFCnhxgVJ47As6/iGuVWvwPpyaaZPo0KmOFxO6xxwnm6RlELTPJRkOdIxcbeGFr5rVcNP2iKPnC+rw2Gy7pZDHqXRYxCI4RTfPsR5iwN4PnJDnepS4NyR80frdcpOs6tu06EUi2xU09LUNysN7GiGgbEP5XwOZWtHa5uTyakRRGlyRbUEFTmfDNrnolRaF+CX8zFxFFTJf/cKdQHNTDImMpuXEzkfdIQuOx554wJqlW6rokdKFrx4tpLeK52SmsPRky29gZ1+CFpaOxA526AR9S7ZdZ7CFLyAqq8gSiNOgmz9Ti3FSWQm5Fojky8gaGQAU100/MYLK7zqAQqvf/thVUfvlNxBrLDd26DVTyWcBQB4dXzbI1BzLHPlw/TkGQJ/86b+jRPyU+TX/jn7AxxjNc+Elb9yAAAAAElFTkSuQmCC" alt="AIA" className="h-12 mb-2" />
              <span className="font-semibold ">AIA</span>
            </div>
            {/* Card 4 */}
            <div className="min-w-[200px] bg-white-50 border  rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="data:image/jpeg;base64,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" alt="Panin Life" className="h-12 mb-2" />
              <span className="font-semibold ">Panin Life</span>
            </div>
            {/* Card 5 */}
            <div className="min-w-[200px] bg-white-50 border rounded-xl shadow-lg p-4 flex flex-col items-center">
              <img src="data:image/png;base64,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" alt="Manulife" className="h-12 mb-2" />
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
