import { View } from 'react-native';
import Card from './Card';

export default function Row(props) {
    console.log(props);
    return (
        <View style={{alignItems: 'center', flexDirection: 'row', aspectRatio: 1}}>
            {props.symbols.map((symbol, index) => <Card key={"card " + index} symbol={symbol} lengthOfRow={props.lengthOfRow}/>)}
        </View>
    )
}