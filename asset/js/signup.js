const btnRegister = document.querySelector(".signup-button")
const inputNameRegister = document.querySelector(".user-name")
const inputPhoneRegister = document.querySelector(".phone-number")
const inputUserEmailRegister = document.querySelector(".signup-email")
const inputPasswordRegister = document.querySelector(".signup-password")
let inputItem = document.querySelectorAll(".signup-item")

btnRegister.addEventListener("click", function(e){
    e.preventDefault()
    let userSignupData = JSON.parse(localStorage.getItem("userData"));

    console.log(userSignupData);
    if(inputUserEmailRegister.value === "" || inputPhoneRegister.value === "" || inputNameRegister.value === "" || inputPasswordRegister.value === "") {
        alert("Vui lòng điền đầy đủ thông tin để tiếp tục")
    } else {
        let checkID = true;
        let checkEmali = true;
        for (let index = 0; index < userSignupData.length; index++) {
            if (inputNameRegister.value == userSignupData[index].id) {
               checkID = false;
               alert("tên đăng nhập đã tồn tại");
               break;
            }
            if (inputUserEmailRegister.value == userSignupData[index].email) {
                checkEmali = false;
                alert("email người dùng đã tồn tại")
                break;
             }
            }

             if (checkEmali && checkID) {   
   
                 let newUser = new Users(inputNameRegister.value,inputPhoneRegister.value,inputUserEmailRegister.value,inputPasswordRegister.value)
                 userSignupData.push(newUser);
                 localStorage.setItem("userData", JSON.stringify(userSignupData));
                 localStorage.setItem(`${newUser.id}listCart`, JSON.stringify([]));
                 alert("Bạn đã đăng kí thành công")

                 window.location.href = "./Login.html"
         
             }

       
        }       
    }
)


inputItem.forEach (function (item) {
    let inputElement = item.querySelector("input")
     let errorElement = item.querySelector(".loginError")
     console.log(inputElement);
    inputElement.onblur = function () {
        if (inputElement.value == "") {
            errorElement.style.display = "block"
        }
    }
    inputElement.oninput = function () {
        errorElement.style.display = "none"
    }

})