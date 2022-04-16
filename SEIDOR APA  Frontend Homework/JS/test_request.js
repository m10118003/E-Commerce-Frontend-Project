// If failed, install the npm, make the module.
// Use Request to 
const request = require('request');
request('https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f', function (error, response, body) {
    console.log('request'); 
    console.error('error:', error);
    // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);
    // Print the response status code if a response was received
    console.log('body:', body);
    // Print the HTML for the api.
    console.log(JSON.parse(body));
    // Change to the JSON form, as string.
    // Get code 201, the resource has been created, and send it back.
    // Will Use the resource in create the page, Step 3 | Order(order_created.html).
});

