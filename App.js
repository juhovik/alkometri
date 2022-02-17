import React, {useState} from 'react';
import { Text, View, Button, TextInput, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import styles from './style/Style';

export default function App() {
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState("");
  const [time, setTime] = useState(1);
  const [alcLevel, setAlcLevel] = useState(0);
  const [gender, setGender] = useState("male")

  const bottlesArray = [
    {label: '1 bottle', value: 1},
    {label: '2 bottles', value: 2},
    {label: '3 bottles', value: 3},
    {label: '4 bottles', value: 4},
    {label: '5 bottles', value: 5},
    {label: '6 bottles', value: 6},
    {label: '7 bottles', value: 7},
    {label: '8 bottles', value: 8},
    {label: '9 bottles', value: 9},
    {label: '10 bottles', value: 10},
    {label: '11 bottles', value: 11},
    {label: '12 bottles', value: 12}
  ];

  const timeArray = [
    {label: '1 hour', value: 1},
    {label: '2 hours', value: 2},
    {label: '3 hours', value: 3},
    {label: '4 hours', value: 4},
    {label: '5 hours', value: 5},
    {label: '6 hours', value: 6},
    {label: '7 hours', value: 7},
    {label: '8 hours', value: 8},
    {label: '9 hours', value: 9},
    {label: '10 hours', value: 10},
    {label: '11 hours', value: 11},
    {label: '12 hours', value: 12}
  ];

  const genders = [
    {label: 'male', value: 'male'},
    {label: 'female', value: 'female'}
  ]

  function calculate() {    

    if (isNaN(weight) || weight <= 0) {
        return Alert.alert(
          "Weight field is empty, zero or negative number",
          "You need to write something in the Weight field",
          [
            {
              text: "OK",
              onPress: () => console.log("Ok pressed")
            }
          ]
        );
    }
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let result = 0;

    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    }
    else {
      result = gramsLeft / (weight * 0.6);
    }
    setAlcLevel(Math.max(0, result));
  }

  const getColor = () => {
    let color;
    if (alcLevel === 0.00) {
      color = "black";
    } else if (alcLevel > 0 && alcLevel < 0.3) {
      color = "green"
    } else if (alcLevel >= 0.3 && alcLevel < 1) {
      color = "yellow"
    } else {
      color = "red"
    }
    return color;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alcometer</Text>
      <Text style={styles.title}>Weight</Text>
      <TextInput style={{margin: 5}} value={weight} onChangeText={text => setWeight(text)} keyboard-type="number-pad"></TextInput>

      <Text style={styles.title}>Bottles</Text>

      <Picker
        style={{margin: 5}}
        onValueChange={(itemValue) => setBottles(itemValue)}
        selectedValue={bottles}
        >
          {bottlesArray.map((bottles,index) => (
            <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
          ))
        }
      </Picker>

    <Text style={styles.title}>Time</Text>

    <Picker
    style={{margin: 5}}
    onValueChange={(itemValue) => setTime(itemValue)}
    selectedValue={time}
    >
    {timeArray.map((time,index) => (
    <Picker.Item key={index} label={time.label} value={time.value}/>
      ))
      }
    </Picker>
      <Text style={styles.title}>Gender</Text>
      <RadioForm
        style = {{margin: 5}}
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
      />
      <Text style={{fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    margin: 20,color: getColor()}}>{alcLevel.toFixed(2)}</Text>
        <Button style={styles.button} onPress={calculate} title="Calculate"></Button>
    </View>
  );
}
