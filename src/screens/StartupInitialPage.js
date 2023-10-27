import { View, Text, StyleSheet, Pressable, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'


const StartupInitialPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="rgba(0,0,0,0)"
            />
                <ImageBackground
                    style={style.headerImage}
                    source={require('../assets/startup.jpeg')}
                >
                    <View style={style.textContainer}>
                        <View style={style.textRight}>
                            <Text style={style.textHeading1}>Your Startup's</Text>
                            <Text style={style.textHeading1}>Best Friend</Text>
                        </View>
                        <Text style={style.textHeading}>Our Shopfinity App</Text>
                    </View>
                </ImageBackground>
                <View style={style.centeredContent}>
                <View style={{ marginVertical: 30  }}>
                    <View style={style.topCard}>
                        <View style={style.label}>
                            <Text style={style.labelText}>Let People Know What You</Text>
                            <Text style={style.labelText}>have to Offer Them</Text>
                        </View>
                    <TouchableOpacity
                            style={style.btn}
                            activeOpacity={0.7}
                            onPressOut={() => navigation.navigate('StartUpDashboard')}
                        >
                            <Text style={style.textStyle}>Add Your Deals</Text>
                        </TouchableOpacity>
  
                        <View style={style.labelRegister}>
                        <Text style={style.labelText}>Register Your Startup </Text>
                    
                        <TouchableOpacity onPress={() => navigation.navigate('StartupRegistrationPage1')}>
                            <Text style={[style.labelText, {color: COLORS.blue, textDecorationLine: 'underline'}]}>Here</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </View>
                
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    headerImage: {
        height: 500,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        overflow: 'hidden',
        elevation: 25,
        shadowColor: 'blue'
    },
    textContainer: {
        position: 'absolute',
        bottom: 20, // Adjust the position as needed
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 24,
        color: COLORS.white,
    },
    label : {
        justifyContent: 'center',
        alignItems: 'center',
        color : COLORS.dark,
    },
    labelText: {
        fontSize: 24, // Adjust the font size as needed
        fontWeight: 'bold', // Make the text bold
        color: COLORS.dark,
    },
    labelRegister: {
        flexDirection: 'row'
    },
    textHeading1: {
        fontSize: 30,
        color: COLORS.white,
        marginLeft: 20
    },
    textHeading: {
        marginTop: 20,
        fontSize: 34,
        color: COLORS.blue,
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    textRight: {
        alignSelf: 'flex-end',
        marginRight: 30,
        alignItems: 'center'
    },
    btn: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 13,
        elevation: 15,
        backgroundColor: COLORS.blue
    },
    topCard: {
        height: 230,
        width: 300,
        justifyContent: 'center',     
    },
    centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default StartupInitialPage