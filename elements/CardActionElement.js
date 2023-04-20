import { Text, TouchableOpacity } from 'react-native';

export default function CardActionElement(props) {
    const { action, textStyle, touchStyle, onPress } = props;
    return (
        <TouchableOpacity style={touchStyle}
            onPress={() => onPress()}
        >
            <Text style={textStyle}>{action}</Text>
        </TouchableOpacity>
    );
}
