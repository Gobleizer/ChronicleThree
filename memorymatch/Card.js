import { View, Text } from 'react-native';

export default function Card(props) {
    console.log(props);
    return (
        <View style={{flex: props.lengthOfRow, aspectRatio: 1, backgroundColor: 'red', borderWidth: 1, borderColor: 'blue'}}>
            <Text>{props.symbol}</Text>
        </View>
    )
}