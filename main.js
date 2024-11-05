const toggle = document.querySelector(".toggle");
const essentialPrice = document.getElementById("essential-price");
const premiumPrice = document.getElementById("premium-price");
const bestPrice = document.getElementById("price");

toggle.addEventListener("change", () => {
    if(toggle.checked){
        essentialPrice.innerHTML = `$429.99 <span> /year </span>`;
        bestPrice.innerHTML = `$580.99 <span> /year </span>`;
        premiumPrice.innerHTML = `$980.99 <span> /year </span>`;
    } else {
        essentialPrice.innerHTML = `$39.99 <span> /month </span>`;
        bestPrice.innerHTML = `$59.99 <span> /month </span>`;
        premiumPrice.innerHTML = `$89.99 <span> /month </span>`;
    }
})


