import React from "react";
import { Typography } from "@material-ui/core";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    // console.log(fetchedData);

    // console.log(country);
    //fetchedData

    this.setState({ data: fetchedData, country: country });

    //setState
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          alt="COVID-19"
          src={"https://i.ibb.co/7QpKsCX/image.png"}
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Typography variant="h5" color="textSecondary">
          CREATED BY @ SHUBHAM KUMAR!!
        </Typography>
      </div>
    );
  }
}

export default App;
