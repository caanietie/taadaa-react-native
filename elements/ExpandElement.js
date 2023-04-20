import { Text, TouchableOpacity } from 'react-native';

export default function ExpandElement(props) {
	const { expandElement, expandText, visible, setVisible } = props;
	let transform = visible ? 'rotate(90deg)' : 'none';
	return (
		<TouchableOpacity onPress={() => setVisible()}
			style={[expandElement, { transform }]}
		>
			<Text style={expandText}>{'  》'}</Text>
		</TouchableOpacity>
	);
}
