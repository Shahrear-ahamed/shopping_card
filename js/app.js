window.onload=function(){
    allPrices();
}
function priceUpdateOneItems(plusMinusBtn,fixPrice, totalSinglePrice, qty, isqunt){
    document.getElementById(plusMinusBtn).addEventListener("click", function(){
        const getFixPriceText = document.getElementById(fixPrice);
        const updatePrice = document.getElementById(totalSinglePrice)
        const getInputValue = document.getElementById(qty);
        const getFixPrice = parseFloat(getFixPriceText.innerText);
        const getInputAmount = parseInt(getInputValue.value);
        if(isqunt){
            getInputValue.value =parseInt(getInputValue.value)+1;
            updatePrice.innerText = getFixPrice*parseInt(getInputValue.value);
        }else{
            if(getInputValue.value >0){
                getInputValue.value = parseInt(getInputValue.value)-1;
                updatePrice.innerText = getFixPrice*parseInt(getInputValue.value);
            }
        }allPrices();
    });
}
function allPrices(){
    //prices form top
    const mobilePrice = document.getElementById("phone-update-price").innerText;
    const casePrice = document.getElementById("update-case-price").innerText;
    // set prices
    const subTotalText = document.getElementById("sub-total");
    const taxText = document.getElementById("tax-amount");
    const grandTotalText = document.getElementById("full-total");

    const sum = parseFloat(mobilePrice)+parseFloat(casePrice);
    const tax =parseFloat((sum*.10).toFixed(1));

    subTotalText.innerText = sum;
    taxText.innerText= tax;
    return grandTotalText.innerText= sum+tax;
}
function checkOut(){
    const tk = allPrices();
    if(tk>0){
        alert(`Great Your order in progress..😊 your total price is :- ${tk} only`)
    }else{
        alert("Please select some product and place order 😊")
    }
}

priceUpdateOneItems("phone-plus", "phone-fixed-price", "phone-update-price", "phone-qty", true);
priceUpdateOneItems("phone-minus", "phone-fixed-price", "phone-update-price", "phone-qty", false);
priceUpdateOneItems("case-plus", "case-fixed-price", "update-case-price", "case-qty", true);
priceUpdateOneItems("case-minus", "case-fixed-price", "update-case-price", "case-qty", false);