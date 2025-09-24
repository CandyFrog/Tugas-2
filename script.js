let keranjang = ["Buket Bunga Gerbera", "Surat", "Hair Clip"]
console.log("Isi awal keranjang:", keranjang);

//push -> tambah barang ke akhir
keranjang.push("Mangga"); //menambahkan mangga (di akhir)
console.log("Setelah push: ", keranjang);

//unshift -> tambah barang ke awal
keranjang.unshift("Bunga Mawar"); //menambahkan bunga mawar (di awal)
console.log("Setelah unshift: ", keranjang);

//pop -> hapus barang terakhir
keranjang.pop(); //menghapus barang terakhir (mangga)
console.log("Setelah pop: ", keranjang);

//shift -> hapus barang pertama
keranjang.shift(); //menghapus barang pertama (bunga mawar)
console.log("Setelah shift: ", keranjang);


console.log("Isi keranjang yang sekarang:");
for(let i=0; i< keranjang.length; i++){
    console.log(`${i + 1}. ${keranjang[i]}`);
}


// ==============================================


 const produk = [
     { nama: "Beras", harga: 50000 },
     { nama: "Minyak", harga: 20000 }
   ];
console.table(produk);

produk.push({nama: "Galon", harga: 10000});
console.log("Setelah push: ");
console.table(produk);

produk.pop();
console.log("Setelah pop:");
console.table(produk);

//membuat fungsi tambahProduk
function tambahProduk(nama, harga){
    produk.push({ nama, harga });
    console.log(`Produk ${nama} ditambahkan.`);
}

//membuat fungsi hitungTotal
function hitungTotal(){
    let total = 0;
    for (let x = 0; x < produk.length; x++){
        total += produk[x].harga;
    }
    return total;
}

//cek ketersediaan produk
if (produk.length > 0){
    console.log("Produk tersedia");
} else {
    console.log("Produk kosong");
}


// ================================================

// SWITCH 
let kodeHari = 4; // 0=Minggu ... 6=Sabtu

switch (kodeHari) {
  case 0: console.log("Minggu"); break;
  case 1: console.log("Senin"); break;
  case 2: console.log("Selasa"); break;
  case 3: console.log("Rabu"); break;
  case 4: console.log("Kamis"); break;
  case 5: console.log("Jumat"); break;
  case 6: console.log("Sabtu"); break;
  default: console.log("Kode hari tidak valid");
}
