import { useState, useEffect } from 'react';
import styles from './App.module.css';
import covidLogo from '../src/images/covid-logo.png';
/*import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';*/

//optimized import
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

const App = () => {

  const [data, setData] = useState({});
  const [country, selectedCountry] = useState('');
  useEffect(() => {
    const fetchMyAPI = async () => {
      setData(await fetchData());
    };
    fetchMyAPI();
  }, []);

  const handleCountryChange = async (country) => {
    setData(await fetchData(country));
    selectedCountry(country);
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={covidLogo} alt={'COVID-19'}/>
        <Cards data={data} country={country}/>
        <CountryPicker handleCountryChange={handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
      <div className={styles.footer}>
        <p>©{(new Date().getFullYear())} covidTracker by Khyati Bardolia</p>
      </div>
    </>
  );
};

export default App;
