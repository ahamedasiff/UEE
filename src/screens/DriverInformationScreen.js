import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors'

export default function DriverInformationScreen({ navigation }) {


    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleRegistrationNumber, setvehicleRegistrationNumber] = useState('');
    const [vehiclePlateNumber, setVehiclePlateNumber] = useState('');
    const [vehicleInsurance, setVehicleInsurance] = useState('');

    const handleVehicleMakeChange = (text) => {
        setVehicleMake(text);
    };
    const handleVehicleModelChange = (text) => {
        setVehicleModel(text);
    };
    const handleVehicleYearChange = (text) => {
        setVehicleYear(text);
    };
    const handleVehicleRegistrationNumberChange = (text) => {
        setvehicleRegistrationNumber(text);
    };
    const handleVehiclePlateNumberChange = (text) => {
        setVehiclePlateNumber(text);
    };
    const handleVehicleInsuranceChange = (text) => {
        setVehicleInsurance(text);
    };

    const handleNavigation = () => {
        navigation.navigate("InitialPage")
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.innercontainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Driver Information</Text>
                    <Text style={styles.smallText}>For Driver or vehicle owner</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Name</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Name"
                        value={vehicleMake}
                        onChangeText={handleVehicleMakeChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Email</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Email"
                        value={vehicleModel}
                        onChangeText={handleVehicleModelChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Driver Full Name</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Driver Full Name"
                        value={vehicleYear}
                        onChangeText={handleVehicleYearChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Mobile Number</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Mobile Number"
                        value={vehicleRegistrationNumber}
                        onChangeText={handleVehicleRegistrationNumberChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Date Of Birth</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Plate Number"
                        value={vehiclePlateNumber}
                        onChangeText={handleVehiclePlateNumberChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>National Identity Card No</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter National Identity Card No"
                        value={vehicleInsurance}
                        onChangeText={handleVehicleInsuranceChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Address</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Address"
                        value={vehicleInsurance}
                        onChangeText={handleVehicleInsuranceChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Emergency Contact</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Emergency Contact"
                        value={vehicleInsurance}
                        onChangeText={handleVehicleInsuranceChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.inputLabel}>Select Gender</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Enter Gender"
                        value={vehicleInsurance}
                        onChangeText={handleVehicleInsuranceChange}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <TouchableOpacity style={styles.submitBtn} onPress={handleNavigation}>
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
    },
    innercontainer: {
        flex: 1,
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
        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
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
        borderColor: COLORS.primary
    },
    submitBtn: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 10,
    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
    }
})