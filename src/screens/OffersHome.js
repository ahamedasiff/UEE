import React, { useState, useEffect} from 'react';
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


const { width } = Dimensions.get('screen');
const cardWidth = width / 2.2;

const OffersHome = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState(offers);

  useEffect(() => {
    // When the search query changes, update the filtered list of hotels
    const filteredList = offers.filter((offer) =>
      offer.rate.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHotels(filteredList);
  }, [searchQuery]);

  const getRateImage = (rate) => {
    const matchingRate = rates.find((r) => r.rate === rate);
    return matchingRate ? matchingRate.image : null;
  };

  const Card = ({ offer}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('OfferDetails', { ...offer, image: getRateImage(offer.rate) })}>
      <View style={style.card}>
      <View style={style.cardContent}>
        <View style={style.imageContainer}>
          <Image source={getRateImage(offer.rate)} style={style.cardImage} />
        </View>
        <View style={style.cardDetails}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{offer.title}</Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>{offer.category}</Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>{offer.rate}</Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>
            {`Start Date - ${offer.startdate}`}
          </Text>
          <Text style={{ color: COLORS.dark, fontSize: 16 }}>
            {`End Date - ${offer.endDate}`}
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
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Your <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}>
              Offers
            </Text>
          </Text>
          <View style={{ flexDirection: 'row' }}>            
          </View>
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
          data={filteredHotels} // Use the filtered list of hotels
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
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

});

export default OffersHome;
