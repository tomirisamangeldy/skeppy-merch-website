// AXOLOTL HOODIE
function axolotlToWhite() {
    document.getElementById("axolotl-black").src = 'content/axolotl-white.png';
}
function axolotlToBlack() {
    document.getElementById("axolotl-black").src = 'content/axolotl-black.png';
}
// BBH HOODIE  
function bbhToWhite() {
    document.getElementById("bbh-black-front").src = 'content/white-bbh-front.png';
}
function bbhToBlack() {
    document.getElementById("bbh-black-front").src = 'content/black-bbh-front.png';
}
// MUFFIN HOODIE
function muffinToWhite() {
    document.getElementById("muffin-black").src = 'content/muffin-white.png';
}
function muffinToBlack() {
    document.getElementById("muffin-black").src = 'content/muffin-black.png';
}
// TRIDENT SHIRT 
function shirtToWhite() {
    document.getElementById("shirt-black").src = 'content/shirt-white.png';
}
function shirtToBlack() {
    document.getElementById("shirt-black").src = 'content/shirt-black.png';
}
// HAT 
function hatToWhite() {
    document.getElementById("hat-black").src = 'content/white-hat.png';
}
function hatToBlack() {
    document.getElementById("hat-black").src = 'content/black-hat.png';
}
// MERCH DONE 
// ITEM SELECT 
function selectImageAxolotl(){
    document.getElementsByClassName("display-img").src = 'content/axolotl-white.png';
}

const displayImage = document.querySelector('.display-img')
const imageSelectors = document.querySelectorAll('.select-image')
imageSelectors.forEach(selector => {
    selector.addEventListener('click', (e) => {
        displayImage.src = selector.children[0].src
    })
})
// SIZE SELECT 
$(".small-size").each(function() {
    var button = $(this); button.on("click", function () { button.toggleClass("small-size"); button.toggleClass("size-selected");  
 }) }); 
    
$(".medium-size").each(function() {
    var button = $(this); button.on("click", function () { button.toggleClass("medium-size"); button.toggleClass("size-selected"); 
 }) });
    
$(".large-size").each(function() {
    var button = $(this); button.on("click", function () { button.toggleClass("large-size"); button.toggleClass("size-selected"); 
 }) });


function addItem(){
    let productInner = document.querySelector(".product-inner")
    let quantityInput = productInner.querySelector(".quantity")
    let currentImage = document.querySelector(".display-img")
    let selectedSize = document.querySelector(".size-selected")
    let itemInfo = {
        count: quantityInput.value,
        image: currentImage.src,
        size: selectedSize.textContent,
    }
    cart.push(itemInfo)
}
let addItemButton = document.querySelector(".add-to-cart")
addItemButton.addEventListener("click", addItem)
let cart = []