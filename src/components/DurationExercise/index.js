import StopWatch from "./StopWatch.js";
export default function DurationExercise({ exercise, setMenuScreen }) {
  return (
    <div>
      <p>{exercise.name}</p>
      <StopWatch />
      <button onClick={setMenuScreen}>Return</button>
    </div>
  );
}
