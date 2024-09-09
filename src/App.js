import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize a 9x9 grid with empty values
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill('')));

  // Handle input change when user enters a number
  const handleInputChange = (row, col, value) => {
    // Make a copy of the grid
    const newGrid = [...grid];
    // Only allow digits 1-9 or empty string to clear
    if(value === '' || /^[1-9]$/.test(value)) {
      newGrid[row][col] = value;
      setGrid(newGrid);
    }
  };

  return (
    <div className='App'>
      <h1>Sudoku App</h1>
      <div className='sudoku-grid'>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className='sudoku-row'>
            {row.map((cell, colIndex) => (
              <input 
                key={`${rowIndex}-${colIndex}`}
                className='sudoku-cell'
                type='text'
                maxLength='1'
                value={cell}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;