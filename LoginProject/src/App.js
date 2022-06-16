import './App.css';
import SignInDiv from './Components/SignInDiv';

const vectorStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

function App() {
  return (
    <div>
      <SignInDiv />
      <img src="FooterVector.svg" alt="Footer vector" style={vectorStyle} />
    </div>
  );
}

export default App;
