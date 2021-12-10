    var inputs = document.getElementsByTagName("input");
    var inTitle = document.getElementById("title");
    var inAuthor = document.getElementById("author");
    var inPrice = document.getElementById("price");
    var inDate = document.getElementById("date");
    var inType = document.getElementsByClassName("type");
    var inType0 = document.getElementById("type0");
    var inLang = document.getElementById("lang");
    var container = document.getElementById("container");
    var min_length = 2;
    var max_length = 30;
    var is_checked = false;
    var table = document.getElementById("table");
    var typeP = document.getElementById("type_par");

 function checker(){
    let not_valid = 0;

//first check

    for (let i = 0; i < inputs.length; i++) {

        if(inputs[i].value == "" || inType.nextElementSibling.checked){
            not_valid++;
            inputs[i].style.borderColor = "red";
            inputs[i].nextElementSibling.style.color = "red";
            inputs[i].nextElementSibling.innerHTML = "please fill this field";
            // inType.nextElementSibling.color = "red";
            // inType.nextElementSibling.innerHTML = "please fill this field";
        }else{
            inputs[i].style.borderColor = "#4BCA81";
            inputs[i].nextElementSibling.style.color = "#4BCA81";
            inputs[i].nextElementSibling.innerHTML = "done";
        }
    }
// titlecheck

    if(inTitle.value.length>max_length){
        not_valid++;
        inTitle.style.borderColor = "red"
        inTitle.nextElementSibling.innerHTML = "max "+max_length;
        inTitle.nextElementSibling.style.color = "red";
    }else if(inTitle.value.length < min_length){
        not_valid++;
        inTitle.style.borderColor = "red"
        inTitle.nextElementSibling.innerHTML = "min "+min_length;
        inTitle.nextElementSibling.style.color = "red";
    }

// author check

if(inAuthor.value.length>max_length){
    not_valid++;
    inAuthor.style.borderColor = "red"
    inAuthor.nextElementSibling.innerHTML = "max "+max_length;
    inAuthor.nextElementSibling.style.color = "red";
}else if(inAuthor.value.length < min_length){
    not_valid++;
    inAuthor.style.borderColor = "red"
    inAuthor.nextElementSibling.innerHTML = "min " + parseInt(min_length + 3);
    inAuthor.nextElementSibling.style.color = "red";
}

//price check

if(isNaN(inPrice.value)){
    not_valid++;
    inPrice.style.borderColor = "red"
    inPrice.nextElementSibling.innerHTML = "please enter a number.";
    inPrice.nextElementSibling.style.color = "red";
}else if(inPrice.value<= 0 || inPrice.value == ""){
    not_valid++;
    inPrice.style.borderColor = "red"
    inPrice.nextElementSibling.innerHTML = "please enter a valid number";
    inPrice.nextElementSibling.style.color = "red";
}

// language check

if(inLang.value == "" || inLang.value == "sl"){
    not_valid++;
    inLang.style.borderColor = "red"
    inLang.nextElementSibling.innerHTML = "please choose a language.";
    inLang.nextElementSibling.style.color = "red";
}else{
    not_valid++;
    inLang.style.borderColor = "#4BCA81"
    inLang.nextElementSibling.innerHTML = "done";
    inLang.nextElementSibling.style.color = "#4BCA81";
}

//type check
    for (let i = 0; i < inType.length; i++) {
        if(inType[i].checked){
            is_checked == true;
            break;
        }else{
            is_checked == false;
        }
    }

    if (is_checked) {
        inType.innerHTML = "done";
        inType.color = "#4BCA81"
    } else {
        not_valid++;
        inType.color = "red";
        inType.innerHTML = "donen't";
    }



    console.log(inType);

}


