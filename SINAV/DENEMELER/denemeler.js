/*let toplam=0;
for(i=1; i<=50; i++){
    toplam=toplam+i;
    console.log(i);
}

console.log(toplam);


//let isim = prompt("İSMİN: ");       
//let soyisim = prompt("SOYİSİM ");   

//console.log(isim+ soyisim);

function yazdir()
{
    console.log("GENAR");
    
}
yazdir();

function topla()
{
    console.log(5+7);
    
}

topla();

function yazdir(isim,soyisim)
{
   console.log(isim + " " + soyisim);
}
yazdir("Genar","ŞEVKİ");

function cube(sayi){
    console.log(sayi*sayi*sayi);
}
cube(5);
cube(4);

let yas = Number(prompt("yaş gir "));
kontrolEt(yas);

function kontrolEt(yas) 
{
if (yas>18)
{
    console.log("EHLİYETİ ALABİLİRSİN");
}
else
{
    console.log("YAŞINI DOLDUR");
}
}

let donenDeger = cube(3);
kareAl(donenDeger);

function kareAl(sayi)
{
    let sonuc=sayi*sayi;
    console.log(sonuc);
}

console.log(donenDeger);
function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return(sonuc);
}

let sayilar = [1,56,7,4,540,9,7,-12,-19,-54,-65,-59,2.6];
let enkucuk = sayilar[0];

for(let i=1; i<sayilar.length; i++){
    if(enkucuk>sayilar[i]){
        enkucuk=sayilar[i];
        console.log(enkucuk)
    }   
}

let kurs ="Web Programlama Dersi.";
//let sonuc = kurs.toLowerCase();
//console.log(kurs.trim());
console.log(kurs.slice(12,21));
console.log(kurs);
//console.log(sonuc);
*/


/*let sayilar = [1,56,7,4,540,9,7,-12,-19,-54,-65,-59,2.6];

sayilar.push(555);
console.log(sayilar);

console.log(sayilar.length);

console.log(sayilar[0]);*/


/*let metin=["GENAR","KEREM","BAHADIR","SEMİH","HOCA"];

sonuc=metin.join(" ");
console.log(sonuc);
console.log(metin.reverse())

let metin = "BUGÜN HAVA GÜZEL VE DIŞARI ÇIKMAK İSTİYORUM"

console.log(metin.slice(6,10));


let sayi= -10;
console.log(Math.abs(sayi));

let sayi2 =  6.31;
console.log(Math.floor(sayi2));
console.log(Math.ceil(sayi2));
console.log(Math.round(sayi2));

let gir =

function cube(sayi){
    let sonuc= sayi*sayi*sayi;
    console.log(sonuc);
}*/

let urun1= {ad:"hp pc",fiyat:30000};
let urun2= {ad:"bandaj",fiyat:900};
let urun3= {ad:"saat",fiyat:4000};
let urun4= {ad:"bileklik",fiyat:2000};
let urun5= {ad:"yüzük",fiyat:20000};
let urunler = [urun1,urun2,urun3,urun4,urun5];
console.log(urunler);
let ara = prompt("ürün gir")
let bul=[];

urunler.forEach(urun =>
    {
        if (urun.ad.toUpperCase().includes(ara.toUpperCase(),0))
        {
            bul.push(urun);
        }
    });
console.log(bul);    


/*urunler.forEach(function(urun)
{
    if(urun.fiyat>2000)
        {
            bul.push(urun);
        }
});*/

console.log(bul);


console.log("ürün\t|fiyat");
bul.forEach(urun=>
    {
        console.log(urun.ad+"\t|"+urun.fiyat);
    }
);
