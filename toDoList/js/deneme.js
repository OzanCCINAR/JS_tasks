 // Sayfa yüklendiğinde mevcut görevleri yükle
 window.addEventListener('load', function() {
   loadTaskFromLocalStorage();//fonksiyonu kullanarak daha önceden localStorage'a eklediğimiz değerleri sayfaya yükler.
  });


//sayfa yüklendiğinde mevcut görevleri yüklemek için bir fonksiyon
function loadTaskFromLocalStorage() {

    //local Storage'dan 'tasks' anahtarına ait değeri alıyoruz ve JSON.parse() yöntemiyle JavaScript nesnesine dönüştürüyoruz.
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    //eğer 'tasks' anahtarına ait bir değer varsa (yani Local Storage'da kaydedilmiş görevler varsa):
    if (tasks) {

        //Sayfada görevleri listeleyeceğimiz <ul> elementine seçiyoruz.
        const listDOM = document.querySelector('#list');

        //'tasks' arrayindeki her bir görev için bir döngü oluşturuyoruz.
        tasks.forEach(task => {

            //Her bir görev için yeni bir <li> (liste öğesi) elementi oluşturuyoruz.
            const liDOM = document.createElement('li'); 

            //Oluşturulan <li> elementinin içeriğini, görev içeriğiyle dolduruyoruz.
            liDOM.textContent = task;   

            //Oluşturulan <li> elementinin, sayfadaki <ul> listesine ekliyoruz.
            listDOM.appendChild(liDOM); 
        })
    }
}

function saveTasksToLocaleStorage() {
    //önce boş bir dizi oluşturuyoruz. Bu array, görevleri içerecek ve Local Storage kaydedilecek.
    const tasks = [];

    //Görevleri listeleyeceğimiz <ul> elementini seçiyoruz.
    const listDOM = document.querySelector('#list');    

    //<ul> elementinin içindeki her bir <li> (liste öğesi) elementini seçmek için bir forEach döngüsü oluştururuz.
    listDOM.querySelectorAll('li').forEach(li=> {

        //Her bir <li> elementinin içeriğini (görev metni) alarak, 'tasks' arrayine ekleriz.
        tasks.push(li.textContent); 
    });
    
    //'tasks' dizisini JSON formatına dönüştürüyoruz ve 'tasks' anahtarı ile Local Storage'a kaydediyoruz.
    localStorage.setItem('tasks', JSON.stringify(tasks));   
}


//değer ekleme fonksiyonu
function addElement() {
    const inputValue = document.querySelector('#task').value;// input'un DOM'una ulaştık ve value'sini bir değişkene atadık.
    const toastDOM = document.querySelector('.toast')// aynı şekilde toast class'ına sahip elemente ulaştık ve değişkene atadık.

    if(inputValue === '') {// eğer değer boşsa showToast ve hideToast fonksiyonları devreye girer.
        showToast(toastDOM);//yukarıda DOM'unu aldığımız elementi bu fonksiyona ekleriz.
        setTimeout(function(){//ardından belli bir süre sonra kendiliğinden kapanması için  setTimeout(function(){} fonksiyonunu
            hideToast(toastDOM);// kullandık ve hideToast fonksiyonumuzu burada kullandık.
        }, 5000)
    } else {//eğer eleman eklenirse
        const listDOM = document.querySelector('#list')//öncelikle list id'sine sahip ul elemenetine ulaştık ve değişkene atadık.
        const liDOM = document.createElement('li')//daha sonra bir li etiketi oluştuduk ve bunu bir değişkene atadık.

        //create ettiğimiz li elementine inputtan aldığımız value'yi ve yapıyı atarız.
        liDOM.innerHTML = inputValue + '<a href="#" class="btn float-right" onclick="deleteElement(this)"><i class="bi bi-x-circle"></i></a>'
        
        //elimizde olan list(ul) yapsına create ettiğimiz li(liDOM) yapasını ekliyoruz. 
        listDOM.appendChild(liDOM)

        //create ettiğimiz li elemenetine tıklayınca CSS dosyasındaki 'checked' classını ekleriz.
        liDOM.addEventListener('click', function() {
            this.classList.toggle('checked'); //this, tıklananan liste öğesini temsil eder.
            //checked' sınıfını duruma göre eklemek veya çıkarmak için toggle() metodunu kullanıyoruz.
    });
    document.querySelector('#task').value = '';//input değerini sıfırlamak için input'un değerine boş bir değer atarız.

     //Listeye ekledikten sonra Local Storage'da görevleri kaydetmesi için çağırırız.
     saveTasksToLocaleStorage();
}
}




//toast mesajını görünür hale getirmek için bir fonksiyon oluştururuz.
function showToast(toastDOM) {//toastDOM parametresi, gösterilecek olan toast mesajını temsil eden DOM elementini temsil eder.
    //show sınıfı ekleyerek mesajı görünür hale getiririz.
    toastDOM.classList.add('show')
}
//tosat mesajının görünürlüğünü eklemek için kullanırız. aynı bir üst fonksiyon gibi.
function hideToast(toastDOM) {
    toastDOM.classList.remove('hide')
}

//tıklanan butona ait liste elemanını silmek için kullanır.
function deleteElement(element){
    element.parentElement.remove();//tıklanan butonun atası olan liste elemanını siler.
}