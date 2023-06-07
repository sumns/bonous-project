import React, { useState } from 'react';

const TableGenerator = () => {
  const [number, setNumber] = useState('');
  
  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };
  
  const generateTable = (number) => {

    const table = [];
    
    for (let i = 1; i <= 10; i++) {
      table.push(
        <tr >
          <td>{i * number}</td>
        </tr>
      );
    }
    return table;

  };
  
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number for table"
      />
      <table>
        <thead>
          <tr>
            <th><h3>Result :</h3></th>
          </tr>
        </thead>
        <tbody>
          {generateTable(Number(number))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
