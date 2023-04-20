import { StyleSheet, View } from 'react-native';
import CardActionElement from '../elements/CardActionElement';

export default function CardActionComponent(props) {
    const { action, onSubmit, setAction } = props;
    return (
        <View style={styles.cardActions}>
            <CardActionElement action={action}
                onPress={() => onSubmit()}
                textStyle={styles.textStyle}
                touchStyle={styles.createTouchStyle}
            />
            <CardActionElement action='Cancel'
                textStyle={styles.textStyle}
                onPress={() => setAction({})}
                touchStyle={styles.cancelTouchStyle}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    cardActions: {
        width: '80%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    createTouchStyle: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue',
    },
    cancelTouchStyle: {
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgrey',
    },
    textStyle: {
        padding: 8,
        fontSize: 16,
        fontWeight: 600,
    },
});
