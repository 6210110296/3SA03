import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
const prepareStateFromNumber = (given_number) => {
    let n = parseInt(given_number)
    let rand_num = Math.floor(Math.random() * n)
    let choice = [rand_num]
    for (let i = 0; i < 5; i++) {
        choice.push(Math.floor(Math.random() * n))
    }
    return {
        n,
        choice,
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
        if (state.attempt <= 3) { //max guess
            if (guess == state.rand_num) {
                console.log('You were right!')
                setState({ ...state, guess: '', completed: true })
            } else if (guess < state.rand_num) {
                console.log('your guess is less than ANSWER')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            } else if (guess > state.rand_num) {
                console.log('your guess is more than ANSWER')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        } else {
            console.log("Reset")
            setState({ ...state, guess: '', attempt: 0 })
        }
    }

    return (
        <div>
            {
                state.choice.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
            }
        </div>

    );
}