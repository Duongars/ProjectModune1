//  tạo các biến toàn cục

let currentPage = 1;
let dataBase = JSON.parse(localStorage.getItem("dataBase")) || [];
let listCart = [];
let searchHistoryArr = JSON.parse(localStorage.getItem("searchHistoryArr")) || [];
let productItem = document.querySelector(".home-product .grid__row");
let appElement = document.querySelector(".app") || "";

// tạo layout đon vi VND
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

});



let listCartItem = document.querySelector(".header__cart-list");
let searchInputItem = document.querySelector(".header__search-input");
let searchTypeItem = document.querySelector(".header__search-select-label");
let searchHistoryListElement = document.querySelector(".header__search-history");
let currentPageElement = document.querySelector(".home-filter__page-current")
let userNameElement = document.querySelector(".header_navbar-user-name")
// lấy thông tin User từ localstorage

currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];

// searchHistoryListElement.style.display = "block";


// localStorage.setItem(`${user}listCart`, JSON.stringify(listCart));
// tạo data base
let ProductItems = function (name, image, price, brand, origin) {
    this.name = name
    this.image = image
    this.price = price
    this.brand = brand
    this.origin = origin
}

function creatDataBase() {
    let dataBase = []
    let item1 = new ProductItems("SB Dunk Low Pro", "./database-image/image001.jpg", 1000000, "Nike", "Việt Nam"); dataBase.push(item1);
    let item2 = new ProductItems("Air Force one", "./database-image/image002.jpg", 1200000, "Nike", "Idonesia"); dataBase.push(item2);
    let item3 = new ProductItems("React Vision", "./database-image/image003.jpg", 1400000, "Adidas", "Thai land"); dataBase.push(item3);
    let item4 = new ProductItems("Dunk Low", "./database-image/image004.jpg", 1700000, "Nike", "Việt Nam"); dataBase.push(item4);
    let item5 = new ProductItems("Air Jordan 1 low", "./database-image/image005.jpg", 1020000, "Nike", "China"); dataBase.push(item5);
    let item6 = new ProductItems("Max Aura 4", "./database-image/image006.jpg", 3200000, "Adidas", "Việt Nam"); dataBase.push(item6);
    let item7 = new ProductItems("Air Monarch 4", "./database-image/image007.jpg", 1200000, "Nike", "China"); dataBase.push(item7);
    let item8 = new ProductItems("Air Max Scorpion Flyknit ", "./database-image/image008.jpg", 2000000, "Nike", "Việt Nam"); dataBase.push(item8);
    let item9 = new ProductItems("Air Max 97 ", "./database-image/image009.jpg", 2100000, "Nike", "Việt Nam"); dataBase.push(item9);
    let item10 = new ProductItems("Court Vision Low Next Nature", "./database-image/image010.jpg", 2020000, "New Balance", "Thai Land"); dataBase.push(item10);
    let item11 = new ProductItems("Jordan Strong Pro", "./database-image/image011.jpg", 3000000, "Nike", "Việt Nam"); dataBase.push(item11);
    let item12 = new ProductItems("Air Jordan 3 Retro", "./database-image/image012.jpg", 3100000, "Nike", "Việt Nam"); dataBase.push(item12);
    let item13 = new ProductItems("Air Max Plus Utility", "./database-image/image013.jpg", 1100000, "Nike", "Indonesia"); dataBase.push(item13);
    let item14 = new ProductItems("Air Max Terrascape 90", "./database-image/image014.jpg", 1200000, "Nike", "Việt Nam"); dataBase.push(item14);
    let item15 = new ProductItems("Jumpman MVP", "./database-image/image015.jpg", 1000000, "Nike", "Việt Nam"); dataBase.push(item15);
    let item16 = new ProductItems("Air Max Plus ", "./database-image/image016.jpg", 1000000, "Nike", "Malaysia"); dataBase.push(item16);
    let item17 = new ProductItems("Waffle DebutNike Waffle Debu ", "./database-image/image017.jpg", 1000000, "Adidas", "Việt Nam"); dataBase.push(item17);
    let item18 = new ProductItems("Air Huarache", "./database-image/image018.jpg", 1020000, "Nike", "China"); dataBase.push(item18);
    let item19 = new ProductItems("Luka 2", "./database-image/image019.jpg", 1350000, "Adidas", "China"); dataBase.push(item19);
    let item20 = new ProductItems("Air Jordan 5 x DJ Khaled", "./database-image/image020.jpg", 1430000, "Nike", "China"); dataBase.push(item20);
    let item21 = new ProductItems("Mecurial Vapor 15 Academy", "./database-image/image021.jpg", 2100000, "Nike", "Việt Nam"); dataBase.push(item21);

    localStorage.setItem("dataBase", JSON.stringify(dataBase));
    return dataBase
}
//





