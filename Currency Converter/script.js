const amount = document.querySelector("#amount")
const convertBtn = document.querySelector("#convertBtn")
const fromCurrency = document.querySelector("#fromCurrency")
const toCurrency = document.querySelector("#toCurrency")


convertBtn.addEventListener("click", async () => {

    const fromCurr = fromCurrency.value
    const toCurr = toCurrency.value

    const res = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_uzfKDZQ9W5SB2iqlXvVpx2uTv4XF1p7Z7sNQHwES")
    const data = await res.json()

    const allCurrentries = data.data

    if (!amount.value || !fromCurr || !toCurr) {
        alert("Please fill in all fields.");
        return;
    }

    if (fromCurr === toCurr) {
        alert("Please select different currencies.");
        return;
    }

    const total = ((Number(amount.value) * allCurrentries[toCurr]) / allCurrentries[fromCurr]).toFixed(2)

    document.querySelector("#result").innerHTML = ` ${amount.value} ${fromCurrency.value} = ${total} ${toCurr}`

})