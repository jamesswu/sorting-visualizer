import { useState, useEffect } from 'react';
import InsertionSort from '../algorithms/InsertionSort'

// const SPEED = 10;

export default function Sorting() {
  const [state, setState] = useState({
    array: [] as number[]
  });

  useEffect(() => {
    setState({ array: generateArray() })
  }, [])

  const animateInsertionSort = (): void => {
    setState({ array: InsertionSort(state.array) });
    const arrayBars = document.getElementsByClassName('bar');
    console.log(arrayBars);
    const foo = [[0, 1], [2, 3]];
    const [zero, one] = foo[0];
    const zeroStyle = arrayBars[zero].attributes[1];
    const oneStyle = arrayBars[one];
    console.log(zeroStyle);
    console.log(oneStyle);
    console.log(arrayBars[2]);
  }

  return (
    <div className="foobar">
      <div className="container">
        {
          state.array.map((value, index) => {
            return (
              <div className="bar" key={index} style={{
                backgroundColor: '#32a854',
                height: `${value}rem`
              }}></div>
            )
          })
        }
      </div>
      <span>
        <button onClick={() => { setState({ array: generateArray() }) }}> Generate New Array</button>
        <button onClick={() => { animateInsertionSort() }}>Insertion Sort</button>
      </span>
    </div >
  )

}



function generateArray(): number[] {
  let num: number;
  let temp: Array<number> = [];
  for (let i = 0; i < 200; i++) {
    num = Math.floor((Math.random() * (76 - 1) + 1));
    temp.push(num);
  }
  return temp;
}