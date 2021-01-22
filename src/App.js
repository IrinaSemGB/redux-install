import React, {useState} from "react";
import {connect} from "react-redux";
import Counter from "./Counter";

function App(props) {

    const { counters } = props;
    const [addCounter, setAddCounter] = useState('');

    const deleteButtonHandler = (id) => {
        props.deleteCounter(id);
    };

    const plusMinusButtonHandler = (id, value) => {
        props.mathAction(id, value);
    };

    const moveActionHandler = (i, direction) => {
        props.moveAction(i, direction);
    };

    const addCounterHandler = (id, number) => {
        props.addNewCounter(id, number);
        setAddCounter('');
    };

  return (
    <div>
        <div>
            <input type="number"
                   value={addCounter}
                   onChange={event => setAddCounter(event.target.value)}/>
                   <button onClick={() => addCounterHandler(Math.random(), Number(addCounter))}> Add new counter </button>
        <hr/>
        </div>
        
        {props.counters.map((el, index) => <Counter
            counter={el}
            index={index}
            counters={counters}
            deleteButtonHandler={deleteButtonHandler}
            plusMinusButtonHandler={plusMinusButtonHandler}
            moveActionHandler={moveActionHandler}
        />)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
    deleteCounter: (id) => dispatch({
        type: 'DELETE', payload: {
            id: id
        }
    }),

    mathAction: (id, value) => dispatch({
        type: 'MATH_ACTION', payload: {
            id: id,
            value: value
        }
    }),

    moveAction: (index, direction) => dispatch({
        type: 'MOVE_ACTON', payload: {
            index: index,
            direction: direction
        }
    }),

    addNewCounter: (id, number) => dispatch({
        type: 'ADD_COUNTER', payload: {
            id: id,
            number: number
        }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
