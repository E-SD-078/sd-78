import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <Header />
      <Main />
      <Footer />
    </AuthProvider>
  );
}

export default App;
