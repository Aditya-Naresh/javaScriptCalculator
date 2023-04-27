function btnClick(data) {
    let display = document.getElementById('displayLabel');
    display.value += data;
}

function clr() {
    let display = document.getElementById('displayLabel');
    display.value = ''
}