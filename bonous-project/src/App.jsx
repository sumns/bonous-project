import {useState} from 'react'
import {Dropdown} from './components/Dropdown'

function App() {

  const options = ["Thor", "Locky", "Captain-America", "Ant-Man", "Aquaman", "Batman", "Hawkeye" , "Iron Man", "Spider-Man", "Superman" ]

  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <Dropdown option = {options} onselect = {setSelected} />
      {selected && ( <p>You have selected : {selected}</p> )
      
      }
    </div>
  );
}

export default App;
