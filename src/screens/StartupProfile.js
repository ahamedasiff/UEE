import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import COLORS from '../consts/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function StartupProfile() {
  return (
    <View style={styles.container}>
      {/* First Card */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Image source={require('../assets/gamestreet.jpg')} style={styles.profileImage} />
          <Text style={styles.name}>Game Steet</Text>
        </View>
      </View>

      {/* Offer Status Card */}
      <View style={styles.card}>
        <Text style={styles.heading}>Offer Status</Text>
        <View style={styles.line} />
        <View style={styles.statusRow}>
          <Text style={styles.statusText}>Active Offers</Text>
          <Text style={styles.statusNumber}>10</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.statusRow}>
          <Text style={styles.statusText}>Expired Offers</Text>
          <Text style={styles.statusNumber}>5</Text>
        </View>
      </View>

      {/* Second Card */}
      <View style={styles.cardView}>
        <Text style={styles.cardText}>Total Views</Text>
        <Text style={styles.cardNumber}>12345</Text>
      </View>

      {/* Third Card */}
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('../assets/card.png')} style={styles.icon} />
            <Text style={styles.cardText}>Enter card details</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Fourth Card */}
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.row}>
            <Image source={require('../assets/badge.jpeg')} style={styles.icon} />
            <Text style={styles.cardText}>Boost your ad with VIP</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 13,
    marginRight: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardNumber: {
    fontSize: 22,
    color: COLORS.blue,
    fontWeight: 'bold'
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  cardView: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  line: {
    height: 2,
    backgroundColor: COLORS.blue,
    marginVertical: 10,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
  },
  statusNumber: {
    fontSize: 20,
    color: COLORS.blue,
  },
});

export default StartupProfile;
