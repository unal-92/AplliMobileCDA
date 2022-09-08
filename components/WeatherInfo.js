import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors} from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR} = colors
export default function WeatherInfo({ currentWeather }) {
  // console.log(currentWeather.main.temp);
  const { //je déclare ma variable / destrucuration d'un objet
    main: { temp }, // destrucuration d'un objet
    weather: [details],
    name,
  } = currentWeather //destrucuration d'un objet 
  const { icon, main, description } = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  // console.log(currentWeather);
  return (
    // <View>
    //   <Text>{name}</Text>
    //     <Text style={style.WeatherInfo}>{temp}</Text>
    //     <Image style={StyleSheet.weather} source={{uri: iconUrl}} />
    //     <Text>{description}</Text>
    //     {/* <Text style={styles.weatherDescription}>{description}</Text> */}
    //     <Text>{main}</Text>
        

    // </View>

    <View style={style.weatherInfo}>
      <Text style={{textAlign: 'center'}}>{name}</Text>
      <Image style={style.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={style.textPrimary}>{Math.round(temp)}°</Text>
      <Text style={style.weatherDescription}>{description}</Text>
      <Text style={style.TextSecondary}>{main}</Text>
      {/* <Text>{description}</Text> */}
    </View>
  )
}

const style  = StyleSheet.create({
  weatherInfo: {
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
  weatherIcon: {
      width: 100,
      height: 100,
  },
  textPrimary: {
    fontSize:40,
    color:  PRIMARY_COLOR
  },
  TextSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: '500',
    marginTop: 10,
  },
})