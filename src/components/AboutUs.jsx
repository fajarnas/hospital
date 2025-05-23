// src/components/AboutUs.js
import logo from "../assets/logo rs.png"
const AboutUs = () => {
  return (
    <section>
    <div className="bg-gray-100 p-8 md:p-16 lg:p-24">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={logo}
              alt="Rumah Sakit"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="p-20 md:w-1/2 mt-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Tentang Kami</h2>
            <p className="text-gray-600 mb-4">
              Rumah Sakit kami berdedikasi untuk memberikan perawatan kesehatan terbaik dengan standar internasional. Kami memiliki tim dokter dan tenaga medis profesional yang berpengalaman di bidangnya, serta fasilitas yang modern dan lengkap.
            </p>
            <p className="text-gray-600">
              Visi kami adalah menjadi penyedia layanan kesehatan terkemuka yang berfokus pada keselamatan pasien dan inovasi. Misi kami adalah menyediakan layanan kesehatan berkualitas tinggi yang dapat diakses oleh seluruh lapisan masyarakat.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutUs;
