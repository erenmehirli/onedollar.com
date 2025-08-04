import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroGrid = () => {
  const cellSize = 20;
  const rows = 80; // Dikey uzunluk

  const [cols, setCols] = useState(0);
  const [gridData, setGridData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      const calculatedCols = Math.floor(width / cellSize);
      setCols(calculatedCols);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, [cellSize]);

  const totalCells = cols * rows;

  useEffect(() => {
    setGridData(Array(totalCells).fill(null));
  }, [totalCells]);

  const handleCellClick = (index) => {
    navigate(`/reklam-ver?pixel=${index}`);
  };

  if (cols === 0) return null;

  return (
    <div className="overflow-auto flex justify-center items-center mt-10 px-2">
      <div
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          width: `${cols * cellSize}px`,
          height: `${rows * cellSize}px`,
          border: '2px solid #ccc',
          backgroundColor: '#f8fafc',
          boxSizing: 'content-box',
        }}
      >
        {gridData.map((color, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: color || '#fff',
              border: '0.5px solid #ddd',
              cursor: 'pointer',
              boxSizing: 'border-box',
              transition: 'background-color 0.2s ease',
            }}
            title={`Piksel #${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroGrid;
