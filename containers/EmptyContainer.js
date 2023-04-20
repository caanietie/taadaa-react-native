import { Image, StyleSheet, Text, View } from 'react-native';
import infoIcon from '../images/info-grey@32.png';

export default function EmptyContainer() {
    return (
        <View style={styles.emptyContainer}>
            <Image source={infoIcon}
                style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>
                Collection is empty
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        borderWidth: 1,
        borderRadius: 6,
        marginVertical: 5,
        paddingVertical: 20,
        flexDirection: 'row',
        borderColor: 'lightgrey',
    },
    imageStyle: {
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    textStyle: {
        fontSize: 24,
        color: 'lightgrey',
        userSelect: 'none',
        marginHorizontal: 'auto',
    },
});
