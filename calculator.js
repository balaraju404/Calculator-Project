
var displayValue = 0;
function clickedBtn(btnValue) {
    var aud1 = new Audio()
    aud1.src = `./click.mp3`
    aud1.play()
    if (displayValue == 0) {
        displayValue = btnValue;
    }
    else {
        displayValue = `${displayValue}${btnValue}`
    }
    // console.log(displayValue)
    displayInput.value = displayValue;

}

function clearScreen() {
    var aud2 = new Audio()
    aud2.src = `./clear.mp3`
    aud2.play()
    // aud2.play()
    displayValue = 0
    displayInput.value = ``;
}

function total() {
    // aud3.play()
    try {
        displayValue = eval(displayInput.value);
        displayInput.value = displayValue;
        var aud4 = new Audio()
        aud4.src = `./equal.mp3`
        aud4.play()
    } catch (error) {
        displayInput.value = 'Error';
        var aud5 = new Audio()
        aud5.src = `./error.mp3`
        aud5.play()
        console.error(error);
    }
}

