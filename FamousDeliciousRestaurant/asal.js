//bir kendine bölünebiliyorsa
function isPrime(number) {
    // Sayı 1'den küçük veya eşitse asal değil.
    if (number <= 1) {
      return false;
    }
  
    // 2 veya 3 ise asal.
    if (number <= 3) {
      return true;
    }
  
    // Sayı 2'ye veya 3'e bölünebiliyorsa asal değil.
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    // Sayının kareköküne kadar bölen arayarak kontrol et.
    // 6k ± 1 sayıları dikkate alınır (11, 13, 17, 19 gibi).
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
  
    // Yukarıdaki koşulların hiçbiri sağlanmazsa sayı asaldır.
    return true;
  }
  
  const number = 23;
  if (isPrime(number)) {
    console.log(`${number}, asal bir sayıdır.`);
  } else {
    console.log(`${number}, asal bir sayı değildir.`);
  }