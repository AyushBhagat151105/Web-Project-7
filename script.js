document.getElementById(".box").style.display ="none";
document.getElementById("amount_box").style.display="none";
let box = document.querySelector(".box");
document.getElementById("button_to_add").onclick = function() {
    addpart();
}

function addpart() {
    var Name = document.querySelector("Item_name");
    var price = document.querySelector("Item_Price");
    if (Name === "" || price === "") {
        return window.alert("Please Enter the Name And Price corect")
    }

    var total = Name + price;

    document.createElement("ul");
    total.innerHTML= `${input.value}`;
    box.appendChild(total);

    
}