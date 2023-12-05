import { StatusBar } from 'expo-status-bar';
import { useState, React } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styleSheet from "./Styles/Styles";



export default function App() {

  return (
    <View style={styleSheet.container}>
      <SumView />
        </View>
  );
}

function SumView(){
  const [weight, setWeight] = useState("0");
  const [sum, setSum] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState("Male");
  const increaseBottles = () => { 
    setBottles(bottles + 1); 
  }; 
 
  const decreaseBottles = () => { 
    if (bottles>0) {
    setBottles(bottles - 1); 
    }
  }; 

  const increaseHours = () => { 
    setHours(hours + 1); 
  }; 
 
  const decreaseHours = () => { 
    if (hours>0) {
    setHours(hours - 1); 
    }
  }; 

  const calculate = () => {
    const litres = bottles*0.33;
    const grams = litres*8*4.5;
    const burning = weight/10;
    const gramsLeft = grams-burning*hours;
    let summ; 
    
      if (gender == "Male") {
          summ=(gramsLeft/(weight*0.7))
      }
      else if (gender == "Female") {
        summ=(gramsLeft/(weight*0.6))
    }
    console.log(summ)
    if (summ<0){
      summ= 0;
    }
    setSum(summ);
  }

  return (
    <View style={styleSheet.luvut}>
      <Text>Weight (Kg):</Text>
      <TextInput 
        style={styleSheet.text}
        keyboardType='number-pad' 
        value={weight} 
        onChangeText={event =>setWeight(event)}
      />
        <View style={styleSheet.button}>
            <Button onPress={increaseBottles} title= "    +    "></Button>
            <Text>{bottles + " Bottles"}</Text>
            <Button onPress={decreaseBottles} title= "    -     "></Button>
          </View>

          <View style={styleSheet.button}>
            <Button onPress={increaseHours} title= "    +    "></Button>
            <Text>{hours + " Hours"}</Text>
            <Button onPress={decreaseHours} title= "    -     "></Button>
            </View>

            <View style={styleSheet.raatio}>
        <Text>Male</Text>
        <RadioButton
        value="Male"
        status={ gender === 'Male' ? 'checked' : 'unchecked' }
        onPress={() => setGender('Male')}
      />
      </View>
      <View style={styleSheet.raatio}>
      <Text>Female</Text>
      <RadioButton
        value="Female"
        status={ gender === 'Female' ? 'checked' : 'unchecked' }
        onPress={() => setGender('Female')}
      />
</View>
      <Button onPress={calculate} title='Laske' />
      <Text>{sum.toFixed(2)}</Text>
    </View>
  );

 
  
}




