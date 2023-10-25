import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors'
import categories from '../consts/category'
import rates from '../consts/rates'
import { Picker } from '@react-native-picker/picker'

export default function AddOffersScreen1({ navigation }) {

    const[offerTitle, setofferTitle] = useState('')
    const[offerCategory, setOfferCategory] = useState('')
    const[offerRate, setOfferRate] = useState('')
    const [offerDescription, setOfferDescription] = useState('');
   
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Offer Details</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Offer Title</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Offer Name"
                        value={offerTitle}
                        onChangeText={handleofferTitleChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Offer Category</Text>
                    {/* <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Offer Category"
                        value={offerCategory}
                        onChangeText={handleOfferCategoryChange}
                    /> */}
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
                    
                    {/* <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Offer Rate"
                        value={offerRate}
                        onChangeText={handleOfferRateChange}
                    /> */}
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
                    <Text style={styles.inputLabel}>Offer Description</Text>
                    <TextInput
                        style={[styles.inputBox, { height: 120, textAlignVertical: 'top'}]}
                        placeholder="Enter Offer Description"
                        value={offerDescription}
                        onChangeText={handleOfferDescriptionChange}
                        multiline={true}
                    />
                </View>
                
                <View style={styles.fieldContainer}>
                    <TouchableOpacity onPress={handleNavigation} style={styles.submitBtn}>
                        <Text style={styles.submitText}>Next</Text>
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
        borderColor: COLORS.blue
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
    }
})