import './App.css';

import SimpleOne from './SimpleOne';
import SimpleTwo from './SimpleTwo';
import SimpleThree from './/SimpleThree';

function App() {
  return (
    <div className="App">
      <h1>Question 1</h1>
      <SimpleOne />
      <hr/>
      <h1>Question 2</h1>
      <SimpleTwo />
      <hr/>
      <h1>Question 3</h1>
      <SimpleThree />
    </div>
  );
}

export default App;
