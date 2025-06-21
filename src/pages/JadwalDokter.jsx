
import Header from "../components/Header";

export const jadwalDokter = [
  { nama: "dr. Andi Wijaya, Sp.PD", spesialis: "Penyakit Dalam", hari: "Senin, Rabu, Jumat", jam: "08.00 - 12.00" },
  { nama: "dr. Siti Rahmawati, Sp.A", spesialis: "Anak", hari: "Selasa, Kamis", jam: "09.00 - 13.00" },
  { nama: "dr. Budi Santoso, Sp.B", spesialis: "Bedah", hari: "Senin & Kamis", jam: "10.00 - 14.00" },
  { nama: "dr. Lina Marlina, Sp.OG", spesialis: "Kandungan", hari: "Rabu & Jumat", jam: "13.00 - 16.00" },
  { nama: "dr. Rudi Hartono, Sp.THT", spesialis: "THT", hari: "Sabtu", jam: "08.00 - 11.00" },
];

const JadwalDokter = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Jadwal Dokter</h1>
        <p className="mb-6 text-gray-600">Berikut adalah jadwal praktik dokter di rumah sakit kami:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4 border-b">Nama Dokter</th>
                <th className="py-2 px-4 border-b">Spesialis</th>
                <th className="py-2 px-4 border-b">Hari</th>
                <th className="py-2 px-4 border-b">Jam</th>
              </tr>
            </thead>
            <tbody>
              {jadwalDokter.map((dokter, idx) => (
                <tr key={idx} className="text-center hover:bg-blue-50">
                  <td className="py-2 px-4 border-b">{dokter.nama}</td>
                  <td className="py-2 px-4 border-b">{dokter.spesialis}</td>
                  <td className="py-2 px-4 border-b">{dokter.hari}</td>
                  <td className="py-2 px-4 border-b">{dokter.jam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </>
  );
};

export default JadwalDokter;
