import { Picker, StyleSheet, Text, View } from 'react-native';
import { constants } from '../data/constants';

export default function PickerElement(props) {
    const { text, value, onValueChange } = props;
    return (
        <View style={styles.pickerElement}>
            <Text style={styles.text}>{text}</Text>
            <Picker style={styles.picker}
                selectedValue={value}
                onValueChange={value => onValueChange(value)}
            >
                <Picker.Item label={constants.TODO}
                    value={constants.CARD_TODO}
                />
                <Picker.Item label={constants.IN_PROGRESS}
                    value={constants.CARD_IN_PROGRESS}
                />
                <Picker.Item label={constants.COMPLETED}
                    value={constants.CARD_COMPLETED}
                />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerElement: {
        width: '90%',
        marginVertical: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '900',
    },
    picker: {
        padding: 4,
        fontSize: 17,
        marginTop: 4,
        borderWidth: 0,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderBottomColor: 'lightgrey',
    },
});
