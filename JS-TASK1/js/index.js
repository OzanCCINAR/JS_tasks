
// userName area
let userName = prompt("lütfen adınızı giriniz.")

let myName = document.querySelector("#myName")

myName.innerHTML += `${userName}`


// clock area

function saatGuncelle() {
    let saatDiv = document.querySelector("#myClock"); // Saat alanına erişim için gerekli element seçilir.
    let tarih = new Date(); // şu anki zamanı temsil eden bir Date nesnesi oluşturulur.
  
    let saat = tarih.getHours(); // saat bilgisini alır
    let dakika = tarih.getMinutes();// dakika bilgisini alır
    let saniye = tarih.getSeconds();// saniye bilgisini alır
    let yıl = tarih.getFullYear();// yıl bilgisini alır.
  
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];// günlerin listesi oluşturulur.
    let gun = gunler[tarih.getDay()];// şu anki gün bilgisini alarak gunler dizisinden ilgili gün adını alır.
  
    let zaman = `${yıl} ${saat}:${dakika}:${saniye},${gun}`; // saat, dakika, saniye, gün bilgilerini birleştirerek zaman string'ini oluştururuz.
  
    saatDiv.innerHTML =zaman; // saat alanının içeriğini günceller.
  
    setTimeout(saatGuncelle, 1000); // Her 1 saniyede bir güncelle
  }
  
saatGuncelle();// fonksiyonu başlatır ve saat alanını günceller.
