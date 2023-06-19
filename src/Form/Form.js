import { useState } from 'react';
import './Form.css'

const initialInputs = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10,
}

function Form(props) {
    const [userInputs, setUserInputs] = useState(initialInputs);

    function submitHandler(event) {
        event.preventDefault();

        props.onCalculate(userInputs)
    }

    function resetHandler(event) {
        setUserInputs(initialInputs)
    }

    function changeHandler(input, value) {
        setUserInputs((prevInputs) => {
            return{
                ...prevInputs,
                [input]: +value
            }
        })
    }


    return(
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input 
                    onChange={(event) => changeHandler('current-savings', event.target.value)} 
                    value={userInputs['current-savings']}
                    type="number" 
                    id="current-savings" 
                />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input
                    onChange={(event) => changeHandler('yearly-contribution', event.target.value)} 
                    value={userInputs['yearly-contribution']}
                    type="number" 
                    id="yearly-contribution" 
                />
            </p>
            </div>
            <div className="input-group">
            <p>
                <label htmlFor="expected-return">
                Expected Interest (%, per year)
                </label>
                <input
                    onChange={(event) => changeHandler('expected-return', event.target.value)}
                    value={userInputs['expected-return']}
                    type="number" 
                    id="expected-return" 
                />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input
                    onChange={(event) => changeHandler('duration', event.target.value)}
                    value={userInputs['duration']}
                    type="number" 
                    id="duration" 
                />
            </p>
            </div>
            <p className="actions">
            <button onClick={resetHandler}type="reset" className="buttonAlt">
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
            </p>
        </form>
    )
}

export default Form;