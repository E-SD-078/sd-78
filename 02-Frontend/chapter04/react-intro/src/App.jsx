import Header from './Header';
import Reviews from './Reviews';

const App = () => {
  //write any js code
  const user = {
    name: 'john doe',
    content: 'this is the best app',
    rating: 5,
    isActive: false,
  };
  return (
    <>
      <h1>Hello World</h1>
      <Header />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ipsam sed dolor eligendi
        inventore deleniti nihil totam repellat modi consequuntur tenetur possimus incidunt fugiat,
        autem delectus minima, sit quisquam neque.
      </p>
      <button>press me</button>
      <Reviews user={user} isActive={true} batchNumber='SD-78' />
    </>
  );
};

export default App;
