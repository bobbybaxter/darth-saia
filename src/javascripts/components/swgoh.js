/* eslint-disable no-param-reassign */
import util from '../helpers/util';
import allCharactersData from '../helpers/data/allCharactersData';
import currentRosterData from '../helpers/data/currentRoster';

let allCharacters = [];
let currentRoster = [];
let newRosterArray = [];

const buildDataTable = () => {
  $(document).ready(() => {
    $('#charList').DataTable({
      // data: allCharacters,
      retrieve: true,
      // columns: [
      //   { width: '25%' },
      //   { width: '25%' },
      //   { width: '25%' },
      //   { width: '25%' },
      // ],
      paging: false,
      scrollY: '300px',
      scrollCollapse: false,
      autoWidth: true,
    });
  });
};

const getNewRosterArray = () => newRosterArray;

const getRowColor = (toon) => {
  console.error(toon.rarity);
  let color = '';
  if (toon.rarity === 0) {
    color = 'table-danger text-dark';
    console.error('toon rarity = 0', toon.name);
  } else if (toon.rarity === 7 && toon.gearLvl === 12 && toon.level === 85) {
    color = 'table-success text-dark';
  } else {
    color = 'default';
  }
  console.error(color);
  return color;
};

const buildCharTable = () => {
  const arrayToPrint = getNewRosterArray();
  console.error(arrayToPrint);
  let domString = '';
  $.each(arrayToPrint, (i) => {
    const rowColor = getRowColor(arrayToPrint[i]);
    domString += `<tr class="${rowColor}">`;
    domString += `<td>${arrayToPrint[i].name}</td>`;
    domString += `<td>${arrayToPrint[i].rarity}</td>`;
    domString += `<td>${arrayToPrint[i].gearLvl}</td>`;
    domString += `<td>${arrayToPrint[i].level}</td>`;
    domString += '</tr>';
  });
  util.printToDom('tableArea', domString);
  buildDataTable();
};

const setNewRosterArray = (arr) => {
  newRosterArray = arr;
  buildCharTable();
};

const buildNewRoster = (allChars, currentRost) => {
  const filteredRost = currentRost
    .filter(x => x.data.combat_type === 1)
    .map(toon => ({
      name: toon.data.name,
      rarity: toon.data.rarity,
      level: toon.data.level,
      gearLvl: toon.data.gear_level,
      power: toon.data.power,
    }))
    .sort((a, b) => ((a.name > b.name) ? 1 : -1));
  allChars.forEach((char) => {
    const result = filteredRost.filter(filteredChar => filteredChar.name === char.name);
    char.rarity = (result[0] !== undefined) ? result[0].rarity : 0;
    char.level = (result[0] !== undefined) ? result[0].level : 0;
    char.gearLvl = (result[0] !== undefined) ? result[0].gearLvl : 0;
    char.power = (result[0] !== undefined) ? result[0].power : 0;
  });
  setNewRosterArray(allChars);
};

const initializeCurrentRoster = (passAllChars) => {
  currentRosterData.getCurrentRosterData()
    .then((resp) => {
      const currentRosterResults = resp.data.units;
      currentRoster = currentRosterResults;
      buildNewRoster(passAllChars, currentRoster);
    })
    .catch(err => console.error(err));
};

const initializeAllCharacters = () => {
  allCharactersData.getAllCharactersData()
    .then((resp) => {
      const allCharactersResults = resp.data.data;
      allCharacters = allCharactersResults;
      initializeCurrentRoster(allCharacters);
    })
    .catch(err => console.error(err));
};

const initialDataInit = () => {
  initializeAllCharacters();
};


export default { initialDataInit };
