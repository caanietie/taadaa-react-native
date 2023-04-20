import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function TaskInputElement(props) {
    const { createTask } = props;
    const [task, setTask] = useState('');
    return (
        <View style={styles.taskInputElement}>
            <TextInput style={styles.textInput}
                minLength={4} maxLength={30}
                value={task} placeholder='Enter task'
                autocorrect={true} returnKeyType='enter'
                onChangeText={text => setTask(text)}
                onKeyPress={ev => {
                    if (ev.key.toLowerCase() === 'enter') {
                        createTask(task);
                        setTask('');
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    taskInputElement: {
        marginVertical: 5,
    },
    textInput: {
        padding: 5,
        fontSize: 16,
        borderWidth: 1,
        outlineStyle: 'none',
        borderStyle: 'dashed',
        borderColor: 'lightgrey',
    },
});
