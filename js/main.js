// This Function Get's Users From Inputs And Puts Into Table
function AddData () {
    if (CheckInputs()){
        document.getElementById('success').style.display = 'block';
    }else {
        document.getElementById('danger').style.display = 'block';
        return;
    }
    let table = document.getElementById('table');
    let row = document.createElement('DIV');
    
    for (var key in GenerateUser()) {
        let cell = document.createElement('DIV');
        let cellText = document.createTextNode(GenerateUser()[key]);
        let attr = document.createAttribute('data-title');
        attr.value = key ;
        cell.setAttributeNode(attr);
        cell.appendChild(cellText);
        row.appendChild(cell);
        if (key.trim() == 'Full Name' || key.trim() == 'Email' || key.trim() == 'نام و نام خانوادگی' || key.trim() == 'ایمیل'){
            cell.className = 'cell col-lg-3';
        }else {
            cell.className = 'cell col-lg-2';
        }
    }
    row.className = 'row';
    if (document.getElementById('nameText').style.direction == 'rtl'){
        row.style.direction = 'rtl';
        row.style.textAlign = 'right';
    }
    
    table.appendChild(row);

}

// This Function Make an Object Of Users
function GenerateUser(){
    let head = document.getElementsByClassName('dataTableHeader')[0].children;
    let user = {};
    user[head[0].textContent] = Capitlize(document.getElementById('nameText').value) + " " + Capitlize(document.getElementById('lastNameText').value);
    user[head[1].textContent] = document.getElementById('ageText').value;
    user[head[2].textContent] = document.getElementById('emailText').value;
    user[head[3].textContent] = Capitlize(document.getElementById('jobText').value);
    user[head[4].textContent]  =Capitlize(document.getElementById('locationText').value);
    return user;
}

// This Function For Capitlize First Letter Of Each Word
function Capitlize(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// This Function Is To Check Inputs For Not Being Empty
function CheckInputs(){
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ""){
            console.log("He");
            return false;
        }else {
            return true;
        }
    }
}

function ShowTable(){
    if (document.getElementById('table').children.length == 1){
        document.getElementById('warning').style.display = 'block';
    }
    
}