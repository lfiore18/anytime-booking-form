function dateDiffInDays(a, b)
{
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function calculatePriceOfStay()
{
    // get dates 
    const checkInDateEl = document.getElementById("check-in-date");
    const checkOutDateEl = document.getElementById("check-out-date");

    // convert to date objects to work with dateDiffInDays
    let checkInDate = new Date(checkInDateEl.value);
    let checkOutDate = new Date(checkOutDateEl.value);

    // Return early if the checkin date is greater than checkout date
    if (checkInDate >= checkOutDate)
    {
        checkOutDate.setDate(checkInDate.getDate() + 1);
        checkOutDateEl.value = checkOutDate.toISOString().slice(0, 10);
    }

    const totalPriceSpan = document.getElementById("total-price");
    const priceCalculationLabel = document.getElementById("nights-price-label");
    const priceCalculationTotal = document.getElementById("nights-price-calculation");
    
    // hardcoded price per day
    const pricePerDay = 199;

    let numOfNightsToStay = dateDiffInDays(checkInDate, checkOutDate);

    priceCalculationLabel.innerText = `£${pricePerDay} x ${numOfNightsToStay} night${numOfNightsToStay > 1 ? 's' : ''}`;
    priceCalculationTotal.innerText = `£${numOfNightsToStay * pricePerDay}`;
    totalPriceSpan.innerText = `£${numOfNightsToStay * pricePerDay}`;
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', e => {
    fetch("http://localhost:3000/properties")
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
});

calculatePriceOfStay();