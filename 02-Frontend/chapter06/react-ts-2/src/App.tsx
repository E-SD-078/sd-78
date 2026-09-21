import './App.css';
import NameForm from './components/NameForm';
import FruitSelector from './components/FruitSelector';
import ClickLogger from './components/ClickLogger';

import FormHandler from './components/FormHandler';

import RefDemo from './components/RefDemo';
import EffectDemo from './components/EffectDemo';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <NameForm />
      <FruitSelector />
      <ClickLogger />
      <FormHandler />
      <RefDemo />
      <EffectDemo />
      <Modal />
    </>
  );
}

export default App;
