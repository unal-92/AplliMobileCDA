import React from 'react'
import  { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails ({currentWeather, unitsSystem}) {
    const {
        main: {feels_like, humidity, pressure},
        wind: {speed},
    } = currentWeather

    const windSpeed= unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h` //

    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>

                <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR} />
                    <View style={styles.weatherDetailsItems}></View>
                    <View> 
                    <Text>feels_like :</Text>
                <Text style={styles.TextSecondary}>{Math.round(feels_like)}°</Text>
                    </View>
{/* les 3 lignes ci-dessus peuvent être interpreté comme une div en html */}


                </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
                    <View style={styles.weatherDetailsItems}></View>
                    <View> 
                    <Text>humidity :</Text>
                <Text style={styles.TextSecondary}>{humidity} %</Text>
                    </View>
                    </View>

            </View>
                </View>





                <View style={{...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
                <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>

                <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 name="wind" size={30} color={PRIMARY_COLOR} />
                    <View style={styles.weatherDetailsItems}></View>
                    <View> 
                    <Text>Wind :</Text>
                <Text style={styles.TextSecondary}>{windSpeed}</Text>
                    </View>
{/* les 3 lignes ci-dessus peuvent être interpreté comme une div en html */}


                </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                <View style={styles.weatherDetailsRow}>
                    <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR} />
                    <View style={styles.weatherDetailsItems}></View>
                    <View> 
                    <Text>pressure :</Text>
                <Text style={styles.TextSecondary}>{pressure} hPa</Text>
                    </View>
                    </View>

            </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        margintop: 'auto',
        margin: 15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
weatherDetailsRow: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
weatherDetailsBox:{
    flex:1,
    padding:20,
},

weatherDetailsItems:{
alignItems: 'flex-end',
justifyContent: 'flex-end'
},

TextSecondary: {
    fontSize:15,
    color: SECONDARY_COLOR,
    fontWeight:'700',
    margin:7,

},
})
