import React, {useState} from 'react';
import { TouchableOpacity, Modal, Keyboard, ScrollView, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Animated } from 'react-native';
import ClassComponent from '../../components/ClassComponent';
import CustomDialog from '../../components/CustomDialog';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from '@react-navigation/native';


const ClassesOverview = () => {

    const [classColors, setClassColors] = useState([]);
    const [classList, setClassList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();

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

        const colorChoices = ["#C1FFB7", "#C7FBFF", "#FFE0CE", "#FFEEB4", "#C7D6FF", "#D9C7FF", "#EDC7FF" ]// Here are some potential colors
        const uniColors = colorChoices.filter(x => classColors.indexOf(x) == -1); // uniColors is an array of the colors that haven't been used already with other classes


        console.log("\n colorChoices: " + colorChoices)
        console.log("classColors: " + classColors)
        console.log("uniColors: " + uniColors + " \n ")

        const randomNum = Math.floor(Math.random() * (uniColors.length))  // get a random color from uniColors array

        //this is for getting a completely random color
        //const randomColor = Math.floor(Math.random() * 16777215)
            //.toString(16)
            //.padStart(6, '0');

        return uniColors[randomNum];
        //return `#${randomColor}`;   this is for getting a completely random color
    };

    const clickOnClass = (index) => {
        console.log(classList[index])
        navigation.navigate("ClassHomeScreen",
        {name: classList[index]});


    };

    return(
        <View style={styles.wrapper}>

            <View style={{ padding:30, backgroundColor: "#35a5c4", marginBottom: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 50, }}>
                <Text style={{  textAlign: 'center', color: 'white', fontSize: 20 }}>This is a placeholder header</Text>
            </View>

            <View style={styles.upperwrapper}>
{/*                 <TouchableOpacity onPress ={(clickOnClass)}> */}
                    <View>{

                        classList.map((item, index) => {
                          return(
                            <TouchableOpacity key = {index} onPress ={() => clickOnClass(index)}>
                                <ClassComponent key={index} text={item} classColor={classColors[index]} />
                            </TouchableOpacity>
                            )
//                           <ClassComponent key={index} text={item} classColor={classColors[index]} />

                        })
                        }
                    </View>
{/*                 </TouchableOpacity> */}
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