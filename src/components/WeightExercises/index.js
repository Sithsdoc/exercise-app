import { useState } from "react";
export default function WeightExercise({ exercise, setMenuScreen }) {
  let [weightAmount, setWeightAmount] = useState("");
  let [weightHolder, setWeightHolder] = useState([]);

  function holdWeight(weightAmount) {
    setWeightHolder([...weightHolder, weightAmount]);
    //console.log(weightHolder);
  }

  return (
    <div>
      <p>{exercise.name}</p>
      <p>Enter the weight used:</p>
      <input
        type="text"
        name="enterAmount"
        value={weightAmount}
        onChange={(weight) => setWeightAmount(weight.target.value)}
      />
      <br></br>
      <button onClick={() => holdWeight(weightAmount)}>Submit Weight</button>
      <button onClick={setMenuScreen}>Return</button>
      {weightHolder.map((weight, index) => {
        return <p key={index}>Weight Entered: {weight}</p>;
      })}
    </div>
  );
}
//websites used

//https://react.dev/reference/react-dom/components/input
//https://legacy.reactjs.org/docs/hooks-effect.html
//https://legacy.reactjs.org/docs/conditional-rendering.html#:~:text=Inline%20If%20with%20Logical%20%26%26%20Operator&text=It%20works%20because%20in%20JavaScript,will%20ignore%20and%20skip%20it.
//https://medium.com/@sabhya12.saini/using-input-field-in-react-js-to-accept-multiple-values-and-pass-them-in-an-array-to-display-48a582797e7

/*weightHolder.map((weight, index) => {
            return weightHolder.some(function (weightHolder) {
              return weightHolder === weight.weightAmount
                ? setWeightHolder(weightHolder, weightHolder.push(weightAmount))
                : setWeightHolder(weightHolder);
            });
          })*/
