import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function TextInputElement(props) {
    const { text, value, multiline,
        numOfLines, onChangeText } = props;
    return (
        <View style={styles.textInputElement}>
            <Text style={styles.text}>{text}</Text>
            <TextInput style={styles.input}
                numberOfLines={numOfLines || 1}
                value={value} multiline={!!multiline}
                onChangeText={text => onChangeText(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInputElement: {
        width: '90%',
        marginVertical: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '900',
    },
    input: {
        padding: 4,
        fontSize: 17,
        marginTop: 4,
        outlineStyle: 'none',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
});
