import { useState } from 'react';
import Dropdown from './Dropdown';

function App() {
  const [selected, setSelected] = useState('');
  return (
    <div>
      <div>Selected {selected }</div>
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
