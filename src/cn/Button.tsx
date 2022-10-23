import { TouchableOpacity, Text, Switch } from "react-native";
import { Style } from "../styles/stylesButton";
import { useContext } from "react";
import { Themecontext } from '../context/Themecontext';



interface ButtonProps {
    onPress: () => void;
    title: String;
    isBlue?: Boolean;
    isGray?: Boolean;
};

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    const Theme = useContext(Themecontext);
    return (
        <TouchableOpacity
        style={
            isBlue
                ? Style.Lblue
                : isGray
                    ? Style.Lgray
                    : Theme === 'light'
                        ? Style.Llight
                        : Style.LDark
        }
        onPress={onPress}>


            <Text
                style={
                    isBlue || isGray
                        ? Style.smalltextlight
                        : Theme === 'dark'
                            ? Style.smalltextlight
                            : Style.smalltextdark
                }
            >
                {title}
            </Text>


        </TouchableOpacity>

    );
}