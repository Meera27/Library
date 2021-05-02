let name = document.getElementById("name");
let book = document.getElementById("book");
let name1 = document.getElementById("name1");
let book1 = document.getElementById("book1");
let genre = document.getElementById("genre");
let tare1 = document.getElementById("tare1");
let tarea = document.getElementById("tarea");
let file =  document.getElementById("customFile");
function validate() {
    var regexp = /^[a-zA-Z ]{2,30}$/;
    var valexp = /^[A-Za-z0-9\s\-_,\.;:()]+$/

    if (name.value.trim()==""||book.value.trim() == ""||tarea.value.trim()==""||genre.value.trim()=="") {
        alert("Fields cannot be empty");
        return false;
    }
    else {
        if (regexp.test(name.value) && valexp.test(book.value) && regexp.test(genre.value)){
            alert("Entry Added");
            return true;
        }

        else if (!regexp.test(name.value)) {
            alert("Enter a valid Author Name");
            return false;
        }
        else if (!regexp.test(genre.value)) {
            alert("Enter a valid Genre");
            return false;
        }
        else if (!valexp.test(book.value)) {
            alert("Enter a valid Book Name");
            return false;
        }
        else if(file.files.length == 0 ){
            alert("No File Chosen");
            return false;
        // alert("Entry Added");
        // return true;
}
}
}

function authorvalidation(){ 
    var regexp = /^[a-zA-Z ]{2,30}$/;
    var valexp = /^[A-Za-z0-9\s\-_,\.;:()]+$/

if (name1.value.trim()==""||book1.value.trim() == ""||tarea1.value.trim()=="") {
    alert("Fields cannot be empty");
    return false;
}
else {
    if (regexp.test(name1.value) && valexp.test(book1.value)){
        alert("Entry Added");
        return true;
    }

    else if (!regexp.test(name1.value)) {
        alert("Enter a valid Author Name");
        return false;
    }
    else if (!valexp.test(book1.value)) {
        alert("Enter a valid Book Name");
        return false;
    }
    else if(file.files.length == 0 ){
        alert("No File Chosen");
        return false;
    // alert("Entry Added");
    // return true;
}
}
}