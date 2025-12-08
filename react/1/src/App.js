import React, {useState} from "react";

const App = () => {
  const [steps, setSteps] = useState(0);

  return (
    <div className="container">
      {steps === 0 && <p>You didn't take any steps today!</p>}
      {steps > 0 &&  steps <100 && <p>Great job! You've taken {steps} steps! </p>}
      {steps >= 100 && <p>Wow!! You're on a roll! You've taken {steps} steps!</p>}
      <button onClick={() => setSteps(steps+1)}>Click me</button>
    </div>
  )
}

export default App;