import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors'

export default function StartupRegistrationPage1({ navigation }) {

    const[businessName, setBusinessName] = useState('')
    const[contactNo, setContactNo] = useState('')
    const[email, setEmail] = useState('')
    const [address, setAddress] = useState('');

    const [businessNameError, setBusinessNameError] = useState(false);
    const [contactNoError, setContactNoError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [addressError, setAddressError] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
      };
   
    const handleBusinessNameChange = (text) => {
        setBusinessName(text);
        setBusinessNameError(false);
      };
    
      const handleContactNoChange = (text) => {
        setContactNo(text);
        setContactNoError(false);
      };
    
      const handleEmailChange = (text) => {
        setEmail(text);
        setEmailError(false);
      };
      const handleAddressChange = (text) => {
        setAddress(text);
        setAddressError(false);
      };
    

      const handleNavigation = () => {
        let isValid = true;
    
        if (!businessName) {
          setBusinessNameError(true);
          isValid = false;
        }
    
        if (!contactNo) {
          setContactNoError(true);
          isValid = false;
        }
    
        if (!email) {
            setEmailError(true);
            isValid = false;
          } else if (!validateEmail(email)) {
            setEmailError(true);
            isValid = false;
          }
    
        if (!address) {
          setAddressError(true);
          isValid = false;
        }
    
        if (isValid) {
          navigation.navigate('StartupRegistrationPage2');
        }
      };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Business Information</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Name of the Business</Text>
                    <TextInput
                        style={[styles.inputBox, businessNameError && styles.inputError]}
                        placeholder="Enter Business Name"
                        value={businessName}
                        onChangeText={handleBusinessNameChange}
                    />
                     {businessNameError && (
                        <Text style={styles.errorMessage}>Please Enter Enter Name of the Business</Text>
                    )}
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Business Contact-No</Text>
                    <TextInput
                        style={[styles.inputBox, contactNoError && styles.inputError]}
                        placeholder="Enter Driver Email"
                        value={contactNo}
                        onChangeText={handleContactNoChange}
                    />
                    {contactNoError && (
                        <Text style={styles.errorMessage}>Please Enter Business Contact-No</Text>
                    )}
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Business Email</Text>
                    <TextInput
                        style={[styles.inputBox, emailError && styles.inputError]}
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                    {emailError && (
                        <Text style={styles.errorMessage}>Please Entera valid Business Email</Text>
                    )}
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Address of the Business</Text>
                    <TextInput
                        style={[styles.inputBox, addressError && styles.inputError, { height: 120, textAlignVertical: 'top'}]}
                        placeholder="Enter Address"
                        value={address}
                        onChangeText={handleAddressChange}
                        multiline={true}
                    />
                    {addressError && (
                        <Text style={styles.errorMessage}>Please Enter Address of the Business</Text>
                    )}
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
        fontWeight: 'bold',
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
    inputLabel: {
        fontSize: 18,
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
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
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