let email = document.getElementById("exampleInputEmail1");
let pwd = document.getElementById("exampleInputPassword1");


function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(.[a-z]{2,3})?$/
    let pwdregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/


    if (email.value.trim() == "" || pwd.value.trim() == "" ) {
        alert("Fields cannot be empty");
        return false;
    }
    else {
        if (regexp.test(email.value) && pwdregx.test(pwd.value)) {
            alert("Validated");
            return true;
        }
    
        else if (!regexp.test(email.value)) {
            alert("please enter a valid email(XXXX@abc.ab.mn)");
            return false;
        }
        else if (!pwdregx.test(pwd.value)) {
            alert("Password must contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
            return false;
        }
    }
}