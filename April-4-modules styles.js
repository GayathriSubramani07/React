//App.js

import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import styles from './appStyle.module.css'




function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
   
    </div>
  );
}

export default App;

//appStyle.css

.success{
    color: red;
}


//appStyle.module.css

.error{
    color:greenyellow;
}
