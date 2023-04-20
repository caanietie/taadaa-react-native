import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import forwardIcon from '../images/forward@32.png';

export default function ForwardElement(props) {
    const { updateCardStatus } = props;
    return (
        <TouchableOpacity style={styles.forwardElement}
            onPress={() => updateCardStatus()}
        >
            <Image source={forwardIcon}
                style={{ width: 16, height: 16 }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    forwardElement: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
    },
});
