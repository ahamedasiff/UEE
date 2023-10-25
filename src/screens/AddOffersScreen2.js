import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddOffersScreen2({ navigation }) {

    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());
    const[showDatePicker, setShowDatePicker] = useState(null)
   
    // const handletartDateChange = (text) => {
    //     setStartDate(text);
    // };

    // const handleEndDateChange = (text) => {
    //     setEndDate(text);
    // };

    const handleDateChange = (event, selectedDate) => {
        if(event.type === 'set' && selectedDate) {
            if(showDatePicker === 'startDate') {
                setStartDate(selectedDate)
            } else if (showDatePicker === 'endDate'){
                setEndDate(selectedDate)
            }
            setShowDatePicker(null)
        }
    }

    const showStartDatePicker = () => {
        setShowDatePicker('startDate')
    }

    const showEndDatePicker = () => {
        setShowDatePicker('endDate')
    }

    // const handleAddressChange = (text) => {
    //     setAddress(text);
    // };

    const handleNavigation = () => {
        navigation.navigate("OffersHome")
    }


   
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Offer Details</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Start Date</Text>
                    {/* <TextInput
                        style={styles.inputBox}
                        placeholder="Enter OFfer Start Date"
                        value={startDate}
                        onChangeText={handletartDateChange}
                    /> */}
                    {showDatePicker === 'startDate' && (
                        <DateTimePicker 
                            mode='date'
                            value={startDate}
                            onChange={handleDateChange}
                            minimumDate={new Date()}
                        />
                    )}
                    <Pressable onPress={showStartDatePicker}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter Offer Start Date"
                            value={startDate.toDateString()}
                            editable={false}
                            // onChangeText={handleEndDateChange}
                        />
                    </Pressable>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>End Date</Text>
                    {showDatePicker === 'endDate' && (
                        <DateTimePicker 
                            mode='date'
                            value={endDate}
                            onChange={handleDateChange}
                            minimumDate={new Date()}
                        />
                    )}
                    <Pressable onPress={showEndDatePicker}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter Offer End Date"
                            value={endDate.toDateString()}
                            editable={false}
                            // onChangeText={handleEndDateChange}
                        />
                    </Pressable>
                    
                </View>
                {/* <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Regisered Date</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Regisered Date"
                        value={registeredDate}
                        onChangeText={handleRegisteredDateChange}
                    />
                </View> */}
                {/* <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Address of the Business</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Address"
                        value={address}
                        onChangeText={handleAddressChange}
                    />
                </View>
                 */}
                 <View style={styles.fieldContainerUpload}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Photo / Flyer</Text>
                    </View>
                    <TouchableOpacity style={styles.fieldBtn} >
                        <Icon name="cloud-upload"  size={40} color={COLORS.blue} />
                    </TouchableOpacity>
                    </View>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity onPress={handleNavigation} style={styles.submitBtn}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      marginTop: 5,
      backgroundColor: 'white',
      padding: 10,
      justifyContent: 'space-between',
      flexDirection: 'column',
      // Add these styles to the outer container to push the button to the bottom
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: 20,
      marginBottom: 20,
    },
    titleView: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10
    },
    titleText: {
        color: COLORS.dark,
        fontWeight: 'bold',
        fontSize: 30,
        textDecorationLine: 'underline'
    },
    fieldContainer: {
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    fieldContainerUpload :{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 10,  
    },
    inputLabel: {
        fontSize: 15,
        padding: 5,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    inputBox: {
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        padding: 15,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderColor: COLORS.blue,
        color: COLORS.dark
    },
    submitBtn: {
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignSelf: 'flex-end'
    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    fieldBox: {
        flex: 0.825,
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        paddingTop: 16,
        paddingBottom: 17,
        paddingLeft: 20,
        marginTop: 5,
        marginRight: 5,
        borderRadius: 8,
        borderBottomWidth: 4,
        borderColor: COLORS.blue
      },
      fieldBtn: {
        flex: 0.175,
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 8,
        borderBottomWidth: 4,
        borderColor: COLORS.blue,
        alignItems: 'flex-start'
      },
      fieldBoxText: {
        fontSize: 20,
        fontWeight: 'bold'
      }
})