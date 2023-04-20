import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { constants } from '../data/constants';

export default function PlusElement(props) {
    const { setAction } = props;
    return (
        <TouchableOpacity style={styles.plusElement}
            onPress={() => setAction({
                type: constants.NEW_CARD
            })}
        >
            <Text style={styles.plusSign}>+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    plusElement: {
        width: 40,
        height: 40,
      marginLeft: 'auto',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue',
    },
    plusSign: {
        fontSize: 30,
        color: 'white',
        userSelect: 'none',
        fontWeight: 'bolder',
    },
});
