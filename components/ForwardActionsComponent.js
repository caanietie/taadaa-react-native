import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { constants } from '../data/constants';

export default function ForwardActionsComponent(props) {
    const { cardId, setAction, status } = props;
    return (
        <View style={styles.forwardActionsComponent}>
            <TouchableOpacity style={[
                styles.button, { backgroundColor: 'dodgerblue' }]}
                onPress={() => setAction({
                    type: constants.UPDATE_STATUS,
                    payload: { cardId, status, askUpdate: false }
                })}
            >
                <Text style={styles.forwardText}>Proceed</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.cancel]}
                onPress={() => setAction({
                    type: constants.CANCEL
                })}
            >
                <Text style={styles.forwardText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    forwardActionsComponent: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    forwardText: {
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