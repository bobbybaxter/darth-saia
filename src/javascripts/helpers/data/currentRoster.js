import axios from 'axios';

const getCurrentRosterData = () => axios.get('../db/currentRoster.json');

export default { getCurrentRosterData };
