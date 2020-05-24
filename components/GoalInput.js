import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }

    

    return (
      <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
          <Text style={styles.newGoalText}>Add a new goal</Text>
          <TextInput placeholder="Course goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
            <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
          </View>
        </View>
      </Modal>
        )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        padding: 10
      },
      textInput: {
        width: '80%',
        borderBottomColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      button: {
        width: '40%'
      },
      newGoalText: {
        fontSize: 28
      }
})

export default GoalInput;