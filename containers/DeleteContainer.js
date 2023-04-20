import { StyleSheet, Text, View } from 'react-native';
import DeleteActionsComponent from '../components/DeleteActionsComponent';

export default function DeleteContainer(props) {
    const { cardId, setAction } = props;
    return (
        <>
            <View style={styles.deleteContainer}>
                <Text style={styles.delText}>
                    Proceed to delete this card?
                </Text>
                <DeleteActionsComponent cardId={cardId}
                    setAction={setAction}
                />
            </View>
            <View style={styles.overlay} />
        </>
    );
}
const styles = StyleSheet.create({
    deleteContainer: {
        zIndex: 2,
        top: '5%',
        left: '7%',
        padding: 15,
        width: '86%',
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: 'white',
    },
    delText: {
        fontSize: 20,
        textAlign: 'center',
    },
    overlay: {
        zIndex: 1,
        opacity: 0.15,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'ghostwhite',
    },
});
