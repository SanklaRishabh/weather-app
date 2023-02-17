document.querySelector("img[alt='New Delhi']").addEventListener("click", () => {
    document.querySelector(".temperature h6").innerHTML = "New Delhi, India";
    document.querySelector("#measure").innerHTML = "28<span><sup>&deg;C</sup></span>";
});
document.querySelector("img[alt='Tokyo']").addEventListener("click", () => {
    document.querySelector(".temperature h6").innerHTML = "Tokyo, Japan";
    document.querySelector("#measure").innerHTML = "23<span><sup>&deg;C</sup></span>";
});
document.querySelector("img[alt='New York']").addEventListener("click", () => {
    document.querySelector(".temperature h6").innerHTML = "New York, USA";
    document.querySelector("#measure").innerHTML = "21<span><sup>&deg;C</sup></span>";
});
document.querySelector("img[alt='London']").addEventListener("click", () => {
    document.querySelector(".temperature h6").innerHTML = "London, UK";
    document.querySelector("#measure").innerHTML = "16<span><sup>&deg;C</sup></span>";
});