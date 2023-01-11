import React, {useState} from 'react';
import { TouchableOpacity, Keyboard, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import ClassAddButton from '../../components/ClassAddButton';
import ClassComponent from '../../components/ClassComponent';

const ClassesOverview = () => {
    const [classItem, setClass] = useState();
    const [classList, setClassList] = useState([]);
    const handleAddClass = () => {
        setClassList([...classList, classItem])
        if (classList.length > 3) { //for coding purposes max length of class list is 4
            setClassList([])
        }
    }
    const classInfo = () => {
        console.log("alert");
        Alert.prompt('Please Enter Class Name','', ({text}) => {handleAddClass(text)}, 'Class', ['Submit', 'Cancel']);
    }
    return(
        <View style={styles.wrapper}>
            <View style={styles.upperwrapper}>
                <View>
                    {
                    classList.map((item) => {
                      return <ClassComponent />
                      return <ClassComponent />
                    })
                    }
                </View>
            </View>
            <View style={styles.lowerwrapper}>
                <TouchableOpacity onPress={handleAddClass}>
                    <View style={styles.addbuttonwrapper}>
                        <Text style={styles.plus}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
    }

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
    },
    lowerwrapper:{
        position: 'absolute',
        flexDirection: 'row',
        bottom: 30,
        right: 30,
        //width: '100%',

    },
    addbuttonwrapper:{
        width: 60,
        height: 60,
        backgroundColor: '#A9CCC5',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plus:{

        fontSize: 40,
        //fontWeight: 'bold',
    }
});
export default ClassesOverview;