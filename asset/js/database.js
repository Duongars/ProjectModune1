
// tạo layout đon vi VND
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

});

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