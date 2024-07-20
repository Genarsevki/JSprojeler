//TRENDYOL GİBİ UYGULAMA


let urun1 = {ad:"hp vc", fiyat:30000};

let urun2 = {ad:"ruj", fiyat:100};

let urun3 = {ad:"saat", fiyat:4000};

let urun4 = {ad:"bileklik", fiyat:200};

let urun5 = {ad:"yüzük", fiyat:20000};

let urunler = [urun1, urun2, urun3, urun4, urun5];

console.log(urunler);

let aranankelime = prompt("gir");

let bulunanurunler =[];

urunler.forEach(urun=> {
    if(urun.ad.toUpperCase().includes(aranankelime.toUpperCase(),0)) //BÜYÜK HARFE ÇEVİRDİK.
    {

    bulunanurunler.push(urun);
    }
});
console.log(bulunanurunler);

/*urunler.forEach(function(urun){
    if (urun.fiyat>5000)
        {
        bulunanurunler.push(urun);
        }
});
console.log(bulunanurunler);
console.log("Urun\t|Fiyat");
bulunanurunler.forEach(urun => {

    console.log(urun.ad+"\t|" + urun.fiyat);
});*/
