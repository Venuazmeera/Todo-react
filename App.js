import React, { useState } from 'react'; //this is a hook which name is use state
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, YellowBox, TextInput, FlatList, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import  Header  from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'by my coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'}

  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) =>{

    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },//here the math gives a num to object
          ...prevTodos // this will take every thing inside useState array 
        ]
      })
    }else{
      //alert message
      Alert.alert('OOPS!', 'Task name must be over 3 charectors long',[
      {text: 'understod', onPress: () => console.log('alert closed')}
      ])
    }
   
  }
  
  return (
    // <Sandbox />
   <TouchableWithoutFeedback onPress={() =>{
    Keyboard.dismiss();//this will dismiss key board if press anyware
    console.log('dismiss keyBoard')
   }}>
     <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to do form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
            data={todos}
            renderItem={({ item }) =>(
             <TodoItem item={item} pressHandler = {pressHandler} />
            )}
            />  
          </View>
        </View>
    </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  content:{
    padding: 40,
    backgroundColor: 'grey',
    flex: 1,
  },
  list:{
    marginTop: 20,
    // backgroundColor: 'white',
    flex: 1
  }
 
});





// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, YellowBox } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//      <View style={styles.header}>
//       <Text style={styles.boldText}>hello world!</Text>
//      </View >
//      <View style={styles.body}>
//       <Text>lorem ipsum dolor sit amet.</Text>
//       <Text>lorem ipsum dolor sit amet.</Text>
//       <Text>lorem ipsum dolor sit amet.</Text>
//      </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header:{
//     backgroundColor: 'pink',
//     padding: 20
//   },
//   boldText:{
//     fontWeight:'bold',
//   },
//   body:{
//     backgroundColor: 'yellow'
//   }
// });


//use state
// import React, { useState } from 'react'; //this is a hook which name is use state
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, YellowBox, Button } from 'react-native';

// export default function App() {
//   const [name, setName] = useState('siddu');//this will set name here
//   // we can change the name up here and use it every where after name
//   const [person, setPerson] =useState({ name: 'mario', age: 40 });// multipul use state

//   // function for button
//   // when i press this button the setName is called up here
//   const clickHandler = () =>{
//     setName("Rajesh");
//     setPerson({ name: 'hello', age: 50 }); //multipul usestate
//   }
//   return (
//     <View style={styles.container}>
//       {/* use it here in the curly braces */}
//       <Text>my name is {name}</Text>
//       <Text>his name is {person.name} and his age is {person.age}</Text>
//       <View style={styles.buttonContainer}>
//         {/* down here i'm giving onPress press property in that 
//         i am calling clickHandler function*/}
//         <Button title='update state' onPress={clickHandler} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer:{
//     backgroundColor: "blue",
//     marginTop: 20
//   }
 
// });


//inputs
// import React, { useState } from 'react'; //this is a hook which name is use state
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, YellowBox, TextInput } from 'react-native';

// export default function App() {
//   const [name, setName] = useState('Venu');//this will set name here
//   // we can change the name up here and use it every where after name
//   const [age, setAge] =useState('27');// multipul use state

//   //function for button
//   //when i press this button the setName is called up here
  
//   return (
//     <View style={styles.container}>
//       {/* use it here in the curly braces */}
//       <Text>Enter name:{name}</Text>
//       <TextInput 
//       multiline

//       style={styles.input}
//       placeholder='e.g. John Doe'
//       //the value always change if we are typing
//       onChangeText={(val) => setName(val)}/>

//       <Text>Enter your age:{age}</Text>
//       <TextInput 
//       keyboardType='numeric'
//       style={styles.input}
//       placeholder='Number'
//       type="number" // Set the input type to "number"
//       //the value always change if we are typing
//       onChangeText={(val) => setAge(val)}/>


//       <Text> name: {name}, age:{age}</Text>
//       <View style={styles.buttonContainer}>
//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer:{
//     backgroundColor: "blue",
//     marginTop: 20
//   },
//   input:{
//     borderWidth: 1,
//     borderColor:"black",
//     padding: 8,
//     margin: 10,
//     width: 200
//   }
 
// });

//list scrolleble first method
// import React, { useState } from 'react'; //this is a hook which name is use state
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, YellowBox, TextInput, ScrollView } from 'react-native';