// hàm render item 

let renderItem = function (itemList, startIndex) {
    // render sản phẩm

    productItem.innerHTML = "";
    for (let index = startIndex; index <= startIndex + 9; index++) {
        if (itemList[index] === undefined) {
            break;
        } else {
            productItem.innerHTML += `
            <div class="grid__column-2-4" >
                <!-- product item -->
                <div class="home-product-item">
                    <div class="home-product-item__img" 
                        style="background-image: url(${itemList[index].image});"></div>
                    <h5 class="home-product-item__name">${itemList[index].name}</h5>
                    <div class="home-product-item__price">
                        <span class="">${VND.format(itemList[index].price)}</span>
                    </div>
            
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${itemList[index].brand}</span>
                        <span class="home-product-item__madein">${itemList[index].origin}</span>
                    </div>
            
                    <div class="home-product-item__action">
                        <button class="btn addtocart__btn" onclick="addtoCart(${index})">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            </div>
            `;
        }

    }
    setTotalPage();
}
// JSON.parse(localStorage.getItem(`${currentUser.id}listCart`)) || 
// hàm render  listCart 
function renderListCart() {

    listCart =  JSON.parse(localStorage.getItem(`${currentUser.id}listCart`)) ||  JSON.parse(localStorage.getItem("listCart")) || [];
  
    // listCart = JSON.parse(localStorage.getItem(`${user}listCart`)) || [];
    let ulItem = listCartItem.querySelector(".header__cart-list-item")
    let cartNotice = document.querySelector(".header__cart-notice")
    let totalPriceItem = document.querySelector(".total-price-display")
    let totalPcs = 0;
    let totalPrice = 0;
    let checkNull = false

    ulItem.innerHTML = "";
    for (var key in listCart) {
        if (listCart[key]) {
            checkNull = true;
            totalPcs += listCart[key].quantity;
            totalPrice += listCart[key].quantity * listCart[key].price;
            ulItem.innerHTML += `     
         <li class="header__cart-item" ">
         <img class="header__cart-img"
             src="${listCart[key].image}"
             alt="ảnh sản phẩm">
         <div class="header__cart-item-info">
             <div class="header__cart-item-head">
                 <h5 class="header__cart-item-name">${listCart[key].name}</h5>
                 <div class="header__cart-item-price-wrap">

                     <span class="header__cart-item-price">${listCart[key].price}</span>
                     <span class="header__cart-item-multiply">x</span>
                     <span class="header__cart-item-qnt">${listCart[key].quantity}</span>
                 </div>
             </div>
             <div class="header__cart-item-body">
                 <span class="header__cart-item-description">Brand: ${listCart[key].brand}</span>
                 <span class="header__cart-item-description">
                     <button class="cart-item__btn" onclick="addtoCart(${key})" >+</button>
                     <button class="cart-item__btn" onclick="addtoCart(${key},'-')">-</button>
                 </span>
             </div>
         </div>
     </li>`
        }
    }

    cartNotice.innerText = totalPcs;
    totalPriceItem.innerText = VND.format(totalPrice);

    if (!checkNull) {
        listCartItem.classList.add("header__cart-list--no-cart")
    } else {
        listCartItem.classList.remove("header__cart-list--no-cart")
    }

}



function getDatabase() {
    let dataBase = JSON.parse(localStorage.getItem("dataBase")) || [];
    return dataBase;
}



function setTotalPage() {
    let totalPage = Math.floor(dataBase.length / 10) + 1;
    console.log(totalPage);
    let totalPageItem = document.querySelector(".home-filter__page-total")
    totalPageItem.innerText = totalPage;

}



function getTotalpage() {
    let totalPage = Math.floor(dataBase.length / 10) + 1;
    return totalPage;
}



function changePage(direction) {
    let totalPage = getTotalpage()
    switch (direction) {
        case "<":
            if (currentPage > 1) {
                currentPage--;
                let startIndex = currentPage * 10 - 10
                renderItem(dataBase, startIndex)
            } else {
                break;
            }
            break;

        default:
            if (currentPage < totalPage) {
                ++currentPage;
                let startIndex = currentPage * 10 - 10
                renderItem(dataBase, startIndex)
            } else {
                break;
            }
            break;
    }
    currentPageElement.innerText= currentPage;
}



