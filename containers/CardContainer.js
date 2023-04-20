import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { constants } from '../data/constants';
import CardActionComponent from '../components/CardActionComponent';
import PickerElement from '../elements/PickerElement';
import TextInputElement from '../elements/TextInputElement';

export default function CardContainer(props) {
    const { cardInfo, setAction } = props;
    const action = cardInfo.id ? 'Update' : 'Create';
    const [title, setTitle] = useState(cardInfo.title);
    const [color, setColor] = useState(cardInfo.color);
    const [status, setStatus] = useState(cardInfo.status);
    const [description, setDesc] = useState(cardInfo.description);
    return (
        <>
            <ScrollView style={styles.cardContainer}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TextInputElement text='Title' value={title}
                    onChangeText={text => setTitle(text)}
                />
                <TextInputElement text='Description' numOfLines={2}
                    value={description} multiline={true}
                    onChangeText={text => setDesc(text)}
                />
                <PickerElement text='Status' value={status}
                    onValueChange={value => setStatus(value)}
                />
                <TextInputElement text='Color' value={color}
                    onChangeText={text => setColor(text)}
                />
                <CardActionComponent setAction={setAction}
                    action={`${action} Card`}
                    onSubmit={() => {
                        const newCard = {
                            description: description.trim(),
                            title: title.trim(), status,
                            color: color.trim()
                        };
                        // Insert data validation code here
                        if (action === 'Update')
                            setAction({
                                type: constants.UPDATE_CARD,
                                payload: {
                                    card: newCard,
                                    cardId: cardInfo.id
                                }
                            })
                        else if (action === 'Create')
                            setAction({
                                payload: { card: newCard },
                                type: constants.CREATE_CARD,
                            })
                    }}
                />
            </ScrollView>
            <View style={styles.overlay} />
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        zIndex: 2,
        top: '8%',
        left: '7%',
        width: '86%',
        // height: '70%',
        borderRadius: 5,
        paddingVertical: 10,
        position: 'absolute',
        backgroundColor: 'white',
    },
    overlay: {
        zIndex: 1,
        opacity: 0.3,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'ghostwhite',
    },
});
