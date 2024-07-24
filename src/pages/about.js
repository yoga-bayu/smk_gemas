import React from "react";
import image1 from "../asset/logoskl.png"
import administrasi from "../asset/administrasi.png"
import listrik from "../asset/listrik.png"
import rpl from "../asset/rpl.png"
import akutansi from "../asset/akutansi.png"
import tkj from "../asset/tkj.png"
import motor from "../asset/motor.png"
import foto from "../asset/foto.png"
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        
        <div>
        <section className="about-section h-screen">
        <div className="about w-full">
        <div className=" header absolute w-full flex justify-between items-center ">
          <a href="#" className="logoNavbar">
            <img src={(image1)} className="logo w-28 h-28 absolute "></img>
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
              <h1 className="font-bold text-6xl pt-52 mb-6">Tentang Kami</h1>
              <p className=" font-bold text-3xl">SMK Generasi Emas Nusantara</p>
            </div>          

            <div className="about-info  bg-white justify-center ml-36 mt-20 items-center text-left pt-10 rounded-xl">
                <div className="garis w-20 h-2 bg-blue-700 ml-10"></div>
                <div className="flex">
                <div className="mr-40">
                <h1 className="h1-about text-3xl font-bold pt-1 ml-10">Visi</h1>
                <p className="h1-about ml-10">Menjadi sekolah unggulan yang menghasilkan generasi berprestasi, berkarakter, dan berwawasan global.</p>
                </div>
                <div className="">
                <h1 className="h1-about text-3xl font-bold pt-1 ">Misi</h1>
                <p className="h1-about">Meneydiakan pendidikan berkualitas, mengemangkan karakter yang mulia, mempersiapkan siswa untuk menghadapi tantangan global
                  , menciptakan lingkungan belajar yang inspiratif
                </p>
                </div>
                </div>
            </div>
            </div>
      
      </section>

      <section className="about-section-info w-full h-screen">
        <div className="text-center">
            <h1 className="h1-about font-bold text-3xl pt-20">Jurusan</h1>
        </div>

        <div className="order flex justify-center items-center flex-wrap gap-6">
                <div className="order-about text-left">
                  <img src={(administrasi)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Administrasi</h1>
                  <p className="mt-6">Administrasi Perkantoran adalah jurusan yang berfokus pada pembelajaran tentang pengelolaan kegiatan administratif dan operasional dalam sebuah kantor atau organisasi. Siswa di jurusan ini mempelajari berbagai aspek yang diperlukan untuk mendukung efisiensi dan efektivitas kerja di lingkungan perkantoran
                    Seperti : Manajemen Kantor: Teknik pengelolaan dan organisasi kantor untuk meningkatkan produktivitas
                  </p>
                </div>
                <div className="order-about text-left">
                <img src={(tkj)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Teknik Komputer Jaringan</h1>
                  <p className="mt-6">Teknik Komputer dan Jaringan (TKJ) adalah jurusan yang fokus pada pembelajaran tentang perangkat keras komputer dan jaringan. Siswa di jurusan ini mempelajari berbagai aspek terkait instalasi, konfigurasi, dan pemeliharaan perangkat keras komputer serta jaringan komputer. Materi pembelajaran mencakup dasar-dasar elektronik, sistem operasi, pemrograman dasar, perakitan dan perawatan komputer, serta manajemen jaringan.</p>
                </div>
                <div className="order-about text-left">
                <img src={(rpl)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Rekayasa Perangkat Lunak</h1>
                  <p className="mt-6">Rekayasa Perangkat Lunak (RPL) adalah jurusan yang berfokus pada pembelajaran tentang pengembangan dan pemeliharaan perangkat lunak. Jurusan ini mengajarkan siswa tentang berbagai aspek dari siklus hidup perangkat lunak, mulai dari analisis kebutuhan hingga desain, implementasi, pengujian, dan pemeliharaan. Berikut adalah penjelasan singkat tentang jurusan RPL:
                  Pemrograman: Belajar bahasa pemrograman seperti Java,
                  </p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                <img src={(motor)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Teknik Sepeda Motor</h1>
                  <p className="mt-6">Teknik Sepeda Motor adalah jurusan yang berfokus pada pembelajaran tentang perawatan, perbaikan, dan modifikasi sepeda motor. Siswa di jurusan ini mempelajari berbagai aspek teknis terkait mesin, sistem kelistrikan, dan komponen sepeda motor lainnya.</p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                <img src={(listrik)} className="mb-10"></img>
                  <h1 className="cardText font-bold text-2xl">Teknik Instalasi Tenaga Listrik</h1>
                  <p className="mt-6">Teknik Instalasi Tenaga Listrik (TITL) adalah jurusan yang berfokus pada pembelajaran tentang perancangan, pemasangan, pemeliharaan, dan perbaikan sistem instalasi listrik. Siswa dalam jurusan ini mempelajari berbagai aspek terkait dengan instalasi dan distribusi tenaga listrik.</p>
                </div>
                <div className="order-about text-left mt-[-50px]">
                <img src={(akutansi)} className="mb-10"></img>                  
                <h1 className="cardText font-bold text-2xl">Akutansi</h1>
                  <p className="mt-6">Akuntansi adalah jurusan yang berfokus pada pembelajaran tentang pengelolaan dan pelaporan keuangan dalam berbagai jenis organisasi, termasuk perusahaan, lembaga pemerintah, dan non-profit. Jurusan ini mengajarkan siswa cara mencatat, menganalisis, dan melaporkan transaksi</p>
                </div>
            </div>

            <div className="closing-first flex items-center mb-40">
            <div className="img-logo">
                <img className="w-[500px] h-[800px] mr-20" src={(foto)} alt="Gambar" />
            </div>
            <div className="text-logo mr-20 mt-[-400px]">
                <h1 className="text-5xl font-bold mb-6 mt-[-100px]">Kenapa Kami ?</h1>
            <div className="list-card bg-white w-[450px] h-[460px] absolute mt-10">
                <ul className="list">
                    <li className="list-li mt-6">
                        <p className="py-2 mx-4 font-bold">✓  Fasilitas Unggulan</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Sekolah kami dilengkapi dengan fasilitas modern dan lengkap, mulai dari laboratorium sains dan komputer, perpustakaan dengan koleksi buku yang kaya, hingga ruang seni dan olahraga yang memadai. Fasilitas ini dirancang untuk mendukung proses belajar mengajar yang optimal dan membuat pengalaman belajar lebih menyenangkan dan efektif.</p>
                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Tenaga Pendidikan Berkualitas</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami memiliki tim guru yang berpengalaman dan berkualifikasi tinggi dalam bidangnya. Para guru tidak hanya berperan sebagai pengajar, tetapi juga sebagai pembimbing dan motivator yang membantu siswa mencapai potensi maksimal mereka.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Kurikulum Komprehensif</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kurikulum kami dirancang untuk mengembangkan pengetahuan akademik, keterampilan praktis, dan karakter siswa. Kami menawarkan berbagai program studi dan kegiatan ekstrakurikuler yang memungkinkan siswa mengeksplorasi minat dan bakat mereka.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Lingkungan Belajar yang Mendukung</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami menciptakan lingkungan yang aman, nyaman, dan inklusif, di mana setiap siswa merasa diterima dan dihargai. Kami juga menyediakan layanan konseling untuk mendukung kesejahteraan emosional dan mental siswa.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Banyaknya Ekstrakurikuler</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Sekolah kami menawarkan berbagai kegiatan ekstrakurikuler, mulai dari olahraga, seni, musik, hingga klub sains dan debat. Kegiatan ini dirancang untuk mengembangkan keterampilan sosial, kepemimpinan, dan kreativitas siswa.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Komitmen terhadap Teknologi</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami selalu mengintegrasikan teknologi terbaru dalam proses belajar mengajar. Dengan akses ke perangkat dan software modern, siswa kami siap menghadapi era digital dengan percaya diri.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Program Beasiswa dan Bebas Biaya Gedung</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Kami menawarkan berbagai program beasiswa untuk siswa berprestasi dan memastikan bahwa tidak ada biaya gedung tambahan, membuat pendidikan berkualitas menjadi lebih terjangkau bagi semua lapisan masyarakat.</p>

                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Persiapan Karir yang Matang</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Sekolah kami memberikan pelatihan dan bimbingan karir, serta program magang yang membantu siswa mendapatkan pengalaman kerja nyata. Kami juga memiliki hubungan yang baik dengan berbagai perusahaan dan institusi, membuka peluang karir yang luas bagi lulusan kami.</p>
                    </li>
                    <li className="list-li">
                        <p className="py-2 mx-4 font-bold">✓ Lokasi Strategis</p>
                        <p className="keterangan hidden hover:block ml-[40px]">Sekolah kami terletak di lokasi yang mudah diakses, baik oleh transportasi umum maupun kendaraan pribadi, memudahkan siswa dan orang tua dalam menjangkau sekolah.</p>

                    </li>
                   
                </ul>
            </div>
            </div>


            </div>

            <div className="closing-cta mt-20 mb-52 ml-56 mr-40 justify-center align-center bg-white rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi lebih lanjut.</p>
          <a href="https://wa.me/6281388230020" className="btn-cta justify-center align-center flex ">
              Whatsapp
          </a>
          </div>
          </div>
        <div className="mt-20">
      <Footer/>
      </div>
      </section>

      
      </div>
    )
}

export default AboutPage