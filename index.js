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
    const stayDurationEl = document.getElementById("stay-duration");
    const totalPriceSpan = document.getElementById("total-price");
    
    const priceCalculationLabel = document.getElementById("nights-price-label");
    const priceCalculationTotal = document.getElementById("nights-price-calculation");
    
    // hardcoded price per day
    const pricePerDay = 199;

    let numOfNightsToStay = stayDurationEl.value;

    if (numOfNightsToStay <= 0)
    {
        numOfNightsToStay = 1;
        stayDurationEl.value = numOfNightsToStay;
    }

    priceCalculationLabel.innerText = `£${pricePerDay} x ${numOfNightsToStay} night${numOfNightsToStay > 1 ? 's' : ''}`;
    priceCalculationTotal.innerText = `£${numOfNightsToStay * pricePerDay}`;
    totalPriceSpan.innerText = `£${numOfNightsToStay * pricePerDay}`;
}

calculatePriceOfStay();