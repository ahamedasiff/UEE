import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import COLORS from '../consts/colors'
import categories from '../consts/category'
import rates from '../consts/rates'
import { Picker } from '@react-native-picker/picker'
import StartUpModelPopup from './StartUpModalPopup';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Image } from 'react-native'
import axios from 'axios'

export default function AddOffersScreen1({ navigation }) {

    const[offerTitle, setofferTitle] = useState('')
    const[offerCategory, setOfferCategory] = useState('')
    const[offerRate, setOfferRate] = useState('')
    const [offerDescription, setOfferDescription] = useState('');
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());
    const[showDatePicker, setShowDatePicker] = useState(null)
    const [visible, setVisble] = useState(false)

    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [titleErrorMessage, setTitleErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [startDateError, setStartDateError] = useState(false);
    const [endDateError, setEndDateError] = useState(false);

    const handleofferTitleChange = (text) => {
        setofferTitle(text);
    };

    const handleOfferCategoryChange = (text) => {
        setOfferCategory(text);
    };

    const handleOfferRateChange = (rates) => {
        setOfferRate(rates);
    };
    const handleOfferDescriptionChange = (category) => {
        setOfferDescription(category);
    };

    const handleNavigation = () => {
        navigation.navigate("AddOffersScreen2")
    }

    const handleDateChange = (event, selectedDate) => {
        if (event.type === 'set' && selectedDate) {
            if (showDatePicker === 'startDate') {
                setStartDate(selectedDate);
                setStartDateError(false); // Reset error when the date is changed
            } else if (showDatePicker === 'endDate') {
                setEndDate(selectedDate);
                setEndDateError(false); // Reset error when the date is changed
            }
            setShowDatePicker(null);
        }
    }
    const showStartDatePicker = () => {
        setShowDatePicker('startDate')
    }

    const showEndDatePicker = () => {
        setShowDatePicker('endDate')
    }

    useEffect(() => {
        if (startDate > endDate) {
            setStartDateError(true);
            // setEndDateError(true)
        } else {
            setStartDateError(false);
            // setEndDateError(false)
        }
    }, [startDate, endDate]);

    // const handleOfferInsert = async () => {
    //     const newOffer = {
    //         offerTitle,
    //         offerCategory,
    //         offerRate,
    //         startDate: startDate.toDateString(),
    //         endDate: endDate.toDateString(),
    //         offerDescription
    //     }

    //     try {
    //         await axios.post('http://192.168.43.9:3000/offer', newOffer);
    //         console.log('Offer Added Successfully')
    //         setVisble(true)
    //     } catch (error) {
    //         console.error('Error Insert offer:', error);
    //     }
    // }
    const handleOfferInsert = async () => {
        // Validate offerTitle and offerDescription
        if (!offerTitle) {
            setTitleError(true);
            setTitleErrorMessage('Enter a Offer Title');
        } else {
            setTitleError(false);
            setTitleErrorMessage('');
        }

        if (!offerDescription) {
            setDescriptionError(true);
            setDescriptionErrorMessage('Enter Offer Description');
        } else {
            setDescriptionError(false);
            setDescriptionErrorMessage('');
        }

        // Check if there are any validation errors
        if (offerTitle && offerDescription) {
            const newOffer = {
                offerTitle,
                offerCategory,
                offerRate,
                startDate: startDate.toDateString(),
                endDate: endDate.toDateString(),
                offerDescription,
            };

            try {
                await axios.post('http://192.168.43.9:3000/offer', newOffer);
                console.log('Offer Added Successfully');
                setVisble(true);
            } catch (error) {
                console.error('Error Insert offer:', error);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Offer Details</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Offer Title</Text>
                    <TextInput
                        style={[styles.inputBox, titleError && styles.inputError]} // Apply inputError style on validation error
                        placeholder="Enter Offer Name"
                        value={offerTitle}
                        onChangeText={handleofferTitleChange}
                    />
                </View>
                {titleError && <Text style={styles.errorMessage}>{titleErrorMessage}</Text>}
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Offer Category</Text>
                    <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue = {offerCategory}
                        onValueChange = {handleOfferCategoryChange}
                    >
                        {categories.map((category) => (
                            <Picker.Item key={category.id} label={category.place} value={category.place} />
                        ))}
                    </Picker>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Offer Rate</Text>
                    <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue = {offerRate}
                        onValueChange = {handleOfferRateChange}
                    >
                        {rates.map((item) => (
                            <Picker.Item key={item.id} label={item.rate} value={item.rate} />
                        ))}
                    </Picker>
                    </View>
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Start Date</Text>
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
                            style={[
                                styles.inputBox,
                                startDateError && styles.inputError
                            ]}
                            placeholder="Enter Offer Start Date"
                            value={startDate.toDateString()}
                            editable={false}
                        />
                    </Pressable>
                    {startDateError && <Text style={styles.errorMessage}>Start date cannot be after end date</Text>}
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
                            style={[
                                styles.inputBox,
                                endDateError && styles.inputError
                            ]}
                            placeholder="Enter Offer End Date"
                            value={endDate.toDateString()}
                            editable={false}
                        />
                    </Pressable>
                    {endDateError && <Text style={styles.errorMessage}>End date cannot be before start date</Text>}
                    
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Offer Description</Text>
                    <TextInput
                        style={[styles.inputBox, descriptionError && styles.inputError, { height: 120, textAlignVertical: 'top'}]}
                        placeholder="Enter Offer Description"
                        value={offerDescription}
                        onChangeText={handleOfferDescriptionChange}
                        multiline={true}
                    />
                </View>
                {descriptionError && <Text style={styles.errorMessage}>{descriptionErrorMessage}</Text>}
               
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
                        Your Offer Has Been Successfully Added!
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.confirmButton, { backgroundColor: COLORS.blue }]}
                            onPress={() => navigation.navigate("StartUpDashboard")}
                        >
                            <Text style={styles.buttonText}>Home</Text>
                        </TouchableOpacity> 
                    </View>
                </StartUpModelPopup>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity onPress={handleOfferInsert} style={styles.submitBtn}>
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
        fontWeight: 'normal',
        fontSize: 30,
        textDecorationLine: 'underline'
    },
    fieldContainer: {
        flex: 1,
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
    picker: {
        height: 40, // Adjust the height as needed
        color: COLORS.dark, // Text color
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
        marginTop: 10,
        width: '100%',
        alignSelf: 'flex-end'
    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
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
        borderColor: COLORS.cancel,
    },
    errorMessage: {
        color: COLORS.cancel,
        fontSize: 14,
        // marginTop: 2,
        marginLeft: 15,
        fontWeight: 'bold'
    },
})