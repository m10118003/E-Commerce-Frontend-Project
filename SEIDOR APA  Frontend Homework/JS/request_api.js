const request = new XMLHttpRequest()

function userAction() {
    swal('To confirm payment, please press the button again!')
    fetch('https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f')
        .then (function (error, response, body) {
            return response.json()
            // Data processing, let data be extracted 
        })   
        if (request.status >= 200 && request.status < 400) {
            window.location.href = './order_created.html';
            // Get code 201, the resource has been created, and send it back.
            // Will Use the resource in create the page, Step 3 | Order(order_created.html).
        } 
        return
}

