const app = document.querySelector("main");
// const logo = document.createElement('img');
// logo.src = ''; //need to fill with logo picture
const container = document.createElement('div');
container.setAttribute('class', 'container');
// app.appendChild(logo);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://swgoh.gg/api/player/492912899/', true);

request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(toon => {
      // Create a div with a charList class
      const table = document.createElement('table');
      table.setAttribute('class', 'charList');

      // Create an tr and set the text content to toon name
      const tr = document.createElement('tr');
      tr.textContent = toon.name;

      const td = document.createElement('td');
      toon.name = toon.description.substring(0, 300); // Limit to 300 chars
      td.textContent =  `${toon.description}`; // End with an ellipses

      // Append the cards to the container element
      container.appendChild(table);

      // Each card will contain an h1 and a p
      table.appendChild(tr);
      table.appendChild(td);
    });
  } else {
    console.log('error');
  }
};

// Send request
request.send();
