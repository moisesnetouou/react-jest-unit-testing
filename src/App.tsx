import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['Moises', 'Geo', 'Neto', 'Besourinha', 'Gaia', 'Tobias']);

  function addToList(){
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList(item: string){
    setTimeout(() => {
      setList(state => state.filter(item => item !== item))
    }, 500)
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
        {list.map(item => <li key={item}>
          {item}
          <button onClick={()=> removeFromList(item)}>Remover</button>
        </li>)}
      </ul>
    </>
  )
}

export default App
