/* eslint-disable react/self-closing-comp */
/* eslint-disable react/display-name */
import { useState } from 'preact/hooks';

export default () => {
    const initialState = {
        btns: new Array(25).fill(false),
        arr: [0, 0, 0, 0, 0],
    };

    const [state, setState] = useState(initialState);
    function handleClick(i) {
        let def = [1, 2, 4, 8, 16];
        const newState = { ...state };
        newState.btns[i] = !newState.btns[i];
        let col = i % 5;
        let val = 0;
        for (let j = col; j < 25; j += 5) {
            if (newState.btns[j]) {
                val = val | def[(j / 5) >> 0];
            }
        }
        newState.arr[col] = val;
        setState(newState);
    }

    function reset() {
        setState(initialState);
    }

    return (
        <div>
            <div className="frame">
                <h1>POV Array Generator</h1>
                <input
                    type="text"
                    disabled
                    value={(state.arr || []).join(', ')}
                />
                <div className="board">
                    {(state.btns || []).map((x, i) => (
                        <div
                            key={i}
                            onClick={() => handleClick(i)}
                            className={x ? 'box box selected' : 'box box'}
                        > 
                        </div>
                    ))}
                </div>
                <button className="btn" onClick={() => reset()}>
                    {' '}
                    Clear{' '}
                </button>
            </div>
        </div>
    );
};
