
const colorSelect = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
    if (colorSelect.selectedIndex !== -1) {
        colorSelect.remove(colorSelect.selectedIndex);
    }
});
