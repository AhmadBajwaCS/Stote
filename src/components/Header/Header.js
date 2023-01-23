import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Hamburger from '../../../assets/images/hamburgerIcon.png';
import LogoutIcon from '../../../assets/images/logoutIcon.png'

const Header = () => {
    return (
        <View style={styles.container}>
            <CustomButton
                source = { Hamburger }
                type = "HEAD"
            >
            </CustomButton>
            <CustomButton
                source = { LogoutIcon }
                type = "HEAD"
            >
            </CustomButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10, 
        // backgroundColor: "#35a5c4", 
        marginBottom: 20, 
    },

});

export default Header;