import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    useColorScheme,
    useWindowDimensions
  } from 'react-native';
import Class from './src/components/Classes';
import { useNavigation } from '@react-navigation/native';

//List classes
//Add class button

const ClassesOverview = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    return(
        <View>
            
        </View>
    );
};

const styles = StyleSheet.create({
});
