import { StyleSheet, Text, View } from 'react-native';
import ExpandElement from '../elements/ExpandElement';

export default function HeaderComponent(props) {
    const { visible, heading, setVisible } = props;
    return (
        <View style={styles.headerComponent}>
            <Text style={styles.header}>{heading}</Text>
            <ExpandElement visible={visible}
                setVisible={setVisible}
                expandText={styles.expandText}
                expandElement={styles.expandElement}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerComponent: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'dodgerblue',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
        userSelect: 'none',
    },
    expandElement: {
        width: 40,
        height: 40,
        marginRight: 5,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    expandText: {
        fontSize: 25,
        fontWeight: 'bold',
        userSelect: 'none',
    },
});
