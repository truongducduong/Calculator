import { StyleSheet } from "react-native";
import { MyColor } from "./Color";


export const Style = StyleSheet.create({
  //Button
  Lblue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: MyColor.blue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  LDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: MyColor.dark,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  Llight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: MyColor.light,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  Lgray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: MyColor.gray,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  smalltextlight: {
    fontSize: 32,
    color: MyColor.light,
  },
  smalltextdark: {
    fontSize: 32,
    color: MyColor.dark,
  },
  //keyboard
  row: {
    maxWidth: '100%',
    flexDirection: "row",
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screen1: {
    fontSize: 70,
    color: MyColor.dark,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screen2: {
    fontSize: 50,
    color: MyColor.dark,
    fontWeight: '200',
    alignSelf: 'flex-end',
  }
}
);

