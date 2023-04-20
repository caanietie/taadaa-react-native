import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../data/constants';
import TaskComponent from './TaskComponent';
import TaskInputElement from '../elements/TaskInputElement';
import TitleElement from '../elements/TitleElement';

export default function CardComponent(props) {
    const { title, description, tasks, cardId,
        color: borderLeftColor, setAction } = props;
    const [visible, setVisible] = useState(false);
    let tasksComponent;
    if (visible) tasksComponent = tasks.map((task, k) => (
        <TaskComponent key={k}
            setAction={setAction}
            cardId={cardId} taskId={task.id}
            done={task.done} name={task.name}
        />
    )).concat(
        <TaskInputElement createTask={name =>
            setAction({
                payload: { cardId, name },
                type: constants.CREATE_TASK
            })}
        />
    );
    return (
        <View style={[styles.cardComponent, { borderLeftColor }]}>
            <View style={styles.titleDesc}>
                <TitleElement cardId={cardId}
                    title={title} setAction={setAction}
                    visible={visible} setVisible={setVisible}
                />
                <Text style={styles.desc}>{description}</Text>
            </View>
            {tasksComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    cardComponent: {
        padding: 8,
        borderRadius: 5,
        marginVertical: 3,
        borderLeftWidth: 4,
        borderLeftStyle: 'solid',
        backgroundColor: 'ghostwhite',
    },
    titleDesc: {
        marginBottom: 8,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomStyle: 'dashed',
        borderBottomColor: 'lightgrey',
    },
    desc: {
        fontSize: 18,
        userSelect: 'none',
    },
});
