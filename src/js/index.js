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
    
    const selectEl = document.getElementById("properties-select");
    const pricePerNight = getPriceFromSelectedOption(selectEl);

    // Update Price Tag at top of form
    const priceTag = document.getElementById("price-tag");
    priceTag.innerText = `£${pricePerNight}`;

    let numOfNightsToStay = dateDiffInDays(checkInDate, checkOutDate);

    // Update calculation tags at the bottom of form
    priceCalculationLabel.innerText = `£${pricePerNight} x ${numOfNightsToStay} night${numOfNightsToStay > 1 ? 's' : ''}`;
    priceCalculationTotal.innerText = `£${numOfNightsToStay * pricePerNight}`;
    totalPriceSpan.innerText = `£${numOfNightsToStay * pricePerNight}`;
}

function getPriceFromSelectedOption(selectEl)
{
    // get the currently selected option from the select element
    let selectedProperty = selectEl.options[selectEl.selectedIndex];
    
    // access the price data attribute on the selected element
    let selectedPropertyPrice = selectedProperty.dataset.price;

    return selectedPropertyPrice;
}

document.addEventListener('DOMContentLoaded', e => {
    fetch("http://localhost:3000/properties")
        .then(res => res.json())
        .then(properties => {
            const propertiesSelectEl = document.getElementById("properties-select"); 
            properties.forEach(property => {
                propertiesSelectEl.innerHTML += `<option value="${property.name}" data-price="${property.price}">${property.name}</option>`
            })
        })
        .then(next => { 
            calculatePriceOfStay();
        })
        .catch(err => console.log(err));
        
    const form = document.querySelector("form");
    form.addEventListener('submit', e => {
        e.preventDefault();
    });
});

