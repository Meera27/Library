let email = document.getElementById("exampleInputEmail1");
let pwd = document.getElementById("exampleInputPassword1");
let no = document.getElementById("number");
let ln = document.getElementById("lname");
let fn= document.getElementById("fname");
function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,4})(.[a-z]{2,3})?$/
    let pwdregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    let noregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if (fn.value.trim()==""||ln.value.trim() == ""||no.value.trim()==""||  email.value.trim() == "" || pwd.value.trim() == "" ) {
        alert("Fields cannot be empty");
        return false;
    }
    else {
        if (regexp.test(email.value) && pwdregx.test(pwd.value) && noregex.test(no.value)) {
            // alert("Validated");
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
        else if (!noregex.test(pwd.value)) {
            alert("Phone number should only include numbers in the formats XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX");
            return false;
    }
}
}