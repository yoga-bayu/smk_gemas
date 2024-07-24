import React from "react";
import logo from "../asset/logoskl.png"
import blog1 from "../asset/blog1.jpg"
import blog2 from "../asset/blog2.webp"
import blog3 from "../asset/blog3.jpg"
import blog4 from "../asset/blog4.jpg"
import Footer from "../components/Footer";

const Blog = () => {
    return (
        <div>
        <section className="h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(logo)} className="logo w-24 h-24 absolute "></img>
          </a>
          <div></div>
          <nav className="navbar">
            <ul className="relative text-white mt-5">
              <li className="list"><a href="/">Home</a></li>
              <li className="list"><a href="/about">Tentang Kami</a></li>
              {/* <li className="list"><a href="/">Produk ▾</a>
               <ul className="">
                <li className="produk"><a href="/batu">Batu</a></li>
                <li className="produk"><a href="/pasir">Pasir</a></li>
               </ul>
              </li> */}
              <li className="list"><a href="/kontak">Kontak</a></li>
              <li className="list"><a href="/blog">Blog</a></li>
             
                <button>
                  <li><a className="galery" href="/galery">History</a></li>
                </button>
             
            </ul>

          </nav>
        </div>
            <div className="about-text justify-center text-center text-white">
              <h1 className="font-bold text-6xl pt-52 mb-6">Kegiatan </h1>
            </div>          
        </div>

        <div className="blog text-center pt-20 text-blue-950">
            <h1 className="text-5xl font-bold mb-10">SMK Generasi Emas Nusantara</h1>
        <div className="flex mx-16 text-left">
           <div>
           </div>
            <p className=" text-center pb-10">Selamat datang di <b>SMK Generasi Emas Nusantara!</b> Kami bangga menjadi institusi pendidikan yang berkomitmen untuk membentuk generasi muda yang unggul, kreatif, dan siap menghadapi tantangan masa depan. Di Sekolah Nusantara Generasi, kami menyediakan beragam fasilitas untuk mendukung proses belajar mengajar yang optimal dan menyenangkan.</p>
        </div>
           <div>
            <p className="text-left ml-[70px]">Fasilitas Kami :
               </p>
            </div>
            <div className="flex">
              <div className="mx-10">
                <p className="">
                  <li className="text-left ml-8">Laboratorium Komputer: Dilengkapi dengan komputer terbaru dan koneksi internet cepat, laboratorium ini memungkinkan siswa untuk belajar teknologi informasi dan komunikasi dengan baik.</li>
                  <li className="text-left ml-8">Ruang Kelas Multimedia: Setiap ruang kelas dilengkapi dengan proyektor, layar, dan sistem audio untuk mendukung pembelajaran interaktif dan presentasi.
                  </li>
                  <li className="text-left ml-8">Perpustakaan Modern: Perpustakaan kami menyediakan koleksi buku yang lengkap dan bervariasi, termasuk literatur fiksi, non-fiksi, jurnal ilmiah, dan akses ke e-book</li>
                  <li className="text-left ml-8">Ruang Musik dan Seni: Fasilitas ini menyediakan alat musik lengkap, ruang seni, dan peralatan untuk menggali bakat kreatif siswa dalam bidang seni dan musik.</li>
                </p>
              </div>
              <div className="mx-10">
                  <li className="text-left ml-8">Ruang Olahraga Indoor dan Outdoor: Kami memiliki gymnasium, lapangan basket, lapangan sepak bola, dan fasilitas olahraga lainnya untuk mendukung kegiatan fisik dan kesehatan siswa.</li>
                  <li className="text-left ml-8">Area Ekstrakurikuler: Sekolah menyediakan berbagai klub dan kegiatan ekstrakurikuler, termasuk klub debat, klub robotik, klub bahasa asing, dan lain-lain untuk mengembangkan minat dan bakat siswa.
                  </li>
                  <li className="text-left ml-8">Kantin Sehat: Kantin kami menyediakan berbagai pilihan makanan sehat dan bergizi untuk memastikan siswa mendapatkan asupan yang tepat selama jam sekolah.</li>
                  <li className="text-left ml-8">Ruang Kesehatan: Dilengkapi dengan fasilitas medis dasar dan petugas kesehatan profesional untuk menangani kebutuhan kesehatan siswa selama di sekolah.</li>
              </div>
            </div>
        </div>
        
        

            <div className="blog-img mt-5 pt-20 flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox-blog text-left">
                  <img src={(blog1)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold mb-8">KEGIATAN PERSAMI</h1>
                  <p className="">Kegiatan dilakukan oleh siswa/siswi smk emas nusantara
                  kegiatan persami yang berlangsung selama dua hari, dari Sabtu hingga Minggu. Kegiatan ini meliputi berkemah, mendirikan tenda, membuat api unggun, serta berbagai aktivitas pramuka yang mengembangkan kemandirian, kerja sama, dan kepemimpinan.</p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(blog2)} className="mb-10 mt-[-110px]"></img>
                  <h1 className="cardText font-bold mb-8">KEGIATAN MERAWAT BUMI LEWAT AKSI MENANAM POHON</h1>
                  <p className="">siswa/siswi smk emas nusantara melakukan Kegiatan merawat bumi lewat aksi menanam pohon adalah upaya untuk menjaga lingkungan dengan menanam pohon di berbagai lokasi. Aktivitas ini membantu mengurangi polusi udara, mencegah erosi, dan menyediakan habitat bagi satwa. Menanam pohon juga meningkatkan kualitas udara, menambah keindahan alam, dan mendukung keseimbangan ekosistem.
                  </p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(blog3)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold">KEGIATAN PEMBEKALAN PKL SISWA/SISWI EMAS NUSANTARA</h1>
                  <p className="mt-6">Kegiatan pembekalan PKL (Praktik Kerja Lapangan) SMK adalah program persiapan bagi siswa sebelum terjun ke dunia kerja. Dalam pembekalan ini, siswa mendapatkan pengetahuan dan keterampilan yang relevan dengan industri, etika kerja, keselamatan kerja, dan tata cara berkomunikasi profesional.</p>
                </div>
                <div className="cardBox-blog text-left">
                  <img src={(blog4)} className="mb-10 mt-[-200px]"></img>
                  <h1 className="cardText font-bold">KEGIATAN MPLS SMK EMAS NUSANTARA</h1>
                  <p className="mt-6">Kegiatan MPLS (Masa Pengenalan Lingkungan Sekolah) SMK emas nusantara adalah program orientasi bagi siswa baru untuk mengenal lingkungan sekolah, aturan, dan budaya sekolah. Selama MPLS, siswa diperkenalkan dengan fasilitas sekolah, guru, serta berbagai kegiatan ekstrakurikuler. Tujuannya adalah membantu siswa beradaptasi dengan cepat dan mempersiapkan mereka untuk memulai proses belajar dengan baik.</p>
                </div>
            </div>
        
            <Footer/>
        </section>

       </div>
    )
}

export default Blog