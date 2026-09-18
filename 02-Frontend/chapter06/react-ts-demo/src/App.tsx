import Greeting from './components/Greeting';
import './App.css';
import Button from './components/Button';
import Status from './components/Status';
import Container from './layouts/Container';
import Posts from './components/Posts';
import Profile from './components/Profile';
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';
function App() {
  return (
    <>
      <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>My React App</h1>
        <Greeting name='Jorge' />
        {/* <Greeting name={42} /> */}
        {/* <Button /> ❌ Property 'label' is missing in type '{}' */}
        <Button label='Click Me' color='green' />
        <Button label='Submit' />
        <Status status='success' />
        <Status status='loading' />
        <Status status='error' />
        {/* <Status status='thinking' /> */}
        {/* ❌ Type '"thinking"' is not assignable to type '"loading" | "success" | "error"' */}
        <hr />
        <Profile name='John' age={22} />
        <UserInfo />
        <Counter />
        <hr />
        <Posts />
      </Container>
    </>
  );
}

export default App;
