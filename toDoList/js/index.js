

// Bu fonksiyon, eleman eklemek için tetiklenen buton tarafından çağrılır.
function addElement() {
  const inputValue = document.querySelector("#task").value;
  const toastDOM = document.querySelector(".toast");

  // Eğer inputValue boş ise (yani kullanıcı bir değer girmeden göndermeye çalışırsa):
  if (inputValue === "") {
    // showToast() fonksiyonunu çağırarak boş giriş uyarı mesajını gösteriyoruz.
    showToast(toastDOM);

    // setTimeout() fonksiyonuyla belirli bir süre sonra hideToast() fonksiyonunu çağırarak uyarı mesajını gizliyoruz.
    setTimeout(function () {
      hideToast(toastDOM);
    }, 4000); // 4 saniye sonra toast mesajını gizle
  } else {
    // Eğer inputValue boş değilse (yani kullanıcı bir değer girmişse):

    // Listeyi temsil eden #list elementini seçiyoruz.
    const list = document.querySelector("#list");

    // Yeni bir <li> (liste öğesi) elementi oluşturuyoruz.
    const liDOM = document.createElement("li");

    // Oluşturulan <li> elementinin içeriğini, kullanıcının girdiği değeri ve silme butonu ile birlikte belirliyoruz.
    liDOM.innerHTML =
      inputValue +
      ' <a href="#" class="btn float-right" onclick="deleteElement(this)"><i class="bi bi-x-circle"></i></a>';

    // Oluşturulan <li> elementini listeye ekliyoruz.
    list.appendChild(liDOM);

    // liDOM değişkenine click olay dinleyicisi ekliyoruz.
    liDOM.addEventListener("click", function () {
      // this, tıklanan liste öğesini temsil eder.
      // 'checked' sınıfını duruma göre eklemek veya çıkarmak için toggle() metodunu kullanıyoruz.
      this.classList.toggle("checked");
    });

    // Input değerini sıfırlayalım
    document.querySelector("#task").value = "";
  }
}

// Bu fonksiyon, toast mesajını görünür hale getirmek için kullanılır.
function showToast(toastDOM) {
  toastDOM.classList.add("show"); // Toast mesajının DOM elementine 'show' sınıfını ekler
}

// Bu fonksiyon, toast mesajını gizlemek için kullanılır.
function hideToast(toastDOM) {
  toastDOM.classList.remove("show"); // Toast mesajının DOM elementinden 'show' sınıfını kaldırır
}

// Bu fonksiyon, tıklanan butona ait liste elemanını silmek için kullanılır.
function deleteElement(element) {
  element.parentElement.remove(); // Tıklanan butonun atası olan liste elemanını siler
}
