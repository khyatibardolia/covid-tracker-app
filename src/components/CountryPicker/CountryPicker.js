import { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import { fetchCountryList } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = ({handleCountryChange}) => {

  const [countries, setCountryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCountryList(await fetchCountryList());
    };
    fetchData();
  }, [countries]);

  return (<FormControl className={styles.formControl}>
    <NativeSelect defaultValue={''} onChange={(e) => handleCountryChange(e.target.value)}>
      <option value={''}>Global</option>
      {countries?.map((countryName, i) => <option key={i} value={countryName}>{countryName}</option>)}
    </NativeSelect>
  </FormControl>);
};

export default CountryPicker;
