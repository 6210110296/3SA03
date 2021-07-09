import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
const prepareStateFromNumber = (given_number) => {
    let n = parseInt(given_number)
    let rand_num = Math.floor(Math.random() * n)
    return {
        n,
        rand_num,
        attempt: 1,
        guess: '',
        completed: false
    }
}
export default function NumberCard(props) {
    const [state, setState] = useState(prepareStateFromNumber(props.value))
    const activationHandler = c => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length <= 3) { //max guess
            if (guess == state.rand_num) {
                console.log('You were right!')
                setState({ ...state, guess: '', completed: true })
            } else {
                console.log('You Moron!')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        } else {
            console.log("Reset")
            setState({ ...state, guess: '', attempt: state.attempt + 1 })
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
            }
        </div>

    );
}