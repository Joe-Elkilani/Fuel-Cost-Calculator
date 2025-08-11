const distance = document.getElementById("distance");
const efficiency = document.getElementById("efficiency");
const fuelPricePerLiter = document.getElementById("fuelPricePerLiter");
const btn = document.getElementById("btn");
const res = document.getElementById("res");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const distanceValue = parseFloat(distance.value);
    const efficiencyValue = parseFloat(efficiency.value);
    const fuelPricePerLiterValue = parseFloat(fuelPricePerLiter.value);
    const totalBenzene = distanceValue / efficiencyValue;
    const totalCost = totalBenzene * fuelPricePerLiterValue;
    if (isNaN(totalBenzene) || isNaN(totalCost)) {
        res.innerHTML = "Please enter valid numbers.";
        return;
    }
    res.innerHTML = `Total Benzene: ${totalBenzene.toFixed(2)} liters<br>Total Cost: $${totalCost.toFixed(2)}`;
    distance.value = "";
    efficiency.value = "";
    fuelPricePerLiter.value = "";
});
