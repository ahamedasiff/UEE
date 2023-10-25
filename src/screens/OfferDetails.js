import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('screen');

const OfferDetails = ({navigation, route}) => {
  const item = route.params;

  // const handleBookNow = () => {
  //   navigation.navigate('HotelBooking', {hotel: item})
  // }

  // const handleRoomType = () => {
  //   navigation.navigate("Rooms", {hotel: item})
  // }

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
        <View style={style.header}>
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
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.title}</Text>
          <Text style={{fontSize: 20, fontWeight: '600', color: COLORS.dark, marginTop: 5}}>{item.category}</Text>
          <Text style={{fontSize: 20, fontWeight: '600', color: COLORS.dark, marginTop: 5}}>{item.rate}</Text>
          
          <View style={{marginTop: 10, marginBottom: 10}}>
          <Text style={{lineHeight: 20, color: COLORS.dark, fontSize: 17}}>
              {item.description}
            </Text>
          </View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.dark, marginTop: 5}}>{`Start Date - ${item.startdate}`}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.dark, marginTop: 5}}>{`End Date - ${item.endDate}`}</Text>

        </View>
        
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 15 }}>
          <TouchableOpacity style={style.btn}>
          <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnCancel}>
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
  header: {
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
});

export default OfferDetails;