window.addEventListener("DOMContentLoaded", () => {
    add();
    subtract();
    divide();
    multiply();
    modulus();
});

function add(){
    const addTile = document.getElementById("addition_tile");
    const addTileAns = document.getElementById("addTileAnswer");

    addTile.addEventListener("click", event => {
        const answer = addTile.getAttribute("answer");
        addTileAns.innerHTML = answer;
        window.setTimeout(function(){
            addTileAns.innerHTML = "Click to see the answer!";
        }, 2300);
    });

    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", event => {
        document.getElementById("addition_section").style.display = "block";
    });
}

function subtract(){
    const subtractionTile = document.getElementById("subtraction_tile");
    const subTileAns = document.getElementById("subTileAnswer"); 

    subtractionTile.addEventListener("click", event => {
        const answer = subtractionTile.getAttribute("answer");
        subTileAns.innerHTML = answer;
        window.setTimeout(function(){
            subTileAns.innerHTML = "clicl to see the answer!"
        }, 2300);
    });
    
    
    const subBtn = document.querySelector("#subBtn");
    subBtn.addEventListener("click", event => {
        document.getElementById("subtraction_section").style.display = "block";
    });
}

function divide(){
    const divTile = document.getElementById("div_tile");
    const divTileAns = document.getElementById("divAnswer"); 

    divTile.addEventListener("click", event => {
        const answer = divTile.getAttribute("answer");
        divTileAns.innerHTML = answer;
        window.setTimeout(function(){
            divTileAns.innerHTML = "clicl to see the answer!"
        }, 2300);
    });

    const divBtn = document.querySelector("#divBtn");
    divBtn.addEventListener("click", event => {
        document.getElementById("div_section").style.display = "block";
    });
}

function multiply(){
    const multTile = document.getElementById("mult_tile");
    const multTileAns = document.getElementById("multAnswer"); 

    multTile.addEventListener("click", event => {
        const answer = multTile.getAttribute("answer");
        multTileAns.innerHTML = answer;
        window.setTimeout(function(){
            multTileAns.innerHTML = "clicl to see the answer!"
        }, 2300);
    });

    const multBtn = document.querySelector("#multBtn");
    multBtn.addEventListener("click", event => {
        document.getElementById("mult_section").style.display = "block";
    });
}

function modulus(){
    const modTile = document.getElementById("mod_tile");
    const modTileAns = document.getElementById("modAnswer"); 

    modTile.addEventListener("click", event => {
        const answer = modTile.getAttribute("answer");
        modTileAns.innerHTML = answer;
        window.setTimeout(function(){
            modTileAns.innerHTML = "clicl to see the answer!"
        }, 2300);
    });

    const modBtn = document.querySelector("#modBtn");
    modBtn.addEventListener("click", event => {
        document.getElementById("mod_section").style.display = "block";
    });

}