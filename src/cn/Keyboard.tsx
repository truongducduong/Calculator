import Button from "./Button";
import * as React from "react";
import { Text, View } from 'react-native';
import { MyColor } from './../styles/Color';
import { Style } from "../styles/stylesButton";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const ChangeValue = (buttonValue: string) => {

    setFirstNumber(firstNumber+buttonValue)

  }

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return <Text style={result < 99999 ? [Style.screen1, { color: MyColor.result}] : [Style.screen1, { fontSize: 50, color: MyColor.result }]}>{result?.toString()}</Text>;
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Style.screen1}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Style.screen1}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Style.screen1, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Style.screen1, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseFloat(secondNumber) +parseFloat(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseFloat(secondNumber) -parseFloat(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseFloat(secondNumber) *parseFloat(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseFloat(secondNumber) / parseFloat(firstNumber)); 
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View style={Style.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Style.screen2}>
          {secondNumber}
          <Text style={{ color: "blue", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Style.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" isGray onPress={() => ChangeValue("-")} />
        <Button title="???" isGray onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="??" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Style.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="??" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Style.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Style.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Style.row}>
        <Button title="00" onPress={() => handleNumberPress("00")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="." onPress={() =>handleNumberPress(".")} />
        <Button title="="  isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}