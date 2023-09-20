import React from 'react'; //this is a hook which name is use state
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.box1}>one</Text>
            <Text style={styles.box2}>two</Text>
            <Text style={styles.box3}>three</Text>
            <Text style={styles.box4}>four</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',// it will give a direction
        justifyContent: 'space-around', //how to put space in between
        alignItems: 'flex-end',//how set the boxes up or down
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    box1:{
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    box2:{
        flex: 2,
        backgroundColor: 'gold',
        padding: 20,
    },
    box3:{
        flex: 3,
        backgroundColor: 'coral',
        padding: 30,
    },
    box4:{
        flex: 4,
        backgroundColor: 'skyblue',
        padding: 40,
    }
});