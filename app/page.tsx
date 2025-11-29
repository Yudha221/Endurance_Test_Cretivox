import ImageNext from "next/image";
import { listTools, journeyData, listProyek } from "@/public/data";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black">
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-20 gap-10 grid-cols-1 max-w-6xl mx-auto">
        {/* Kolom kiri */}
        <div className="flex flex-col justify-center h-full text-left space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Hi, Saya Yudha Ghilang Rohmansyah
          </h1>
          <p className="text-xl opacity-70 text-white">
            Saya seorang Front-End Developer yang fokus pada pembuatan tampilan
            website yang rapi, responsif, dan nyaman digunakan.
          </p>
        </div>

        {/* Kolom kanan */}
        <div className="flex justify-center items-center">
          <ImageNext
            src="/assets/hero-img.webp"
            alt="Hero Image"
            width={400}
            height={400}
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </div>

      {/* skill */}
      <div className="tools mt-32 px-5 md:px-0 max-w-6xl mx-auto" id="skill">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Tools yang dipakai
        </h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50 mb-10">
          Berikut ini beberapa tools yang bisa saya pakai untuk pembuatan
          Website ataupun Design
        </p>

        <div className="tools-box mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
            >
              <ImageNext
                src={tool.icon}
                alt={tool.name}
                width={56}
                height={56}
                className="bg-zinc-800 p-1 group-hover:bg-zinc-900"
              />
              <div>
                <h4 className="font-bold text-white">{tool.name}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Journey */}
      <div
        className="journey mt-32 px-5 md:px-0 max-w-6xl mx-auto flex flex-col items-center text-center"
        id="journey"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">My Journey</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50 mb-10">
          Ini adalah Journey pekerjaan saya dari awal
        </p>

        <div className="flex flex-col gap-12">
          {journeyData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 rounded-lg p-6 flex-col sm:flex-row"
            >
              <div>
                <ImageNext
                  src={item.logo}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-white w-24 h-24 sm:w-28 sm:h-28 object-cover"
                />
              </div>
              <p className="text-white text-center sm:text-left font-semibold mt-4 sm:mt-0">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div
        className="projects mt-32 px-5 md:px-0 max-w-6xl mx-auto flex flex-col items-center text-center"
        id="project"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">My Projects</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50 mb-2">
          Berikut ini beberapa proyek yang sudah saya kerjakan
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <ImageNext
                src={proyek.gambar}
                alt={proyek.nama}
                width={400}
                height={250}
                className="rounded-md"
              />
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-justify mb-6">{proyek.desk}</p>

              <div className="flex flex-wrap gap-4">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                >
                  Lihat Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact-section py-26 px-5 md:px-0 mt-32" id="kontak">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col text-left">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
            <p className="text-white opacity-80 leading-relaxed text-justify">
              Need to get in touch with me? Feel free to reach out anytime.
              Whether you have a project, a question, or just want to connect,
              I'd be more than happy to talk!
            </p>
          </div>

          {/* FORM */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <form
              action="https://formsubmit.co/lagimana330@gmail.com"
              method="POST"
              className="flex flex-col gap-5"
            >
              <div>
                <label className="font-semibold text-black">Nama</label>
                <input
                  type="text"
                  name="nama"
                  className="w-full p-3 mt-1 bg-gray-300 rounded-md outline-none text-black"
                  placeholder="Mauskan Nama Kamu..."
                />
              </div>

              <div>
                <label className="font-semibold text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 mt-1 bg-gray-300 rounded-md outline-none text-black"
                  placeholder="Masukan Email..."
                />
              </div>

              <div>
                <label htmlFor="pesan" className="font-semibold text-black">
                  Pesan
                </label>
                <textarea
                  className="w-full p-3 mt-1 h-32 bg-gray-300 rounded-md outline-none resize-none text-black"
                  name="pesan"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gray-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
