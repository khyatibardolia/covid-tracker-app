import { Typography, Grid } from '@material-ui/core';
import CardComponent from '../Common/CardComponent';
import styles from './Cards.module.css';

const Cards = (props) => {
  const {data: {confirmed, deaths, recovered, lastUpdate}, country} = props;
  if (!confirmed) {
    return 'Loading....';
  }
  return (<div className={styles.container}>
    <Typography className={styles.text} gutterBottom variant="h4" component="h2" align={'center'}>
      {country ? country : 'Global'}
    </Typography>
    <Grid container spacing={3} justify="center">
      <CardComponent
        className={styles.infected}
        cardTitle="Infected"
        value={confirmed?.value}
        lastUpdate={lastUpdate}
        cardSubtitle="Number of active cases from COVID-19."
      />
      <CardComponent
        className={styles.recovered}
        cardTitle="Recovered"
        value={recovered?.value}
        lastUpdate={lastUpdate}
        cardSubtitle="Number of recoveries from COVID-19."
      />
      <CardComponent
        className={styles.deaths}
        cardTitle="Deaths"
        value={deaths?.value}
        lastUpdate={lastUpdate}
        cardSubtitle="Number of deaths caused by COVID-19."
      />
    </Grid>
  </div>);
};

export default Cards;
