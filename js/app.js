window.onload = function fixTax(){
    totalAmountFanc();
}
function itemsUpdate(product,price, isAdd){
    const productInput = document.getElementById(product + "_number");
    let productAmount = parseInt(productInput.value);
    if(isAdd){
        productAmount = productAmount + 1;
    }else if(productAmount > 0){
        productAmount = productAmount - 1;
    }
    productInput.value = productAmount;
    const priceText = document.getElementById(product + "_price");
    priceText.innerText = productAmount * price;
    // total 
    totalAmountFanc();
}
// total price are added here 
function getInputValue(names){
    const productText = document.getElementById(names + "_price");
    return productAmount = parseInt(productText.innerText);
}
function totalAmountFanc(){
    const phonePrice = getInputValue("phone");
    const casePrice = getInputValue("case");

    const sum = phonePrice+casePrice;
    const tax = parseFloat((sum/15).toFixed(2));
    const grandTotal = sum + tax;

    document.getElementById("sub_total").innerText = sum;
    document.getElementById("tax_amount").innerText = tax;
    document.getElementById("full_total").innerText = grandTotal;
}
// phone handeler
document.getElementById("phone_plus").addEventListener("click",function(){
    itemsUpdate("phone", 1219, true);
});
document.getElementById("phone_minus").addEventListener("click", function(){
    itemsUpdate("phone", 1219, false);
});
// case handler
document.getElementById("case_plus").addEventListener("click", function(){
    itemsUpdate("case", 59, true);
});
document.getElementById("case_minus").addEventListener("click", function(){
    itemsUpdate("case", 59, false);
});
// checkOut are here
document.getElementById("checkOut").addEventListener("click", function(){
    alert("Your Request are being process");
    alert("Thank's for shopping with us 😊");
})