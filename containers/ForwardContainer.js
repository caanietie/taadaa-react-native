import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../data/constants';
import { RadioButton } from '../elements/RadioButton';
import ForwardActionsComponent from '../components/ForwardActionsComponent';

export default function ForwardContainer(props) {
    const { cardId, currentStatus, setAction } = props;
    const [status, setStatus] = useState('');
    const radioItems = [[constants.CARD_TODO, constants.TODO],
    [constants.CARD_IN_PROGRESS, constants.IN_PROGRESS],
    [constants.CARD_COMPLETED, constants.COMPLETED]]
        .filter(status => status[0] !== currentStatus)
        .map(([value, label], k) => (
            <RadioButton.Item key={k} label={label} value={value} />
        ));
    return (
        <>
            <View style={styles.forwardContainer}>
                <Text style={styles.forwardText}>
                    Select a new status
                </Text>
                <RadioButton selectedValue={status}
                    onValueChange={value => setStatus(value)}
                >
                    {radioItems}
                </RadioButton>
                <ForwardActionsComponent cardId={cardId}
                    setAction={setAction} status={status}
                />
            </View>
            <View style={styles.overlay} />
        </>
    );
}

const styles = StyleSheet.create({
    forwardContainer: {
        zIndex: 2,
        top: '5%',
        left: '7%',
        padding: 15,
        width: '86%',
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: 'white',
    },
    forwardText: {
        fontSize: 20,
        textAlign: 'center',
    },
    overlay: {
        zIndex: 1,
        width: '100%',
        opacity: 0.15,
        height: '100%',
        position: 'absolute',
        backgroundColor: 'ghostwhite',
    },
});
