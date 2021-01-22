import React, {useState} from "react";
import {connect} from "react-redux";

function Counter(props) {

    const {counters, counter, index} = props;

    const [newCounter, setNewCounter] = useState('');

    function updatedButtonHandler(id, newCounter) {
        props.updateCounter(id, newCounter);
        setNewCounter('');
    }

    return (
        <div>
            <button onClick={() => props.plusMinusButtonHandler(counter.id, -1)}> -1 </button>
            {counter.number}
            <button onClick={() => props.plusMinusButtonHandler(counter.id, 1)}> +1 </button>
            <button onClick={() => props.deleteButtonHandler(counter.id)}> Delete </button>
            {index !== counters.length - 1 && <button onClick={() => props.moveActionHandler(index, 1)}> ↓ </button>}
            {index !== 0 && <button onClick={() => props.moveActionHandler(index, -1)}> ↑ </button>}
            <input type="number"
                   value={newCounter}
                   onChange={event => setNewCounter(event.target.value)}/>
                   <button onClick={() => updatedButtonHandler(counter.id, Number(newCounter))}> update </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    updateCounter: (id, newValue) => dispatch({
        type: 'UPDATE', payload: {
            id: id,
            newValue: newValue
        }
    }),
});

export default connect(null, mapDispatchToProps) (Counter);