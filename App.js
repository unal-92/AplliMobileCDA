import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./components/WeatherInfo";
// import UnitsPicker from './components/UnitsPickers' // importation de composant
import RealoadIcon from "./components/RealoadIcon";
import WeatherDetails from "./components/WeatherDetails";
// import { colors } from './utils/index'
import {REACT_APP_WEATHER_API_KEY} from "@env"
console.log(REACT_APP_WEATHER_API_KEY);
const WEATHER_API_KEY = REACT_APP_WEATHER_API_KEY;
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null); //message d'erreur
  const [currentWeather, setCurrentWeather] = useState(null); // useState : Renvoie une valeur d’état local et une fonction pour la mettre à jour
  const [unitsSystem, setUnitsSystem] = useState("metric");

  useEffect(() => {
    load();
  }, []);
  async function load() {
    setCurrentWeather(null)
    //regroupe instruction et echapper
    try {
      let { status } = await Location.requestForegroundPermissionsAsync(); // donne permission a l'appli //declaration variable

      if (status !== "granted") {
        //si le statut est differant de grant nous renvoyer la demande
        setErrorMessage(
          "nous avons besoin de votre localisation pour acceder à lapplication"
        ); //definit le message d'erreur
        return;
      }
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
        timeout: 5000,
      });

      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl); // recuperation des appel api

      const result = await response.json(); // transformer en json ici // une fois le resultat obenu nous allons stocker cela ligne 11 en declarant une cont (tableau)

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      // console.log(error);
    } // rentre dans le catch si erreur
    //  setErrorMessage(error.message)
  }
  if (currentWeather) {
        return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
        <View style={styles.main}>
        {/* <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>  */}
        <Text style={{textAlign: "right", top: -70, bottom: 10}}>
          <RealoadIcon  load={load}/>    {/*appel de la fonction*/}
        </Text>
          {/* <Text>{currentWeather.main.temp}</Text> */}
          {/* <Text> */}
            <WeatherInfo currentWeather={currentWeather} />
            {/* je fais passer la valeur de currentWeather a mon composant*/}
          {/* </Text> */}
        </View>
        <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem}/>
      </View>


    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#rgb(138 182 232)',
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});


// {/*div=View*/}
// {/*p=Text*/}