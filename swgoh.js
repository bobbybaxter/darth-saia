const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

// Create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/player/492912899', true);

request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);
  // console.log(data.units[0]);

  const buildCharTable = () => {
    let domString = '';
    for(let i = 0; i < data.units.length; i++) {
      if (data.units[i].data.combat_type === 1) {
        domString += `<tr>`;
        domString +=   `<td>${data.units[i].data.name}</td>`;
        domString +=   `<td>${data.units[i].data.rarity}</td>`;
        domString +=   `<td>${data.units[i].data.gear_level}</td>`;
        domString +=   `<td>${data.units[i].data.level}</td>`;
        domString += `</tr>`
      }
    }
    printToDom('tableArea', domString);
  }

  const init = () => {
    buildCharTable();
  };

  init();
};

// Send request
request.send ();

