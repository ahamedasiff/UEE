import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Modal, Image, Animated } from 'react-native'
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Picker } from '@react-native-picker/picker';
import districts from '../consts/district'
import DateTimePicker from '@react-native-community/datetimepicker';
import StartUpModelPopup from './StartUpModalPopup';

export default function StartupRegistrationPage2({ navigation }) {

    const[registeredOffice, setRegisteredOffice] = useState('');
    const[registeredDistrict, setRegisteredDistrict] = useState('');
    const[registeredDate, setRegisteredDate] = useState(new Date());
    const[showDatePicker, setShowDatePicker] = useState(null)
    const [visible, setVisble] = useState(false)

    const [registeredOfficeError, setRegisteredOfficeError] = useState(false);

   
    const handleRegisteredOfficeChange = (text) => {
        setRegisteredOffice(text);
        setRegisteredOfficeError(false)
    };

    const handleRegisteredDistrictChange = (text) => {
        setRegisteredDistrict(text);
    };

    const handleRegisteredDateChange = (district) => {
        setRegisteredDate(district);
    };
    // const handleAddressChange = (text) => {
    //     setAddress(text);
    // };

    const handleDateChange = (event, selectedDate) => {
        if(event.type === 'set' && selectedDate) {
            if(showDatePicker === 'registeredDate') {
                setRegisteredDate(selectedDate)
            }
            setShowDatePicker(null)
        }
    }

    const showRegisteredDatePicker = () => {
        setShowDatePicker('registeredDate')
    }

    const handleNavigation = () => {
        let isValid = true

        if(!registeredOffice){
            setRegisteredOfficeError(true)
            isValid = false
        }

        if (isValid) {
            setVisble(true)
            // return;
          }
      
          // Proceed with navigation to the next page
          
    }

   
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Business Registration Details</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Registered Office</Text>
                    <TextInput
                        style={[styles.inputBox, registeredOfficeError && styles.inputError]}
                        placeholder="Enter Registered Office"
                        value={registeredOffice}
                        onChangeText={handleRegisteredOfficeChange}
                    />
                    {registeredOfficeError && (
                        <Text style={styles.errorMessage}>Please Enter Registered</Text>
                    )}
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Regisered District</Text>
                    <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue = {registeredDistrict}
                        onValueChange = {handleRegisteredDistrictChange}
                    >
                        {districts.map((district) => (
                            <Picker.Item key={district.id} label={district.place} value={district.place} />
                        ))}
                    </Picker>
                    </View>
                    
                    {/* <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Regisered District"
                        value={registeredDistrict}
                        onChangeText={handleRegisteredDistrictChange}
                    /> */}
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Registered Date</Text>
                    {showDatePicker === 'registeredDate' && (
                        <DateTimePicker 
                            mode='date'
                            value={registeredDate}
                            onChange={handleDateChange}
                            maximumDate={new Date()}
                        />
                    )}
                    <Pressable onPress={showRegisteredDatePicker}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Enter Registered Date"
                            value={registeredDate.toDateString()}
                            editable={false}
                            // onChangeText={handleEndDateChange}
                        />
                    </Pressable>
        
                </View>
                
                 <View style={styles.fieldContainerUpload}>
                    <View style={styles.fieldBox}>
                        <Text style={styles.fieldBoxText}>Registration Certificate</Text>
                    </View>
                    <TouchableOpacity style={styles.fieldBtn} >
                        <Icon name="cloud-upload"  size={40} color={COLORS.blue} />
                    </TouchableOpacity>
                </View>
                <StartUpModelPopup visible={visible}>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => setVisble(false)}>
                                <Image source={require('../assets/close.png')} style={{height: 30, width:30}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/success.png')} 
                            style={{height: 150, width: 150, marginVertical: 10}}
                        />
                    </View>
                    
                    <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
                        Your Login Credendtials Will be Sent to Your Email After Verification
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.confirmButton, { backgroundColor: COLORS.blue }]}
                            onPress={() => {navigation.navigate("InitialPage")}}
                        >
                            <Text style={styles.buttonText}>Home</Text>
                        </TouchableOpacity> 
                 </View>
                </StartUpModelPopup>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity onPress={handleNavigation} style={styles.submitBtn}>
                    {/* <TouchableOpacity onPress={handleNavigation} style={styles.submitBtn}> */}
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
        textDecorationLine: 'underline',
    },
    fieldContainer: {
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    pickerContainer :{
        backgroundColor: 'transparent', // To make it look like it's not inside a container
        borderBottomWidth: 4,
        borderColor: COLORS.blue,
        borderRadius: 10,
        overflow: 'hidden', // To hide the default Picker border
        marginTop: 5,
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        // marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    fieldContainerUpload: {
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
    picker: {
        height: 40, // Adjust the height as needed
        color: COLORS.dark, // Text color
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
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputError: {
        borderWidth: 4,
        borderColor: COLORS.cancel, // Choose a color for error border
      },
      errorMessage: {
        color: COLORS.cancel,
        fontSize: 14,
        marginTop: 5,
        marginLeft: 10,
        fontWeight: 'bold',
      },
})