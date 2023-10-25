import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { TouchableOpacity } from 'react-native';

export default function DriverAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
      <View style={styles.innercontainer}>
        <View style={styles.titleView}> 
          <Text style={styles.titleText}>Driver Requirement</Text>
          <Text style={styles.smallText}>For Driver or vehicle owner</Text>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Driver Information</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('DriverInformation')}>
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Profile Photo</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn}>
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Bank Passbook</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn}>
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.titleView}>   
          <Text style={styles.titleText}>Vehicle Requirement</Text>
          <Text style={styles.smallText}>For Bike or Three wheel</Text>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Vehicle Information</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn} onPress={() => navigation.navigate('VehicleInformation')}>
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Vehicle Documents</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn} >
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldBoxText}>Vehicle Images</Text>
          </View>
          <TouchableOpacity style={styles.fieldBtn}>
            <Icon name="send"  size={40} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  innercontainer: {
    flex: 0.5,
    margin: 5,
    backgroundColor: 'white'
  },
  titleView: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10
  },
  titleText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 30
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
    marginLeft: 10,
  },
  fieldBox: {
    flex: 0.8,
    backgroundColor: 'rgba(217, 217, 217, 0.31)',
    paddingTop: 16,
    paddingBottom: 17,
    paddingLeft: 20,
    marginTop: 5,
    marginRight: 5,
    borderRadius: 8
  },
  fieldBtn: {
    flex: 0.2,
    backgroundColor: 'rgba(217, 217, 217, 0.31)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 8,
    borderBottomWidth: 4,
    borderColor: COLORS.primary,
  },
  fieldBoxText: {
    fontSize: 20,
    fontWeight: 'bold'
  }


});