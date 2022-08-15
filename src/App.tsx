import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['Moises', 'Geo', 'Neto', 'Besourinha', 'Gaia', 'Tobias']);

  function addToList(){
    setList(state => [...state, newItem])
  }

  return (
    <>
      <input 
        type="text" 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        placeholder="Novo item"
      />

      <button onClick={addToList}>Adicionar</button>
      
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
