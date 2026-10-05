// import { Link } from "react-router-dom";
import { products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";
import sepatuolahraga from "../../Images/sepatu-olahraga.png";

export default function Dashboard() {
  return (
    
    <div>
        
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white text-xl p-6 rounded shadow mb-6 font-bold">
        <img
        src={sepatuolahraga}
        alt="Sepatu Olahraga"
        className="w-full h-auto rounded-lg shadow-md mb-6"></img>
        <h1 classname="font-['Montserrat'] italic font-black text-3xl uppercase tracking-tighter">Selamat datang di toko peralatan dan aksesoris olahraga kami! Temukan berbagai produk berkualitas untuk mendukung aktivitas olahraga Anda. Jelajahi kategori kami dan temukan perlengkapan yang sesuai dengan kebutuhan Anda.</h1>
        <h2 className="text-sm text-gray-500 font-semibold mt-4">Koleksi peralatan olahraga terbaik dari brand terpercaya</h2>
      </div>

      <h1 className="text-lg font-bold mb-4">Semua Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* {[1, 2, 3].map((id) => ( 

          //salin blok kode ini dan pindahkan ke product card
          <div key={id} className="border rounded-lg p-4 shadow hover:shadow-lg"> 
            <h2 className="font-semibold">Produk {id}</h2> 
            <p className="text-gray-600">Deskripsi singkat produk {id}</p> 
            <Link 
              to={`/product/${id}`} 
              className="text-blue-600 hover:underline mt-2 block" 
            > 
              Lihat Detail
            </Link> 
          </div>

        ))}  */}

        {/* blok kode di atas bisa diedit menjadi berikut */}
        {products.map((item) => (
          //p adalah props untuk mengirim data produk ke komponen ProductCard
          <ProductCard p={item} />
        ))}
      </div>
    </div>
  );
}
