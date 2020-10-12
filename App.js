import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import
 { StyleSheet,
   Text, View , 
   Button, 
   TextInput, 
   ScrollView
  } from 'react-native';
  
  import GoalItem from './components/GoalItem'
  import GoalInput from './components/GoalInput'


export default function App() {
 
 const [courseGoal, setCourseGoal] = useState([])
 
 
 const addGoalHandler = (goalTitle) =>{
  setCourseGoal(currentGoal => [...currentGoal, goalTitle])
 }

  return (
    <ScrollView  style={{width: "100%"}}> 
   
    <View style={styles.screen}>
    <GoalInput onAddGoal={addGoalHandler}/>
       {courseGoal.map(goal => <GoalItem onDelete={() => console.log('Does this work?')} title={goal} />)}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    screen:{
      padding: 50,
     
    },
   
});
