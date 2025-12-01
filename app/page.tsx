"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ImageNext from "next/image";
import { listTools, journeyData, listProyek } from "@/public/data";
import Lanyard from "@/components/Lanyard";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animation
    heroRef.current &&
      gsap.from(heroRef.current.querySelectorAll("h1, p"), {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",
        },
      });

    // Skills Animation
    skillRef.current &&
      gsap.from(skillRef.current.querySelectorAll(".tools-box > div, h1, p"), {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: skillRef.current,
          start: "top 70%",
        },
      });

    // Journey Animation
    journeyRef.current &&
      gsap.from(
        journeyRef.current.querySelectorAll(
          "div.flex > div, div.flex > p, div.flex > h4, h1"
        ),
        {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: journeyRef.current,
            start: "top 70%",
          },
        }
      );

    // Project Animation
    projectRef.current &&
      gsap.from(
        projectRef.current.querySelectorAll(".proyek-box > div, h1, p"),
        {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 70%",
          },
        }
      );

    // Contact Animation
    if (contactRef.current) {
      gsap.from(
        contactRef.current.querySelectorAll(
          "h1, p, label, input, textarea, button"
        ),
        {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 1,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen font-sans bg-black">
      {/* HERO */}
      <div
        ref={heroRef}
        className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-20 gap-10 grid-cols-1 max-w-6xl mx-auto"
      >
        <div className="flex flex-col justify-center h-full text-left space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Hi, Saya Yudha Ghilang Rohmansyah
          </h1>
          <p className="text-xl opacity-70 text-white text-justify">
            Saya seorang Front-End Developer yang fokus pada pembuatan tampilan
            website yang rapi, responsif, dan nyaman digunakan.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Lanyard />
        </div>
      </div>

      {/* SKILL */}
      <div
        ref={skillRef}
        className="tools mt-32 px-5 md:px-0 max-w-6xl mx-auto"
        id="skill"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">
          Tools yang dipakai
        </h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50 mb-10 text-white">
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
                <p className="opacity-50 text-white">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOURNEY */}
      <div
        ref={journeyRef}
        className="journey mt-32 px-5 md:px-0 max-w-6xl mx-auto flex flex-col items-center text-center"
        id="journey"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">My Journey</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50 mb-10 text-white">
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

      {/* PROJECT */}
      <div
        ref={projectRef}
        className="projects mt-32 px-5 md:px-0 max-w-6xl mx-auto flex flex-col items-center text-center"
        id="project"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">My Projects</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50 mb-2 text-white">
          Berikut ini beberapa proyek yang sudah saya kerjakan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-700/70 backdrop-blur rounded-md text-white border border-zinc-600"
            >
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
                    key={index}
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
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
      <div
        ref={contactRef}
        className="contact-section py-26 px-5 md:px-0 mt-32"
        id="kontak"
      >
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
              <input type="hidden" name="_captcha" value="false" />

              {/* NAMA */}
              <div>
                <label className="font-semibold text-black">Nama</label>
                <input
                  type="text"
                  name="nama"
                  suppressHydrationWarning
                  autoComplete="off"
                  className="w-full p-3 mt-1 bg-gray-300 rounded-md outline-none text-black"
                  placeholder="Masukan Nama Kamu..."
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="font-semibold text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  suppressHydrationWarning
                  autoComplete="off"
                  className="w-full p-3 mt-1 bg-gray-300 rounded-md outline-none text-black"
                  placeholder="Masukan Email..."
                />
              </div>

              {/* PESAN */}
              <div>
                <label htmlFor="pesan" className="font-semibold text-black">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  suppressHydrationWarning
                  autoComplete="off"
                  className="w-full p-3 mt-1 h-32 bg-gray-300 rounded-md outline-none resize-none text-black"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                suppressHydrationWarning
                className="bg-violet-700 text-white p-3 rounded-lg w-full border border-violet-800 hover:bg-violet-600 font-bold"
              >
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
