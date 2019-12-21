function urlChange() {
    const url = document.getElementById("form-url").value;
    document.getElementById("img").src = url;
}

function rangeChange() {
    const rangeValY = document.getElementById("form-range-y").value;
    let txt = `scaleY(${rangeValY / 100}) `;

    const rangeValX = document.getElementById("form-range-x").value;
    txt += `scaleX(${rangeValX / 100})`;

    document.getElementById("img").style.transform = txt
}