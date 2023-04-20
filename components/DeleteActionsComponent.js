import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { constants } from '../data/constants';

export default function DeleteActionsComponent(props) {
    const { cardId, setAction } = props;
    return (
        <View style={styles.deleteActionsComponent}>
            <TouchableOpacity style={[
                styles.button, { backgroundColor: 'pink' }]}
                onPress={() => setAction({
                    type: constants.DELETE_CARD,
                    payload: { cardId, askDelete: false }
                })}
            >
                <Text style={styles.delText}>Proceed</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.cancel]}
                onPress={() => setAction({
                    type: constants.CANCEL
                })}
            >
                <Text style={styles.delText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    deleteActionsComponent: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    delText: {
        fontSize: 16,
        fontWeight: 600,
    },
    button: {
        padding: 6,
        borderRadius: 5,
    },
    cancel: {
        borderWidth: 2,
        borderColor: 'lightgrey',
    },
});
