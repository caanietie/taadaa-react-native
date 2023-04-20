// author='Anietie (aakjhonclems@gmail.com)'

import {
    StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import PropTypes from 'prop-types';

export function RadioButton(props) {
    const { selectedValue, shape, style, onValueChange } = props;
    RadioButton.shape = shape;
    RadioButton.selectedValue = selectedValue;
    RadioButton.onValueChange = onValueChange;
    // if (!props.children.some(child => child.props.value === selectedValue))
    //     console.error('Selected value is not in values list');
    return (
        <View style={style}>
            {props.children}
        </View>
    );
}

RadioButton.Item = function (props) {
    const { label, value } = props;
    const backgroundColor = RadioButton.selectedValue === value ?
        'dodgerblue' : 'transparent';
    return (
        <View style={styles.radioItem}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => RadioButton.onValueChange(value)}
            >
                <Text style={[styles.textStyle, { backgroundColor }]} />
            </TouchableOpacity>
            <Text style={styles.radioText}>{label}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    radioItem: {
        margin: 4,
        flexDirection: 'row',
    },
    radioText: {
        fontSize: 18,
    },
    buttonStyle: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: '50%',
        alignItems: 'center',
        borderStyle: 'solid',
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    textStyle: {
        width: 14,
        height: 14,
        borderRadius: '50%',
    },
});

RadioButton.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object, PropTypes.array, PropTypes.number
    ]),
    selectedValue: PropTypes.oneOfType([
        PropTypes.bool, PropTypes.number, PropTypes.string
    ]),
    onValueChange: PropTypes.func.isRequired,
    shape: PropTypes.oneOf(['circle', 'square', 'checkmark']),
};

RadioButton.Item.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.bool, PropTypes.number, PropTypes.string
    ]),
    value: PropTypes.oneOfType([
        PropTypes.bool, PropTypes.number, PropTypes.string
    ]).isRequired,
};

RadioButton.defaultProps = {
    shape: 'circle'
};
