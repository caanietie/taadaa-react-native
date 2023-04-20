import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import binIcon from '../images/bin@32.png';

export default function DeleteElement(props) {
    const { deleteCard } = props;
    return (
        <TouchableOpacity style={styles.deleteElement}
            onPress={() => deleteCard()}
        >
            <Image source={binIcon}
                style={{ width: 16, height: 16 }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    deleteElement: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        alignItems: 'center',
        marginHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
    },
});
