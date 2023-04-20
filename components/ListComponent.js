import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EmptyContainer from '../containers/EmptyContainer';
import CardComponent from './CardComponent';
import HeaderComponent from './HeaderComponent';

export default function ListComponent(props) {
    const { heading, cards, setAction } = props;
    const [visible, setVisible] = useState(false);
    let cardComponent;
    if (visible)
        cardComponent = cards.length === 0 ?
            <EmptyContainer /> :
            cards.map((card, k) => (
                <CardComponent key={k}
                    setAction={setAction}
                    description={card.description}
                    tasks={card.tasks} cardId={card.id}
                    title={card.title} color={card.color}
                />
            ));
    return (
        <ScrollView style={styles.listComponent}>
            <HeaderComponent visible={visible}
                setVisible={() => setVisible(!visible)}
                heading={heading}
            />
            {cardComponent}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listComponent: {
        marginBottom: 10,
    },
});
