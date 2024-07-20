let urun1= {ad:"hp pc",fiyat:30000};
let urun2= {ad:"bandaj",fiyat:900};
let urun3= {ad:"saat",fiyat:4000};
let urun4= {ad:"bileklik",fiyat:2000};
let urun5= {ad:"yüzük",fiyat:20000};
let urunler = [urun1,urun2,urun3,urun4,urun5];
console.log(urunler);
let ara ="b";
let bul=[];
/*
urunler.forEach(urun =>
    {
        if (urun.ad.toUpperCase().includes(ara.toUpperCase(),0))
        {
            bul.push(urun);
        }
    });
console.log(bul);    
*/
/*
urunler.forEach(function(urun)
{
    if(urun.fiyat>2000)
        {
            bul.push(urun);
        }
});

console.log(bul);
*/

console.log("ürün\t|fiyat");
bul.forEach(urun=>
    {
        console.log(urun.ad+"\t|"+urun.fiyat);
    }
);