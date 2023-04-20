import { StyleSheet, View } from 'react-native';
import { constants } from '../data/constants';
import ListComponent from '../components/ListComponent';

export default function ListContainer(props) {
    const { cards, setAction } = props;
    const listComponent = constants.HEADING.map((heading, k) => {
        const status = heading === constants.TODO ? constants.CARD_TODO :
            heading === constants.COMPLETED ? constants.CARD_COMPLETED :
                constants.CARD_IN_PROGRESS;
        return (
            <ListComponent key={k}
                heading={heading} setAction={setAction}
                cards={cards.filter(card => card.status === status)}
            />
        );
    });
    return (
        <View style={styles.listContainer}>
            {listComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
    },
});
