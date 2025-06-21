import Header from "../components/Header";
import Cc from "../assets/CC.png";

const AboutUs = () => {
  return (
    <> 
    <Header/>
    <section>
      <div className="bg-gray-100 p-8 md:p-16 lg:p-24">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex items-center justify-center p-6">
              <img
                src={Cc}
                alt="3D dokter, perawat, dan suster"
                className="w-full h-ful object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Tentang Kami</h2>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Sejarah Rumah Sakit</h3>
              <p className="text-gray-600 mb-4">
                Berdiri sejak tahun 1995, Rumah Sakit kami telah berkembang menjadi salah satu pusat layanan kesehatan terkemuka di wilayah ini. Berawal dari klinik kecil, kini kami memiliki fasilitas modern dan layanan lengkap untuk memenuhi kebutuhan masyarakat.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Visi</h3>
              <p className="text-gray-600 mb-4">
                Menjadi rumah sakit pilihan utama yang unggul dalam pelayanan, keselamatan pasien, dan inovasi di bidang kesehatan.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Misi</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
                <li>Menyediakan layanan kesehatan berkualitas tinggi dan terjangkau.</li>
                <li>Mengutamakan keselamatan dan kenyamanan pasien.</li>
                <li>Mengembangkan SDM profesional dan berintegritas.</li>
                <li>Mengadopsi teknologi dan inovasi terbaru di bidang medis.</li>
                <li>Berperan aktif dalam edukasi dan promosi kesehatan masyarakat.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutUs;
