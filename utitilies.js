function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
// function getElementValueById(elementId){
//     const element = document.getElementById(elementId);
//     const elementValueString = element.innerText;
//     const value = parseFloat(elementValueString);
//     return value;
// }
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const getTextElementValueString = textElement.innerText;
    const textElementValue = parseFloat(getTextElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}