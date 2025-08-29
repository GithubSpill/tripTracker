import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Dashboard() {
  const styles = getStyles();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={[ styles.earningContainer]}>
        <Text>Earning For this week</Text>
        <View style={styles.moneyContainer}>
          <Text style={styles.moneyText}>$456.95</Text>
        </View>
      </View>


      <View style={{ marginTop: 180 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={[styles.summaryCard, { flex: 1, marginRight: 8 }]}>
            <Text>Driving Distance</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>546 KM</Text>
          </View>
          <View style={[styles.summaryCard, { flex: 1, marginLeft: 8 }]}>
            <Text>Time Driven</Text>
              <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>43.5 Hours</Text>
          </View>
        </View>
      </View>

      <View style={styles.hourlyEarningCard}>
        <Text>Hourly Earning</Text>
        <Text style={styles.hourlyEarningText}>$15.00/hr</Text>
      </View>
    </View>

    
  );
}


function getStyles() {
  return StyleSheet.create({
    earningContainer: {
      position: 'absolute',
      top: 30,
      left: 10,
      right: 10,
      padding: 32, // increased padding
      backgroundColor: '#fff',
      borderRadius: 20, // slightly larger radius
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      alignItems: 'center',
    },
    summaryCard: {
      backgroundColor: '#fff',
      borderRadius: 20,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      alignItems: 'center',
      padding: 24,
    },
    moneyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16, // increased margin
    },
    moneyText: {
      fontSize: 40, // larger font size
      color: '#27ae60',
      fontWeight: 'bold',
    },
    hourlyEarningCard: {
      backgroundColor: '#fff',
      borderRadius: 20,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      alignItems: 'center',
      padding: 24,
      marginTop: 30,
    },
    hourlyEarningText: {
      fontSize: 28,
      color: '#2980b9',
      fontWeight: 'bold',
      marginTop: 10,
    },
  });
}