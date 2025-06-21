import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../components/Header";
export default function Contact() {
  return (
    <>
    <Header />
    <section className="py-16 px-4 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-10 animate-fade-in">
        {/* Info Kontak */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">Hubungi Kami</h2>
          <div className="flex items-center gap-3 text-gray-700 transition-transform duration-300 hover:scale-105">
            <MapPin className="w-7 h-7 text-blue-500 animate-bounce" />
            <span>Jl. Sehat No. 123, Kota Medika, Indonesia</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 transition-transform duration-300 hover:scale-105">
            <Phone className="w-7 h-7 text-green-500 animate-bounce" />
            <span>021-12345678</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 transition-transform duration-300 hover:scale-105">
            <Mail className="w-7 h-7 text-rose-500 animate-bounce" />
            <span>info@rssehat.com</span>
          </div>
        </div>
        {/* Form Kontak */}
        <form className="flex-1 space-y-5 animate-fade-in" onSubmit={e => e.preventDefault()}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Kirim Pesan</h3>
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            required
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            required
          />
          <textarea
            placeholder="Pesan Anda"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all duration-300 shadow"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
    </>
  );
}
