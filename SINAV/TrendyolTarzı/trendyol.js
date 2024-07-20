let urun1 ={
    isim : "Excalibur",
    kategori : "Teknoloji",
    fiyat : 6.500

}

let urun2 ={
    isim : "Lenovo Ideapad",
    kategori : "Teknoloji",
    fiyat : 6.250

}

let urun3 ={
    isim : "Iphone 15 Pro Max",
    kategori : "Teknoloji",
    fiyat : 5.000

}

let urun4 ={
    isim : "Air Pods",
    kategori : "Teknoloji",
    fiyat : 5.500

}

let urun5 ={
    isim : "Apple Watch",
    kategori : "Teknoloji",
    fiyat : 6.000

}

let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);


function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun);
        }
    });

}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("----------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------------");
    });
}
