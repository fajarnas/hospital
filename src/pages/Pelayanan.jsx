import { Hospital, Stethoscope, Syringe, Ambulance, FlaskConical, ScanLine, Pill, HeartPulse, Activity, ScissorsSquare } from "lucide-react";
import Header from "../components/Header";
const services = [
	{
		title: "Rawat Inap",
		icon: <Hospital className="w-10 h-10 text-blue-600" />,
		description: "Fasilitas kamar rawat inap yang nyaman dan lengkap untuk pasien.",
	},
	{
		title: "Rawat Jalan",
		icon: <Stethoscope className="w-10 h-10 text-green-600" />,
		description: "Pelayanan rawat jalan dengan dokter spesialis berpengalaman.",
	},
	{
		title: "IGD 24 Jam",
		icon: <Syringe className="w-10 h-10 text-red-600" />,
		description: "Instalasi Gawat Darurat buka 24 jam siap menangani keadaan darurat.",
	},
	{
		title: "Unit Ambulans",
		icon: <Ambulance className="w-10 h-10 text-yellow-600" />,
		description: "Layanan ambulans siap antar jemput pasien dengan cepat dan aman.",
	},
	{
		title: "Laboratorium",
		icon: <FlaskConical className="w-10 h-10 text-purple-600" />,
		description: "Pemeriksaan laboratorium lengkap untuk menunjang diagnosis dan pengobatan.",
	},
	{
		title: "Radiologi",
		icon: <ScanLine className="w-10 h-10 text-cyan-600" />,
		description: "Layanan radiologi seperti rontgen, USG, CT Scan, dan MRI.",
	},
	{
		title: "Apotek",
		icon: <Pill className="w-10 h-10 text-pink-600" />,
		description: "Apotek rumah sakit menyediakan obat-obatan lengkap dan terjamin.",
	},
	{
		title: "Medical Check Up",
		icon: <HeartPulse className="w-10 h-10 text-rose-600" />,
		description: "Layanan pemeriksaan kesehatan menyeluruh dan berkala.",
	},
	{
		title: "Fisioterapi",
		icon: <Activity className="w-10 h-10 text-lime-600" />,
		description: "Layanan fisioterapi untuk pemulihan cedera dan rehabilitasi.",
	},
	{
		title: "Kamar Operasi",
		icon: <ScissorsSquare className="w-10 h-10 text-gray-600" />,
		description: "Kamar operasi modern dan steril untuk tindakan bedah.",
	},
];

const Pelayanan = () => {
  return (
    <>
    <Header />
		<section className="py-16 px-4 bg-gray-50" id="pelayanan">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-6 text-blue-700">Pelayanan Kami</h2>
				<p className="mb-12 text-gray-600 max-w-2xl mx-auto">
					Kami menyediakan berbagai layanan medis untuk menunjang kesehatan Anda dengan tenaga profesional dan fasilitas terbaik.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="p-6 text-left shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl bg-white"
						>
							<div className="mb-4 flex justify-center">{service.icon}</div>
							<div className="p-0">
								<h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
								<p className="text-gray-600 text-sm">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
        </>
	);
}
export default Pelayanan;