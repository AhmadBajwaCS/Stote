import React, {useState} from 'react';
import { TouchableOpacity, Modal, Keyboard, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import ClassComponent from '../../components/ClassComponent';
import CustomDialog from '../../components/CustomDialog';

const ClassesOverview = () => {
    const [classItem, setClassItem] = useState();
    const [classList, setClassList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleAddClass = (userInput) => {
        console.log(userInput);
        //set text for new class button
        setClassItem(userInput);

        //create new class button
        setClassList(prevState => [...prevState, userInput])
        //setClassItem(null);
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
            <View>
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