// export default function App() {
//   const [people, setPeople] =useState([
//     { name: 'shoun', key: '1'},
//     { name: 'venu', key: '2'},
//     { name: 'sravan', key: '3'},
//     { name: 'rahuk', key: '4'},
//     { name: 'siddu', key: '5'},
//     { name: 'sonu', key: '6'},
//     { name: 'sunil', key: '7'},
//     { name: 'sravan', key: '8'},
//     { name: 'rahuk', key: '9'},
//     { name: 'siddu', key: '10'},
//     { name: 'sonu', key: '11'},
//     { name: 'sunil', key: '12'},
   

//   ]);// multipul use state

//   //function for button
//   //when i press this button the setName is called up here
  
//   return (
//     <View style={styles.container}>
      
//     <ScrollView>
//     { people.map(item => (
//         <View key={item.key}>
//           <Text style={styles.item}>{ item.name }</Text>
//         </View>
      
//     ))}

//     </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item:{
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24
//   }
 
// });


//flat list component to show list 
//this is simpler way
// import React, { useState } from 'react'; //this is a hook which name is use state
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, YellowBox, TextInput, FlatList } from 'react-native';

// export default function App() {
//   const [people, setPeople] =useState([
//     { name: 'shoun', id: '1'},
//     { name: 'venu', id: '2'},
//     { name: 'sravan', id: '3'},
//     { name: 'rahuk', id: '4'},
//     { name: 'siddu', id: '5'},
//     { name: 'sonu', id: '6'},
//     { name: 'sunil', id: '7'},
//     { name: 'sravan', id: '8'},
//     { name: 'rahuk', id: '9'},
//     { name: 'siddu', id: '10'},
//     { name: 'sonu', id: '11'},
//     { name: 'sunil', id: '12'},
   

//   ]);// multipul use state

//   //function for button
//   //when i press this button the setName is called up here
  
//   return (
//     <View style={styles.container}>

//       <FlatList 
//       numColumns={2} // this will show the data in colomns insted of rows
//       keyExtractor={(item) => item.id} //the key extractor method is for
//       data={people}                    //id's if there is no keys but id
//       renderItem={({ item }) =>(
//         <Text style={styles.item}>{ item.name }</Text> 
//         )}
//       />

      
//     {/* <ScrollView>
//     { people.map(item => (
//         <View key={item.key}>
//           <Text style={styles.item}>{ item.name }</Text>
//         </View>
      
//     ))}

//     </ScrollView> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item:{
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop: 20
//   }
 
// });

//toucheble opacity
// import React, { useState } from 'react'; //this is a hook which name is use state
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, YellowBox, TextInput, FlatList, TouchableOpacity } from 'react-native';

// export default function App() {
//   const [people, setPeople] =useState([
//     { name: 'shoun', id: '1'},
//     { name: 'venu', id: '2'},
//     { name: 'sravan', id: '3'},
//     { name: 'rahuk', id: '4'},
//     { name: 'siddu', id: '5'},
//     { name: 'sonu', id: '6'},
//     { name: 'sunil', id: '7'},
//     { name: 'sravan', id: '8'},
//     { name: 'rahuk', id: '9'},
//     { name: 'siddu', id: '10'},
//     { name: 'sonu', id: '11'},
//     { name: 'sunil', id: '12'},
   

//   ]);// multipul use state

//     pressHandler = (id) =>{
//        console.log(id);
//        setPeople((prevPeople) => {
//         return prevPeople.filter(person => person.id != id)
//        })
//     }
  
//   return (
//     <View style={styles.container}>

//       <FlatList 
//       numColumns={2} // this will show the data in colomns insted of rows
//       keyExtractor={(item) => item.id} //the key extractor method is for
//       data={people}                    //id's if there is no keys but id
//       renderItem={({ item }) =>(
//         <TouchableOpacity onPress={() => pressHandler(item.id)}>
//           <Text style={styles.item}>{ item.name }</Text> 
//         </TouchableOpacity>
//         )}
//       />

      
//     {/* <ScrollView>
//     { people.map(item => (
//         <View key={item.key}>
//           <Text style={styles.item}>{ item.name }</Text>
//         </View>
      
//     ))}

//     </ScrollView> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item:{
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop: 20
//   }
 
// });


