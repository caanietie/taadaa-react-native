import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../data/constants';
import CheckBoxElement from '../elements/CheckBoxElement';
import TaskDeleteElement from '../elements/TaskDeleteElement';

export default function TaskComponent(props) {
    const { done, name, setAction, cardId, taskId } = props;
    return (
        <View style={styles.taskComponent}>
            <View style={styles.checkboxName}>
                <CheckBoxElement check={done}
                    toggleTask={() => setAction({
                        payload: { cardId, taskId },
                        type: constants.TOGGLE_TASK
                    })}
                />
                <Text style={styles.name}>{name}</Text>
            </View>
            <TaskDeleteElement
                deleteTask={() => setAction({
                    payload: { cardId, taskId },
                    type: constants.DELETE_TASK
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    taskComponent: {
        paddingVertical: 2,
        flexDirection: 'row',
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
    },
    checkboxName: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 17,
        marginLeft: 10,
        userSelect: 'none',
    },
});