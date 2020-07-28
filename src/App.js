import React, { useState } from 'react'
import Home from './components/home'
import Navigation from './components/navigation';
import { Modal } from '@material-ui/core';
import AddItem from './components/add-item-form';

const App = () => {

  const getModalStyle = () => {
    const top = 10;
    const left = 1;

    return {
      top: `${top}%`,
      left: `${left}%`,
    };
  }

  const [addItemModalOpen, setAddItemOpen] = useState(false);
  const [items, setItems] = useState([]);

  const addItem = value => {
    setItems([...items, value]);
    setAddItemOpen(false);
  }

  const onAddItemClicked = () => {
    setAddItemOpen(true);
  }

  return (
    <div>
      <Modal
        open={addItemModalOpen}
        onClose={() => setAddItemOpen(false)}
        aria-labelledby="add-item-modal"
        aria-describedby="add-item-modal"
        style={getModalStyle()}
      >
        <AddItem submit={addItem} />
      </Modal>
      <Navigation handleAddItem={onAddItemClicked} />
      <Home items={items} />
    </div>
  )
}

export default App;
