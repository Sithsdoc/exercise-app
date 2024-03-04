//import logo from "./logo.svg";
import "./App.css";
import DurationExercise from "./components/DurationExercise/index.js";
import RepetitionExercise from "./components/RepetitionExercise/index.js";
import WeightExercise from "./components/WeightExercises/index.js";
import { useCallback, useState } from "react";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";
const WEIGHT_EXERCISE = "weighted";

var exerciseList = [
  { type: REPETITION_EXERCISE, name: "push-ups" },
  { type: DURATION_EXERCISE, name: "bicycling" },
  { type: REPETITION_EXERCISE, name: "jumping jacks" },
  { type: DURATION_EXERCISE, name: "running" },
  { type: REPETITION_EXERCISE, name: "sit-ups" },
  { type: WEIGHT_EXERCISE, name: "arm curls" },
];

function App() {
  //let exerciseComponent = true ? <StopWatch /> : <RepetitionExercise />;
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  let [currentExercise, setCurrentExercise] = useState({});
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  });

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Select an exercise:</p>
        <ul className="list">
          {exerciseList.map((exercise) => {
            return (
              <li key={exercise.name}>
                <button onClick={() => buttonClick(exercise)}>
                  {exercise.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            exercise={currentExercise}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            exercise={currentExercise}
          />
        );
        break;
      case WEIGHT_EXERCISE:
        screenComponent = (
          <WeightExercise
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
            exercise={currentExercise}
          />
        );
        break;
      default:
        screenComponent = undefined;
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">{screenComponent}</header>
    </div>
  );
}

export default App;
//setCurrentScreen(EXERCISE_SCREEN) && setCurrentExercise(name)
