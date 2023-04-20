import { Text, TouchableOpacity } from 'react-native';

export default function TaskDeleteElement(props) {
    const { deleteTask } = props;
    return (
        <TouchableOpacity onPress={() => deleteTask()}>
            <Text style={{ color: 'coral' }}>✖</Text>
        </TouchableOpacity>
    );
}
