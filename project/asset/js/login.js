



const btnLogin = document.querySelector(".login-button")

const inputUserLogin = document.querySelector(".login-email")
const inputPasswordLogin = document.querySelector(".login-password")

let inputItem = document.querySelectorAll(".login-item")

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


btnLogin.addEventListener("click",function(e){
    e.preventDefault()
    debugger
    if(inputPasswordLogin.value === "" || inputUserLogin.value === ""){
        alert("Xin vui lòng nhập đầy đủ thông tin để tiếp tục")
    } else {
        const userLoginData = JSON.parse(localStorage.getItem("userData"));
        for(let i=0; i< userLoginData.length; i++) {
            if(
                userLoginData[i].id == inputUserLogin.value &&
                userLoginData[i].password == inputPasswordLogin.value
            ) {
                flag = true;
                localStorage.setItem("currentUser",JSON.stringify(userLoginData[i]))
                break;
            } else {
                flag = false
            }
        }

        if(flag) {
            alert("Đăng nhập thành công")
            window.location.href = "./index.html"
        } else {
            alert ("Bạn nhập sai tên đăng nhập hoặc tài khoản")
        }
    }
})