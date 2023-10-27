import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import StartUpModelPopup from './StartUpModalPopup';
import axios from 'axios';


const { height } = Dimensions.get('screen');

const OfferDetails = ({navigation, route}) => {
  const item = route.params;
  const [visible, setVisble] = useState(false)

  // const handleBookNow = () => {
  //   navigation.navigate('HotelBooking', {hotel: item})
  // }

  // const handleRoomType = () => {
  //   navigation.navigate("Rooms", {hotel: item})
  // }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleUpdateOffer = () => {
    navigation.navigate("UpdateOffersScreen", item 
    // {
    //   offerData: {
    //     offerTitle: item.offerTitle,
    //     offerCategory: item.offerCategory,
    //     offerRate: item.offerRate,
    //     offerDescription: item.offerDescription,
    //     startDate: item.startDate,
    //     endDate: item.endDate,
    //   },
    //   // route: route, // Pass the route prop
    // }
    )
  }

  const deleteOffer = async (id) => {
    try {
      await axios.delete(`http://192.168.43.9:3000/offer/${id}`)
      console.log('Offer Deleted Successfully');
      navigation.navigate("OffersHome")
    } catch (error) {
      console.error('Error:Error occurred while deleting the details', error);
    }
  }

  return (
    <SafeAreaView>
    <ScrollView
    showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}> 
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
        <View style={style.headerBack}>
        <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.dark}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>
      <View>
        <View style={{marginTop:20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.offerTitle}</Text>
          <Text style={{fontSize: 20, fontWeight: '600', color: COLORS.dark, marginTop: 5}}>{item.offerCategory}</Text>
          <Text style={{fontSize: 20, fontWeight: '600', color: COLORS.dark, marginTop: 5}}>{item.offerRate}</Text>
          
          <View style={{marginTop: 10, marginBottom: 10}}>
          <Text style={{lineHeight: 20, color: COLORS.dark, fontSize: 17}}>
              {item.offerDescription}
            </Text>
          </View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.dark, marginTop: 5}}>
          {`Start Date - ${item.startDate ? formatDate(item.startDate) : 'N/A'}`}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.dark, marginTop: 5}}>
          {`End Date - ${item.endDate ? formatDate(item.endDate) : 'N/A'}`}

          </Text>

        </View>
        <StartUpModelPopup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={style.header}>
              <TouchableOpacity onPress={() => setVisble(false)}>
                <Image source={require('../assets/close.png')} style={{height: 30, width:30}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image 
              source={require('../assets/delete.png')} 
              style={{height: 150, width: 150, marginVertical: 10}}
            />
          </View>
                    
          <Text style={{marginVertical: 20, fontSize: 20, textAlign: 'center'}}>
            Are You Sure You Want To Delete This Offer?
          </Text>
          <View style={style.buttonContainer}>
                <TouchableOpacity
                  style={[style.confirmButton, { backgroundColor: COLORS.cancel }]}
                  onPress={() => deleteOffer(item._id)}
                >
                  <Text style={style.buttonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[style.confirmButton, { backgroundColor: COLORS.blue }]}
                  onPress={() => setVisble(false)}
                >
                  <Text style={style.buttonText}>Cancel</Text>
                </TouchableOpacity>
          </View>
        </StartUpModelPopup>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 15 }}>
            <TouchableOpacity style={style.btn} onPress={handleUpdateOffer}>
              <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnCancel} onPress={() => setVisble(true)}>
              <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Delete</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.blue,
    marginHorizontal: 10,
    borderRadius: 10,
    bottom: 0,
    marginTop: 15
  },
  btnCancel: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.cancel,
    marginHorizontal: 10,
    borderRadius: 10,
    bottom: 0,
    marginTop: 15
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
    borderBottomWidth: 4, // Border bottom width
    borderBottomColor: COLORS.blue, // Border bottom color
  },
  headerBack: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  roomTypesContainer: {
    marginTop: 15,
    padding: 5,
    borderWidth: 1,             // Add border width
    borderColor: COLORS.primary, // Add border color
    borderRadius: 10,
    textAlign: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  viewRoomTypesText: {
    fontSize: 16,
    marginLeft: 5,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  confirmButton: {
    padding: 10,
    borderRadius: 8,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OfferDetails;