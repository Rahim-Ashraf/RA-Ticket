
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
    const couponValue = document.getElementById("coupon-value");
    if (couponValue.value === "NEW15") {
        const int = grandTotalText.innerText = parseInt(totalPrice.innerText) * .85;
        console.log(int)
    } else if(couponValue.value === "Couple 20"){
        const int = grandTotalText.innerText = parseInt(totalPrice.innerText) * .80;
        console.log(int)
    }
    // console.log( parseInt(totalPrice.innerText));
    // console.log(grandTotalText.innerText)
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

// coupon maching
function couponMaching() {
    // const couponValue = document.getElementById("coupon-value");
    grandTotal()
    // if (couponValue.value === "NEW15") {
    //     return "NEW15"
    // } else if (couponValue.value === "Couple 20") {
    //     return "Couple 20"
    // }
}

document.getElementById("coupon-button").addEventListener("click", couponMaching);

// newsletter functionalities

