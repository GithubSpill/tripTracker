import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native-gesture-handler";

export default function Dashboard() {
  const styles = getStyles();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={[ styles.defaultCard]}>
        <Text>Earning For this week</Text>
        <View style={styles.moneyContainer}>
          <Text style={styles.moneyText}>$456.95</Text>
        </View>
      </View>


      <View >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={[styles.defaultCard, { flex: 1, marginRight: 8 }]}>
            <Text>Driving Distance</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>546 KM</Text>
          </View>
          <View style={[styles.defaultCard, { flex: 1, marginLeft: 8 }]}>
            <Text>Time Driven</Text>
              <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 10 }}>43.5 Hours</Text>
          </View>
        </View>
      </View>

      <View style={styles.defaultCard}>
        <Text>Hourly Earning</Text>
        <Text style={styles.hourlyEarningText}>$15.00/hr</Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 24,
          right: 24,
          zIndex: 10,
        }}
      >
        <Pressable
          style={{
        backgroundColor: "#27ae60",
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
          }}
          onPress={() => alert("Start Trip pressed!")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14, textAlign: "center" }}>
        Start{'\n'}Trip
          </Text>
        </Pressable>
      </View>

    </View>

    
  );
}


function getStyles() {
  return StyleSheet.create({
    moneyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },
    moneyText: {
      fontSize: 40,
      color: '#27ae60',
      fontWeight: 'bold',
    },
    hourlyEarningText: {
      fontSize: 28,
      color: '#27ae60',
      fontWeight: 'bold',
      marginTop: 10,
    },
    defaultCard: {
      backgroundColor: '#fff',
      borderRadius: 16,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 5,
      alignItems: 'center',
      padding: 20,
      marginVertical: 10,
    },
  });
}