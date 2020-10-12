import React from 'react'
import
 { StyleSheet,
   Text, View , 
   Button, 
   TextInput, 
   ScrollView,
   TouchableOpacity
} from 'react-native';

const GoalItem = props =>{
    return (
    
    <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.listItem}>
          <Text >{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor: '#ccc',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
        }
})

export default GoalItem;