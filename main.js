let first = document.getElementById("first")
let second = document.getElementById("second")
let message = document.getElementById("message")


message.addEventListener("keyup", function (event) {
    first.textContent = event.target.value
    second.textContent = event.target.value
})