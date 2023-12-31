import React, { useState, useEffect, useCallback} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import offers from '../consts/offers';
import rates from '../consts/rates';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';


const { width } = Dimensions.get('screen');
const cardWidth = width / 2.2;

const OffersHome = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOffers, setFilteredOffers] = useState(offers);
  const [allOffers, setAllOffers] = useState([])

  useEffect(() => {
    // When the search query changes, update the filtered list of hotels
    const filteredList = allOffers.filter((offer) =>
      offer.offerRate.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOffers(filteredList);
  }, [searchQuery, allOffers]);

  const getRateImage = (rate) => {
    const matchingRate = rates.find((r) => r.rate === rate);
    return matchingRate ? matchingRate.image : null;
  };

  useFocusEffect(
    useCallback(() => {
      // This effect will run every time the screen comes into focus
      fetchOffers(); // Refresh the data
    }, [])
  );

  const fetchOffers = () => {
    axios.get('http://192.168.43.9:3000/offers')
      .then(response => {
        setAllOffers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const Card = ({ offer}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('OfferDetails', { ...offer, allOffers, image: getRateImage(offer.offerRate) })}>
      <View style={style.card}>
      <View style={style.cardContent}>
        <View style={style.imageContainer}>
          <Image source={getRateImage(offer.offerRate)} style={style.cardImage} />
        </View>
        <View style={style.cardDetails}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{offer.offerTitle}</Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>{offer.offerCategory}</Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>{offer.offerRate}</Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>
          {`Start Date - ${offer.startDate ? formatDate(offer.startDate) : 'N/A'}`}
          </Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>
          {`End Date - ${offer.endDate ? formatDate(offer.endDate) : 'N/A'}`}
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={style.header}>
        <View style={style.headerTextContainer}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Your <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.blue }}>
              Offers
            </Text>
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("AddOffersScreen1")} style={style.submitBtn}>
            <Text style={style.submitText}>
              Add Offers
            </Text>
          </TouchableOpacity>
        </View>
          {/* <TouchableOpacity onPress={() => navigation.navigate("HotelBookingList")}>
            <Icon name="person-outline"  size={38} color={COLORS.grey} />
          </TouchableOpacity> */}
        </View>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={30} style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Search"
            style={{ fontSize: 20, paddingLeft: 10 }}
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
        </View>
        <View style={style.cardContainer}>
        <FlatList
          data={filteredOffers} // Use the filtered list of hotels
          numColumns={1}
          keyExtractor={(item) => (item._id ? item._id.toString() : Math.random().toString())}
          renderItem={({ item }) => <Card offer={item} />}
          contentContainerStyle={style.flatListContainer}
        />
        </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  card: {
    // flex: 1,
    elevation: 5,
    margin: 10,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    borderBottomWidth: 4, // Border bottom width
    borderBottomColor: COLORS.blue, // Border bottom color
  },
  imageContainer: {
    width: cardWidth * 0.6, // Adjust the width as needed
    // borderRadius: 15,
    // overflow: 'hidden',
  },
  cardImage: {
    height: 120,
    width: '100%',
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    margin: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: COLORS.blue
  },
  cardDetails: {
    padding: 20,
    flex: 1,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  submitBtn: {
    backgroundColor: COLORS.blue,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    width: '40%',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
},
submitText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
},
headerTextContainer : {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

});

export default OffersHome;
