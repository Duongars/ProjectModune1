
let Users = function (id,phone,email,password) {
    
    this.id = id;
    this.phone = phone;
    this.email = email;
    this.password = password;
}


function creatUserData() {
    let userBase =[];
    let user1 = new Users("Bùi Nguyễn Dương","0918215986","buinguyenduong91@gmail.com","123456");userBase.push(user1)
    let user2 = new Users("Nguyễn Văn A","0958456231","nguyenvana@gmail.com","123456");userBase.push(user2)
    let user3 = new Users("Trần Văn B","090784561","tranvanc@gmail.com","123456");userBase.push(user3)
    localStorage.setItem("userData",JSON.stringify(userBase));
}