function addtoCart(index, operator) {

    if (listCart[index] == null) {
        listCart[index] = { ...dataBase[index], quantity: 1 }
    } else {
        if (operator == "-") {
            listCart[index].quantity--;
            if (listCart[index].quantity == 0) {
                listCart.splice(index, 1)
            }
        } else {
            listCart[index].quantity++;
        }
    }
    if (currentUser.id != undefined) {
        localStorage.setItem(`${currentUser.id}listCart`, JSON.stringify(listCart));
        
    }else {

        localStorage.setItem("listCart", JSON.stringify(listCart))
    }
    renderListCart();
}




function checkout() {
    let checkout = confirm("Bạn có muốn thanh toán")

    if (checkout) {
        listCart = [];
        localStorage.setItem("listCart", JSON.stringify(listCart))
        localStorage.setItem(`${currentUser.id}listCart`, JSON.stringify(listCart));
        renderListCart();
        
    }
}


function renderSearch(button) {
    document.querySelector(".header__search-select-label").innerHTML = button.querySelector("span").innerText + '<i class="header__search-select-label-icon fa-solid fa-square-caret-down"></i>';

}

function search() {
    dataBase = getDatabase();
    let searchValue = searchInputItem.value.trim().toLowerCase();
    switch (searchTypeItem.innerText) {
        case "nơi sản xuất":
            dataBase = dataBase.filter(function (e) {
                return e.origin.toLowerCase().includes(searchValue)
            })
            renderItem(dataBase, 0);
            searchHistoryArr.push(searchValue)
            break;
        case "theo brand":
            dataBase = dataBase.filter(function (e) {
                return e.brand.toLowerCase().includes(searchValue)
            })
            renderItem(dataBase, 0);
            searchHistoryArr.push(searchValue)
            break;

        default:
            dataBase = dataBase.filter(function (e) {
                return e.name.toLowerCase().includes(searchValue)
            })
            renderItem(dataBase, 0);
            searchHistoryArr.push(searchValue)
            break;
    }
    localStorage.setItem(`searchHistoryArr${currentUser.id}`, JSON.stringify(searchHistoryArr));
    searchHistoryListElement.style.display = "none";
    // renderHistorySearch();
}



function renderHistorySearch() {

searchHistoryArr =  JSON.parse(localStorage.getItem(`searchHistoryArr${currentUser.id}`)) ||  [];
searchHistoryListElement.innerHTML="";
   for (let index = 0; index < searchHistoryArr.length; index++) {
searchHistoryListElement.innerHTML+= `
<li class="header__search-history-item">
<span href="" onclick="displaySearch('${searchHistoryArr[index]}')" >${searchHistoryArr[index]}</span>   
<button class="btn delete-search-btn"  onclick="deleteHistory(${index})">xóa</button> 
</li>

`   
   }  
}

function deleteHistory(index) { 
    searchHistoryArr =  JSON.parse(localStorage.getItem(`searchHistoryArr${currentUser.id}`)) || JSON.parse(localStorage.getItem("searchHistoryArr")) || [];
    searchHistoryArr.splice(index,1);
    localStorage.setItem(`searchHistoryArr${currentUser.id}`, JSON.stringify(searchHistoryArr));
    localStorage.setItem("searchHistoryArr", JSON.stringify(searchHistoryArr));
    renderHistorySearch();
}

appElement.onclick =function (e) {
    renderHistorySearch()
    let check = e.target.classList.contains('header__search-input');
    console.log(check);
    if (!check) {
        searchHistoryListElement.style.display = "none";
    }
}

searchInputItem.onclick = function (e) {
    searchHistoryListElement.style.display = "block";
}


function  displaySearch (text) {
    searchInputItem.value = text
    // searchHistoryListElement.style.display = "none";
}

function renderUserName() {
    let apllyElement = document.querySelector(".apply")
    let loginElement = document.querySelector(".login")
    let liElemnet = document.querySelector(".header_navbar-user")

    if (currentUser.id) {  
        userNameElement.innerText = currentUser.id 
        apllyElement.style.display = "none";
        loginElement.style.display = "none";
    } else {
        apllyElement.style.display = "block";
        loginElement.style.display = "block";
        liElemnet.style.display = "none";
    }
   
}

//  log out user 
let logoutElement = document.querySelector(".logout")

logoutElement.onclick = function (e) {
    e.preventDefault();
     localStorage.setItem("currentUser", JSON.stringify([]))
     localStorage.setItem("listCart", JSON.stringify([]))
    window.location.reload()

}


// login user

let loginElement = document.querySelector(".login");

loginElement.onclick = function (e) {
    e.preventDefault();
    window.location.assign("./Login.html")

}


let applyElement = document.querySelector(".apply");
applyElement.onclick = function (e) {
    e.preventDefault();
    window.location.assign("./Signup.html")

}