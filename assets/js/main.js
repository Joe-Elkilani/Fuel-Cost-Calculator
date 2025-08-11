const distance = document.getElementById("distance");
const effciency = document.getElementById("effciency");
const fuelPricePerLiter = document.getElementById("fuelPricePerLiter");
const btn = document.getElementById("btn");
const res = document.getElementById("res");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const distanceValue = parseFloat(distance.value);
    const effciencyValue = parseFloat(effciency.value);
    const fuelPricePerLiterValue = parseFloat(fuelPricePerLiter.value);
    const totalBenzene = distanceValue / effciencyValue;
    const totalCost = totalBenzene * fuelPricePerLiterValue;
    if (isNaN(totalBenzene) || isNaN(totalCost)) {
        res.innerHTML = "Please enter valid numbers.";
        return;
    }
    res.innerHTML = `Total Benzene: ${totalBenzene.toFixed(2)} liters<br>Total Cost: $${totalCost.toFixed(2)}`;
});
