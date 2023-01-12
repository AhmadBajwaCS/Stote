import React, {useState} from 'react';
import { TouchableOpacity, Modal, Keyboard, ScrollView, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Animated } from 'react-native';
import ClassComponent from '../../components/ClassComponent';
import CustomDialog from '../../components/CustomDialog';

const ClassesOverview = () => {
    const [classItem, setClassItem] = useState();
    const [classList, setClassList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddClass = (userInput) => { //01/11/23 @deshpadmakumar
        console.log(userInput);
        if (userInput==""){
            userInput = "New Class"
        }
        /*Set text for new class button. Create new class button with setState forwarded. Set Modal to invisible again.*/
        setClassItem(userInput);
        setClassList(prevState => [...prevState, userInput])
        setIsModalVisible(false);
        if (classList.length > 3) { //for coding purposes max length of class list is 4
            setClassList([])
        }
    }
    return(
        <View style={styles.wrapper}>
            <View style={styles.upperwrapper}>
                <View>{
                    classList.map((item, index) => {
                      return <ClassComponent key={index} text={item}/>
                    })
                    }
                </View>
            </View>
            <View style={styles.modal}>
                <CustomDialog
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    setClassItem={setClassItem}
                    onSubmit={handleAddClass}
                />
            </View>
            <View style={styles.lowerwrapper}>

                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                    <View style={styles.addbuttonwrapper}>
                        <Text style={styles.plus}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
    },
    modal:{
        flex: 1,
        justifyContent: 'center',
        top: 100,


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