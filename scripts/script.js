function selectSeats(event) {
    const totalSelectedSeats = document.getElementById("total-selected-seats");
    const totalPrice = document.getElementById("total-price");
    totalSelectedSeats.innerText = parseInt(totalSelectedSeats.innerText) + 1;
    totalPrice.innerText = parseInt(totalPrice.innerText) + 550;
    console.log(event.target.innerHtml)
    if (parseInt(totalSelectedSeats.innerText) > 4) {
    }
}
// const seats = document.querySelectorAll(".seat");
// for (const seat of seats) {
//     seat.addEventListener("click", selectedSeats)
// }

function selecting(){
    document.addEventListener("click", selectSeats)
}