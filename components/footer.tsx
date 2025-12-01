import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-white py-4 px-6 md:px-12 flex md:flex-row flex-col items-center justify-between gap-6 text-black">
      {/* LOGO */}
      <div className="logo">
        <Image
          src="/Logo Cretivox - black.png"
          alt="Cretivox Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </div>

      {/* NAV LINKS */}
      <div className="flex gap-6 font-semibold">
        <a href="#beranda">Beranda</a>
        <a href="#journey">Journey</a>
        <a href="#project">Proyek</a>
      </div>

      {/* ICONS */}
      <div className="flex items-center gap-4">
        <a href="#">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
