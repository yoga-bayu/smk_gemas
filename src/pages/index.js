import * as React from "react"
import Footer from "../components/Footer"
import image1 from "../asset/logoskl.png"
import gratisOngkir from "../asset/gedung.jpg"
import muatan from "../asset/olahraga.jpg"
import cod from "../asset/obeng.jpg"
import produk from "../asset/lapanganBasket.png"
import produk1 from "../asset/kolamRenang.png"
import produk2 from "../asset/perpustakaan.png"
import produk3 from "../asset/komputer.png"
import produk4 from "../asset/ruangMusik.png"
import produk5 from "../asset/aula.png"
import produk6 from "../asset/taman.png"
import produk7 from "../asset/labolatorium.png"
import prestasi1 from "../asset/prestasi1.png"
import prestasi2 from "../asset/prestasi2.png"
import prestasi3 from "../asset/prestasi3.png"
import prestasi4 from "../asset/prestasi4.png"
import prestasi5 from "../asset/prestasi5.png"
import prestasi6 from "../asset/prestasi6.png"
import customer1 from "../asset/cs1.png"
import customer2 from "../asset/cs2.png"
import customer3 from "../asset/cs3.png"
import customer4 from "../asset/cs4.png"
// import Header from "../components/Header"

const IndexPage = () => {
  // const initSlider = () => {


    
  //   const imageList = document.querySelector(".slider-wrapper .image-list")
  //   const slideButtons = document.querySelectorAll(".slider-wrapper .slider-button")
  
  // slideButtons.forEach(button => {
  // button.addEventListener("click", () => {
  //   const direction = button.id === "prev-slide" ? -1 : 1;
  //   const scrollAmount = imageList.clientWidth * direction;
  //   imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
  // });
  // });
  // }
  
  // window.addEventListener("load", initSlider);
    return (
   
    // Section home
    <div>
      <section className="home w-screen h-screen">
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
            <div className="text absolute text-white">
              <p className=" font-bold text-2xl">SMK GENERASI EMAS NUSANTARA</p>
              <h1 className="font-bold text-5xl mb-2">Menyambut Generasi Masa Depan dengan</h1>
              <h1 className="font-bold text-5xl mb-3">Pendidikan Berkualitas dan Berkarakter</h1>
              <p>Mencetak Generasi Emas</p>
            </div>
      
              <a className="tombol_menu absolute text-white w-40 h-14 justify-center flex items-center" href="https://wa.me/6281388230020">Hubungi Kami<i class='bx bxl-whatsapp'></i></a>
          
      
      </section>


      {/* SECTION ALASAN */}

      <section className="alasan-section" id="alasan-section">
            <div className=" justify-center flex ">
              <h1 className=" mt-40 text-4xl font-bold">Kenapa Harus Generasi Emas Nusantara ?</h1>
            </div>

            <div className="card flex justify-center items-center flex-wrap gap-8">
                <div className="cardBox text-left">
                  <img src={(gratisOngkir)} className="img-ongkir"></img>
                  <h1 className="cardText font-bold">Bebas Biaya Gedung</h1>
                  <p className="mt-6">Sekolah kami dengan bangga mengumumkan bahwa biaya gedung ditiadakan! Ini berarti siswa dapat menikmati fasilitas sekolah yang lengkap tanpa tambahan biaya gedung, sehingga pendidikan berkualitas menjadi lebih terjangkau bagi semua. Mari bergabung dengan kami untuk masa depan yang lebih cerah tanpa beban biaya tambahan...</p>
                </div>
                <div className="cardBox text-left">
                  <img src={(muatan)} className="img-muatan"></img>
                  <h1 className="cardText font-bold">Banyak Ekstrakulikuler</h1>
                  <p className="mt-6">Sekolah kami menawarkan beragam ekstrakurikuler untuk mengembangkan minat dan bakat siswa di berbagai bidang. Mulai dari olahraga, seni, musik, sains, hingga klub debat, setiap siswa memiliki kesempatan untuk mengeksplorasi dan mengembangkan potensinya. Dengan banyaknya pilihan ekstrakurikuler, kami memastikan setiap siswa...</p>
                </div>
                <div className="cardBox text-left">
                  <img src={(cod)} className="img-cod"></img>
                  <h1 className="cardText font-bold">Full Praktek</h1>
                  <p className="mt-6">Sekolah kami menekankan pentingnya pembelajaran praktis dalam kurikulum. Dengan banyaknya sesi praktek di berbagai mata pelajaran, siswa dapat mengaplikasikan teori yang dipelajari di kelas ke dalam situasi nyata. Melalui laboratorium sains, workshop teknologi, proyek lapangan, dan kegiatan hands-on lainnya, kami memastikan...</p>
                </div>
            </div>
       
      </section>

      {/* SECTION  PRODUK*/}

    <section className="produk-section">
      <div className="justify-center items-center text-center">
        <h1 className="mt-20 mb-10 text-4xl font-bold">Fasilitas kami</h1>
        <p>Sekolah kami menyediakan fasilitas terbaik untuk mendukung proses belajar mengajar.</p>
          <p>Dengan ruang kelas yang modern, laboratorium lengkap, perpustakaan dengan koleksi buku yang kaya, area olahraga yang luas, serta teknologi terkini, kami memastikan siswa memiliki lingkungan yang kondusif untuk belajar dan berkembang. </p>
        <p>Fasilitas-fasilitas ini dirancang untuk memberikan kenyamanan dan kemudahan bagi siswa dalam mengeksplorasi dan mengembangkan potensi mereka secara maksimal.  </p>
           <p>Bergabunglah dengan kami dan rasakan manfaat dari fasilitas unggulan kami!






</p>
      </div>

      <div className="card mt-10 flex justify-center items-center text-center flex-wrap gap-4">
                <a href="../pasir/pasirCor" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuBataMerah" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../pasir/pasirRangkas" className="cardProduk rounded-2xl">
                  <img src={(produk2)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuSirdam" className="cardProduk rounded-2xl">
                  <img src={(produk3)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuScreening" className="cardProduk rounded-2xl">
                  <img src={(produk4)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../batu/batuS  k" className="cardProduk rounded-2xl">
                  <img src={(produk5)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                {/* <a href="../pasir/abuBatu" className="cardProduk rounded-2xl">
                  <img src={(produk6)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="../pasir/pasirBangka" className="cardProduk rounded-2xl">
                  <img src={(produk7)} className="img-produk w-full h-full rounded-3xl"></img>
                </a> */}


            </div>
                {/* <div className=" justify-center items-center flex mt-10 mb-10">
                  <a href="/batu" className="btn-produk flex justify-center items-center text-center w-40 h-16 rounded-3xl text-white">
                    EXPLORE MORE
                  </a>
              </div> */}
    </section>

    {/* SECTION CLOSING */}

    <section className="closing"> 
    <div className="closing-first flex items-center">
      <div className="img-logo">
        <img className="w-40 h-40 mt-5 mb-5 ml-28 mr-28 rounded-2xl" src={(image1)} alt="Gambar" />
      </div>
      <div className="text-logo mr-52">
        <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
        <p><b>SMK Generasi Emas Nusantara</b> tempat dimana pendidikan berkualitas dan 
        pengembangan karakter menjadi prioritas utama kami, demi menghasilkan putra/putri yang hebat di Indonesia. 
        Kami telah berkomitmen untuk menyediakan lingkungan belajar yang inspiratif dan mendukung bagi setiap siswa maupun siswi.</p>
      </div>
    </div>
    <div className="text-produk justify-center item-center text-center">
        <h1 className="text-4xl font-bold mt-20 ">Prestasi</h1>
      </div>

    <div className="body-slide flex items-center justify-center">
      <div className="container-slide ">
          <div className="slide-wrapper">
            {/* <button id="prev-slide" className="slide-button material-symbols-rounded text-4xl">◂</button> */}
            <div className="image-list grid">
              <div className="image-item">
                <img src={(prestasi1)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi2)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi3)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi4)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi5)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi6)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi1)} className="" ></img>
              </div>
              <div className="image-item">
                <img src={(prestasi2)} className="" ></img>
              </div>
            </div>
            {/* <button id="next-slide" className="slide-button material-symbols-rounded text-4xl">▸</button> */}

            {/* <div className="slider-scrollbar h-[24px] w-full flex items-center">
              <div className="scrollbar-track h-[2px] w-full relative bg-white rounded-md">
                <div className="scrollbar-thumb h-full w-[50%] absolute bg-white "></div>
              </div>
            </div> */}
          </div>
      </div>
      </div>  

      <div className="card-closing mt-[-100px] flex justify-center items-center text-center flex-wrap gap-4">
                {/* <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk1)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk2)} className="img-produk w-full h-full rounded-2xl"></img>
                </a>
                <a href="#" className="cardProduk rounded-2xl">
                  <img src={(produk3)} className="img-produk w-full h-full rounded-2xl"></img>
                </a> */}

        <div className="closing-cta mt-[-150px] mb-52 ml-56 mr-40 justify-center align-center bg-white rounded-2xl">
          <div className="ml-10 pt-10 text-left">
          <h1 className="h1-cta font-bold text-3xl mb-5 pb-">Hubungi Kami Segera</h1>
          <p className="p-cta font-bold">Untuk informasi lebih lanjut.</p>
          <a href="https://wa.me/6281388230020" className="btn-cta justify-center align-center flex ">
              whatsapp
          </a>
          </div>
        </div>
        </div>

        <div className="text-cus justify-center item-center text-center">
          <h1 className="text-4xl font-bold mt-20 ">Our Patners</h1>
        </div>

        <div className="closing-customer flex justify-center items-center text-center flex-wrap gap-4">
          <div className="card-customer">
             <img src={(customer1)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(customer2)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(customer3)} className="img-customer w-full h-full"></img>
          </div>
          <div className="card-customer">
             <img src={(customer4)} className="img-customer w-full h-full"></img>
          </div>

        </div>
    


    </section>

    <Footer/>
    </div>

    

  )
}


 


export default IndexPage

export const Head = () => <title>SMK Gemas</title> 
