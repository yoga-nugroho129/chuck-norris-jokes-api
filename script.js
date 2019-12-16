document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('#number').value;

    // connect to API
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            // get jokes from the API
            const response = JSON.parse(this.responseText);

            // call jokes for ready to attach to the DOM
            let output = '';

            if (response.type === 'success') {
                // looping through jokes in array
                response.value.forEach(function(joke) {
                    // get jokes according to the key-name of the JSON array
                    output += `<li>${joke.joke}</li>`
                });
            } else {
                output = "<li>Something went Wrong</li>"
            }
            // attach generated jokes to the HTML
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault()
}