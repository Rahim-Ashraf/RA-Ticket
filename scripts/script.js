
// appendin seat details
function apendSeatDetails(seat) {
    const newElement = document.createElement("div");
    newElement.classList.add("flex");
    newElement.classList.add("justify-between");
    const element1InNewElement = document.createElement("p");
    const element2InNewElement = document.createElement("p");
    const seatNumber = document.createElement("p");
    element1InNewElement.innerText = "Economy";
    element2InNewElement.innerText = "550";
    seatNumber.innerText = seat;
    newElement.appendChild(seatNumber);
    newElement.appendChild(element1InNewElement);
    newElement.appendChild(element2InNewElement);
    const parrent = document.getElementById("selected-seats-details");
    return parrent.appendChild(newElement);
}

// add background color
function addBackgroundColor(element) {
    const getElementId = document.getElementById(element.innerText);
    getElementId.style.backgroundColor = "#1DD100";
    getElementId.style.color = "white";
}

// make grand total
function grandTotal() {
    const grandTotalText = document.getElementById("grand-total");
    const totalPrice = document.getElementById("total-price");
    grandTotalText.innerText = parseInt(totalPrice.innerText);

}

// function that execude on click over seat
const seats = document.querySelectorAll(".seat");
const arr = [];
for (const seat of seats) {
    seat.addEventListener("click", function () {
        const totalSelectedSeats = document.getElementById("total-selected-seats");

        if (parseInt(totalSelectedSeats.innerText) < 4 && !arr.includes(seat)) {
            const totalPrice = document.getElementById("total-price");
            const seatsLeft = document.getElementById("seats-left");
            totalSelectedSeats.innerText = parseInt(totalSelectedSeats.innerText) + 1;
            totalPrice.innerText = parseInt(totalPrice.innerText) + 550;
            seatsLeft.innerText = parseInt(seatsLeft.innerText) - 1;
            apendSeatDetails(seat.innerText);
            addBackgroundColor(seat);
            grandTotal();
            arr.push(seat)

        }
    })
}


// coupon functionalities

function grandTotalForCoupon() {
    const grandTotalText = document.getElementById("grand-total");
    const totalPrice = document.getElementById("total-price");
    grandTotalText.innerText = parseInt(totalPrice.innerText);
    const couponValue = document.getElementById("coupon-value");
    if (couponValue.value === "NEW15") {
        grandTotalText.innerText = parseInt(totalPrice.innerText) * .85;
        document.getElementById("coupon-filed").classList.add("hidden");

    } else if (couponValue.value === "Couple 20") {
        grandTotalText.innerText = parseInt(totalPrice.innerText) * .80;
        document.getElementById("coupon-filed").classList.add("hidden");

    } else {
        alert("please Type a valid coupon");
    }
}
document.getElementById("coupon-button").addEventListener("click", grandTotalForCoupon);

// newsletter functionalities
function submitForTicket() {
    const phoneNumber = document.getElementById("phone-number");
    if (phoneNumber.value >= 0) {
        document.getElementById("submit-button").removeAttribute("disabled")
    }
}
document.getElementById("phone-number").addEventListener("change", function () {
    submitForTicket()
})

document.getElementById("submit-button").addEventListener("click", function () {
    document.getElementById("header").classList.add("hidden");
    document.getElementById("main").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");
    document.getElementById("popup-div").classList.remove("hidden");
})
document.getElementById("popup-button").addEventListener("click", function(){
    document.getElementById("header").classList.remove("hidden");
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("footer").classList.remove("hidden");
    document.getElementById("popup-div").classList.add("hidden");
})