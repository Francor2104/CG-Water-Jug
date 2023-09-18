import  { useState } from 'react';
import './App.css';

const WaterJugSolver = () => {
  const [jugACapacity, setJugACapacity] = useState(5);
  const [jugBCapacity, setJugBCapacity] = useState(3);
  const [requiredAmount, setRequiredAmount] = useState(4);

  const [steps, setSteps] = useState([]);

  const solveWaterJugChallenge = () => {
    const breadthFirstSearch = () => {
      const queue = [];
      const visited = new Set();
      const initialState = { jugA: 0, jugB: 0, path: [] };
    
      queue.push(initialState);
    
      while (queue.length > 0) {
        const { jugA, jugB, path } = queue.shift();
        const stateString = `${jugA},${jugB}`;
    
        if (jugA === requiredAmount || jugB === requiredAmount) {
          setSteps(path);
          return;
        }
    
        if (visited.has(stateString)) continue;
        visited.add(stateString);
        const pourAToB = Math.min(jugA, jugBCapacity - jugB);
        const pourBToA = Math.min(jugB, jugACapacity - jugA);
  
        const actions = [
          { jugA: 0, jugB, action: `Empty A (0,${jugB})` },
          { jugA, jugB: 0, action: `Empty B (${jugA},0)` },
          { jugA: jugACapacity, jugB, action: `Fill A (${jugACapacity},${jugB})` },
          { jugA, jugB: jugBCapacity, action: `Fill B (${jugA},${jugBCapacity})` },
          { jugA: jugA - pourAToB, jugB: jugB + pourAToB, action: `Pour A to B (${jugA - pourAToB},${jugB + pourAToB})` },
          { jugA: jugA + pourBToA, jugB: jugB - pourBToA, action: `Pour B to A (${jugA + pourBToA},${jugB - pourBToA})` }
        ];
  
        actions.forEach(({ jugA, jugB, action }) => {
          queue.push({ jugA, jugB, path: [...path, action] });
        });
      }
    
      setSteps(['There is no solution for this problem']);
    };

    breadthFirstSearch();
  };

   const Verifier = (e,callback) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && Number.isInteger(value) && value) callback(value);
  }

  const handleJugACapacityChange = (e) => Verifier(e, setJugACapacity) 

  const handleJugBCapacityChange = (e) => Verifier(e, setJugBCapacity) ;

  const handleRequiredAmountChange = (e) => Verifier(e, setRequiredAmount) ;

  return (
    <div className="container">
      <h1>Water Jug Challenge</h1>
      <div className="input-container">
        <label>Jug A Capacity:</label>
        <input
          type="number"
          step="1"
          min="1"
          value={jugACapacity}
          onChange={handleJugACapacityChange}
        />
      </div>
      <div className="input-container">
        <label>Jug B Capacity:</label>
        <input
          type="number"
          step="1"
          min="1"
          value={jugBCapacity}
          onChange={handleJugBCapacityChange}
        />
      </div>
      <div className="input-container">
        <label>Required amount:</label>
        <input
          type="number"
          step="1"
          min="1"
          value={requiredAmount}
          onChange={handleRequiredAmountChange}
        />
      </div>
      <button className="solve-button" onClick={solveWaterJugChallenge}>
        Solve
      </button>
      <h2>Step by step:</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default WaterJugSolver;