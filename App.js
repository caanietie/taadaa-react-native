import { SafeAreaView, StyleSheet } from 'react-native';
import AppContainer from './containers/AppContainer';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<AppContainer />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#efefee',
	},
});
