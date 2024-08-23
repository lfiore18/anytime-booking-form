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
    let checkInDate = document.getElementById("check-in-date").value;
    let checkOutDate = document.getElementById("check-out-date").value;

    const totalPriceSpan = document.getElementById("total-price");
    
    const priceCalculationLabel = document.getElementById("nights-price-label");
    const priceCalculationTotal = document.getElementById("nights-price-calculation");

        
    // hardcoded price per day
    const pricePerDay = 199;

    // convert to date objects to work with dateDiffInDays
    checkInDate = new Date(checkInDate);
    checkOutDate = new Date(checkOutDate);
 
    let numOfDaysToStay = dateDiffInDays(checkInDate, checkOutDate);

    priceCalculationLabel.innerText = `£${pricePerDay} x ${numOfDaysToStay} nights`;
    priceCalculationTotal.innerText = `£${numOfDaysToStay * pricePerDay}`;
    totalPriceSpan.innerText = `£${numOfDaysToStay * pricePerDay}`;
}

calculatePriceOfStay();