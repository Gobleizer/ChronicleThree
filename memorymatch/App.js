import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer } from 'react';

const SYMBOLS = ['a', 'b', 'c'];

function reducer(state, action) {
  switch (action.type) {
    case 'make-a-guess':
      return {...state, numberOfGuesses: state.numberOfGuesses + 1};
    case 'reset-guess':
      return state;
    case 'reset-game':
      return getNewState();
  } 
  return state;
}

function getNewState() {
  const board = [...SYMBOLS, ...SYMBOLS];
  shuffle(board);
  return { 
          board,
          revealed: [],
          numberOfGuesses: 0
        };
}

//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = getRandomIndex(i);
    swap(arr, randomIndex, i);
  }
} 

function getRandomIndex(len) {
  return Math.floor(Math.random() * len);
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, getNewState);


  return (
    <View style={styles.container}>
      <Button title={"Make A Guess"} onPress={() => dispatch({type: 'make-a-guess'})}></Button>
      <Text>{JSON.stringify(state, null, 2)}</Text>
      <Button title={"Reset Game"} onPress={() => dispatch({type: 'reset-game'})}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
