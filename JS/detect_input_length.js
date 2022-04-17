// Detect the length in input.
var inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (input.checkValidity()) {
            input.classList.add('valid')
            input.classList.remove('invalid')
        } else {
            input.classList.remove('valid')
            input.classList.add('invalid')
        }
    })
})
// Get from DOM, declare the value, and storage.
// When the name key in the wrong length, change the color.