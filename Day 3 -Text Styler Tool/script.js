const textInput = document.querySelector("#textInput")
const color = document.querySelector("#colour")
const fontSize = document.querySelector("#fontSize")
const fontWeight = document.querySelector("#fontWeight")
const fontFamily = document.querySelector("#fontFamily")
const TextTransform = document.querySelector("#TextTransform")
const TextDecoration = document.querySelector("#TextDecoration")
const button = document.querySelector("button")


button.addEventListener('click', () => {

    textInput.style.cssText = `color :${color.value};
    font-size :${fontSize.value};font-weight :${fontWeight.value};
    font-family :${fontFamily.value};Text-transform :${TextTransform.value};
    Text-decoration :${TextDecoration.value};`

})

function copyFNX() {
    navigator.clipboard.writeText(textInput.value)
}


function clearAll() {
    textInput.value = ""
    color.value = "-- Select Colour --"
    fontSize.value = "-- Font-size --"
    fontWeight.value = "-- Font-weight --"
    fontFamily.value = "-- Font-family --"
    TextTransform.value = "-- Text Transform --"
    TextDecoration.value = "-- Text Decoration --"
}