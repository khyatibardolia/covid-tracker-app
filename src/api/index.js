import axios from 'axios';

const BASE_URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let url = BASE_URL;
  if (country) {
    url = `${BASE_URL}/countries/${country}`;
  }
  try {
    //only take data from response
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
    //const modifiedData = {confirmed, recovered, deaths, lastUpdate};
    return {confirmed, recovered, deaths, lastUpdate};
  } catch (error) {
    console.log(error);
  }

};

export const fetchDailyData = async () => {
  try {
    //only take data from response
    const {data} = await axios.get(`${BASE_URL}/daily`);
    const modifiedData = data?.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryList = async () => {
  try {
    //only take data from response
    const {data: {countries}} = await axios.get(`${BASE_URL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
