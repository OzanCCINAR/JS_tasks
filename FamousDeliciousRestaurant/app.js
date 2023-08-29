const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Pizza",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Cocktail",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Pasta",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "Pizza",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "Pizza",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Cocktail",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Cocktail",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "Pasta",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Pasta",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//ALL BUTTON
const allBtn = document.createElement("button")
allBtn.type = "button"
allBtn.classList.add("btn","btn-outline-success")
allBtn.textContent = "All"
allBtn.id = "all"

const btnContainer = document.querySelector(".btn-container")
btnContainer.appendChild(allBtn)

//PIZZA BUTTON
const pizzaBtn = document.createElement("button")
pizzaBtn.type = "button"
pizzaBtn.classList.add("btn","btn-outline-info","ms-2")
pizzaBtn.textContent = "Pizza"
pizzaBtn.id = "pizza"

btnContainer.appendChild(pizzaBtn)

//PASTA BUTTON
const pastaBtn = document.createElement("button")
pastaBtn.type = "button"
pastaBtn.classList.add("btn","btn-outline-warning","ms-2")
pastaBtn.textContent = "Pasta"
pastaBtn.id = "pasta"

btnContainer.appendChild(pastaBtn)

//COCKTAIL BUTTON
const cocktailBtn = document.createElement("button")
cocktailBtn.type = "button"
cocktailBtn.classList.add("btn","btn-outline-danger","ms-2")
cocktailBtn.textContent = "Cocktail"
cocktailBtn.id = "cocktail"

btnContainer.appendChild(cocktailBtn)


//Butonu Ekranda Gsötermek için
//HTML'de id'si "all" olan bir buton seçilir.
const btnAll = document.querySelector("#all")

//all butonuna tıklama olayı dinleyicisi eklenir ve menuShow fonksiyonu çağırılır.
btnAll.addEventListener("click", menuShow)

//HTML'de class'ı "section-center" bir öğe seçilir.
const menu1 = document.querySelector(".section-center")


//menuShow fonksiyonu tanımlanır.
function menuShow() {
  //"menu" adında bir array olduğu varsayılır.
  //Bu dizi, her bir öğe için bir HTML kart oluşturmak için kullanılacak.
  //menu dizisindeki her öğeyi işleyip HTML kartlarına dönüştüren bir dizi oluşturuluyor ve bu dizi menuItems adını taşıyor.
  let menuItems = menu.map(item =>{//menu array'indeki itemleri (menuItems) e map ederiz.
//map etmek (Kısacası, "map etmek", bir dizinin veya koleksiyonunun her bir öğesini dönerek, bu öğeleri belirli bir işleme tabi tutarak yeni bir dizi oluşturmayı ifade eder.)
    return ` <div class="card bg-light text-white photo mb-5">
    <img src="${item.img}" class="img-fluid" style="height:400px" ">
        <div class="card-img-overlay">
            <h5 class="card-title"> ${item.title} </h5>
            <p class="card-text"> ${item.desc} </p>
            <div class="badge bg-success text-wrap" style="position: absolute; bottom: 0; left: 0; width: 6rem;">
            ${item.price}
            </div>
        </div>
    </div> 
`
  })
  //"menuItems" adlı kartların HTML içeriğini "menu1" öğesine atar, böylece görüntülenirler.
  menu1.innerHTML = menuItems
}
menuShow();


//----------------------------------------------------------------

//daha önce oluşturduğumuz pizza butonuna ulaştık
let btnPizza = document.querySelector("#pizza")

//ve butona bir event ekledik.
btnPizza.addEventListener("click", pizzaShow)

//pizzaShow adında bir fonksiyon oluşturduk.
function pizzaShow () {

  //menu array'indeki itemleri "menuItems" e map ediyoruz.
  let menuItems = menu.map(item => {
    //daha sonra bir koşul ekliyoruz. Bu koşul kategorisi Pizza olanları kapsıyor ve daha sonra return ediyor.
    if(item.category == "Pizza"){
      return `
  <div class="card bg-light text-white photo mb-5">
    <img src="${item.img}" class="img-fluid" style="height:400px">
    <div class="card-img-overlay">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.desc}</p>
      <div class="badge bg-info text-wrap" style="position: absolute; bottom: 0; left: 0; width: 6rem;">
        ${item.price}
      </div>
    </div>
  </div>
`;


    }
  })
  //"menuItems" adlı kartların içeriğini menu1 öğesine atar, böylece görüntülenirler.
  menu1.innerHTML = menuItems
}

//----------------------------------------------------------------

let btnPasta = document.querySelector("#pasta");
btnPasta.addEventListener("click", pastaShow);

function pastaShow() {

  let menuItems = menu.map( item => {

    if(item.category == "Pasta") {
      return ` <div class="card bg-light text-white photo mb-5">
      <img src="${item.img}" class="img-fluid" style="height:400px" ">
          <div class="card-img-overlay">
              <h5 class="card-title"> ${item.title} </h5>
              <p class="card-text"> ${item.desc} </p>
              <div class="badge bg-warning text-wrap" style="width: 6rem;">
              ${item.price}
              </div>
          </div>
      </div> 
  `
    }
  })
  menu1.innerHTML = menuItems
}

//----------------------------------------------------------------

let btnCocktail = document.querySelector("#cocktail");
btnCocktail.addEventListener("click", cocktailShow);

function cocktailShow() {

  let menuItems = menu.map( item => {
    if(item.category == "Cocktail"){
      return ` <div class="card bg-light text-white photo mb-5">
      <img src="${item.img}" class="img-fluid" style="height:400px" ">
          <div class="card-img-overlay">
              <h5 class="card-title"> ${item.title} </h5>
              <p class="card-text"> ${item.desc} </p>
              <div class="badge bg-danger text-wrap" style="width: 6rem;">
              ${item.price}
              </div>
          </div>
      </div> 
  `
    }

  })
  menu1.innerHTML = menuItems
}



