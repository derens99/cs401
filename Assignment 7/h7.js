array = ["deren", "meg"];

function addItem(){
    value = document.getElementById("item").value;
    if(value != "" && value != undefined){
        array.push(value);
    }
}

function display(){
    document.getElementById("array").innerHTML = "";
    var list = document.getElementById("array");
    for(var i =0; i < array.length; i++){
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
}

function remove(){
    array = [];
    document.getElementById("array").innerHTML = "";
}