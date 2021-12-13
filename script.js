    var container = document.getElementById("container");
    var inputs = document.getElementsByTagName("input");
    var inTitle = document.getElementById("title");
    var inAuthor = document.getElementById("author");
    var inPrice = document.getElementById("price");
    var inDate = document.getElementById("date");
    var inLang = document.getElementById("lang");
    var inType = document.getElementsByClassName("types");
    var typeP = document.getElementById("type_p");
    var is_checked = false;
    var max_length = 20;
    var min_length = 2;
    var table = document.getElementById("table");

 function checker(){
    var not_valid = 0;

//first check

//     for (var i = 0; i < 4; i++) {

//         if(inputs[i].value == ""){
//             not_valid++;
//             inputs[i].style.borderColor = "red";
//             inputs[i].nextElementSibling.style.color = "red";
//             inputs[i].nextElementSibling.innerHTML = "please fill this field";
//         }else if(inType.checked == false){
//             not_valid++;
//             inType[i].nextElementSibling.style.color = "red";
//             inType[i].nextElementSibling.innerHTML = "please fill this field";
            
//         }else{
//             inputs[i].style.borderColor = "#4BCA81";
//             inputs[i].nextElementSibling.style.color = "#4BCA81";
//             inputs[i].nextElementSibling.innerHTML = "";
//         }
//     }
// // titlecheck

//     if(inTitle.value.length>max_length){
//         not_valid++;
//         inTitle.style.borderColor = "red";
//         inTitle.nextElementSibling.innerHTML = "max "+ max_length;
//         inTitle.nextElementSibling.style.color = "red";
//     }else if(inTitle.value.length < min_length){
//         not_valid++;
//         inTitle.style.borderColor = "red"
//         inTitle.nextElementSibling.innerHTML = "min "+ min_length;
//         inTitle.nextElementSibling.style.color = "red";
//     }

// // author check

// if(inAuthor.value.length>max_length){
//     not_valid++;
//     inAuthor.style.borderColor = "red"
//     inAuthor.nextElementSibling.innerHTML = "max "+max_length;
//     inAuthor.nextElementSibling.style.color = "red";
// }else if(inAuthor.value.length < min_length){
//     not_valid++;
//     inAuthor.style.borderColor = "red"
//     inAuthor.nextElementSibling.innerHTML = "min " + parseInt(min_length + 3);
//     inAuthor.nextElementSibling.style.color = "red";
// }

// //price check

// if(isNaN(inPrice.value)){
//     not_valid++;
//     inPrice.style.borderColor = "red"
//     inPrice.nextElementSibling.innerHTML = "please enter a number.";
//     inPrice.nextElementSibling.style.color = "red";
// }else if(inPrice.value<= 0 || inPrice.value == ""){
//     not_valid++;
//     inPrice.style.borderColor = "red"
//     inPrice.nextElementSibling.innerHTML = "please enter a valid number";
//     inPrice.nextElementSibling.style.color = "red";
// }

// // language check

// if(inLang.value == "" || inLang.value == "sl"){
//     not_valid++;
//     inLang.style.borderColor = "red"
//     inLang.nextElementSibling.innerHTML = "please choose a language.";
//     inLang.nextElementSibling.style.color = "red";
// }else{
//     inLang.style.borderColor = "#4BCA81"
//     inLang.nextElementSibling.innerHTML = "";
//     inLang.nextElementSibling.style.color = "#4BCA81";
// }

// //type check
//     for (var i = 0; i < inType.length; i++) {
//         if(inType[i].checked){
//             is_checked = true;
//             break;
//         }else{
//             is_checked = false;
//         }
//     }

//     if (is_checked) {
//         document.getElementById("type_p").innerHTML = "";
//         document.getElementById("type_p").style.color = "#4BCA81"
//     } else {
//         not_valid++;
//         document.getElementById("type_p").style.color = "red";
//         document.getElementById("type_p").innerHTML = "please choose a type";
//     }

    if(not_valid==0){
        var row = table.insertRow(-1);
        row.className +='row';
        row.insertCell(0).innerHTML = inTitle.value;
        row.insertCell(1).innerHTML = inAuthor.value;
        row.insertCell(2).innerHTML = inPrice.value + "$";
        row.insertCell(3).innerHTML = inDate.value;
        row.insertCell(4).innerHTML = inLang.options[inLang.selectedIndex].value;
        var cell="";
        for(var i=0;i<inType.length;i++){
            if(inType[i].checked){
                cell = inType[i].value;
            }
        }

        row.insertCell(5).innerHTML = cell;

        row.insertCell(6).innerHTML = `<i onclick="edit(this)" class="fa-regular fa-pen-to-square"></i>`;
        row.insertCell(7).innerHTML = `<i onclick="remove(this)" class="fa-solid fa-trash-can"></i>`;
    }

    // let edit = document.getElementsByClassName('fa-pen-to-square');
    // for(let i =0 ; i < edit.length;i++){
    //     edit[i].setAttribute('onclick','edit()');
    //     }
    
    
}


function remove(t){
    var i = t.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}




function edit(){
   let pchilds;
   let edit = document.getElementsByClassName('fa-pen-to-square');
   for(let i =0 ; i < edit.length;i++){
    pchilds= edit[i].closest('.row').children;
    }

    for(let i =0 ; i < pchilds.length  - 2;i++){
        pchilds[i].setAttribute('contentEditable','true');
    }

    pchilds[6].innerHTML=`<i onclick="confirm()" class="fa-solid fa-check"></i>`;
}

function confirm(){
   let pchilds;
   let edit = document.getElementsByClassName('fa-check');
   for(let i =0 ; i < edit.length;i++){
    pchilds= edit[i].closest('.row').children;
       
    }

    for(let i =0 ; i < pchilds.length;i++){
        pchilds[i].setAttribute('contentEditable','false');
    }

    pchilds[6].innerHTML=`<i onclick="edit()" class="fa-regular fa-pen-to-square"></i>`;

    
}


