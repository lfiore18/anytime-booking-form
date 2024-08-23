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
    if (checkInDate > checkOutDate)
    {
        checkInDateEl.value = checkOutDateEl.value;
        return;
    }

    const totalPriceSpan = document.getElementById("total-price");
    
    const priceCalculationLabel = document.getElementById("nights-price-label");
    const priceCalculationTotal = document.getElementById("nights-price-calculation");

        
    // hardcoded price per day
    const pricePerDay = 199;

 
    let numOfDaysToStay = dateDiffInDays(checkInDate, checkOutDate);

    priceCalculationLabel.innerText = `£${pricePerDay} x ${numOfDaysToStay} nights`;
    priceCalculationTotal.innerText = `£${numOfDaysToStay * pricePerDay}`;
    totalPriceSpan.innerText = `£${numOfDaysToStay * pricePerDay}`;
}

calculatePriceOfStay();