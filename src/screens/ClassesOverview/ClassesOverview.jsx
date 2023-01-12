import React, {useState} from 'react';
import { TouchableOpacity, Modal, Keyboard, ScrollView, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Animated } from 'react-native';
import ClassComponent from '../../components/ClassComponent';
import CustomDialog from '../../components/CustomDialog';


const ClassesOverview = () => {

    const [classColors, setClassColors] = useState([]);
    const [classList, setClassList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAddClass = (userInput) => { //01/11/23 @deshpadmakumar
        if (userInput==""){
            userInput = "New Class"
        }
        /*Set text for new class button. Create new class button with setState forwarded. Set Modal to invisible again.*/
        //classColors.push(generateColor())
        setClassList(prevState => [...prevState, userInput])
        setClassColors(prevState => [...prevState, generateColor()])
        setIsModalVisible(false);

        if (classList.length > 3) { //for coding purposes max length of class list is 4
            setClassList([])
            setClassColors([])
        }
    }


    const generateColor = () => {
        const colorChoices = ["#C7FBFF", "#FFE0CE", "#C1FFB7", "#FFEEB4", "#E1C8FF", "#53058d", "#E5141A" ]

        console.log("\n colorChoices: " + colorChoices)
        console.log("classColors: " + classColors)
        const uniColors = colorChoices.filter(x => classColors.indexOf(x) == -1);
        console.log("uniColors: " + uniColors + " \n ")
        const randomNum = Math.floor(Math.random() * (uniColors.length))

        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');

        return uniColors[randomNum];
        // return `#${randomColor}`;
    };

    return(
        <View style={styles.wrapper}>

            <View style={styles.upperwrapper}>
                <View>{
                    classList.map((item, index) => {
                      return <ClassComponent key={index} text={item} classColor={classColors[index]}/>
                    })
                    }
                </View>
            </View>

            <View style={styles.modal}>
                <CustomDialog
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    //setClassItem={setClassItem}
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
        backgroundColor: '#222431',
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
        width: 75,
        height: 75,
        backgroundColor: '#3D7DDF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    plus:{
        fontSize: 40,
        color: 'white'
        //fontWeight: 'bold',
    }
});
export default ClassesOverview;