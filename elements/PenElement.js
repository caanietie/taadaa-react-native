import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function PenElement(props) {
    const { updateCard } = props;
    return (
        <TouchableOpacity style={styles.penElement}
            onPress={() => updateCard()}
        >
            <Text style={styles.penText}>✎</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    penElement: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(90deg)',
        backgroundColor: 'lightgrey',
        // TODO: Research boxShadow in react native
        // boxShadow: xoffset yoffset radius color
    },
    penText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
