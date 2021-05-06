import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

// import firebase
import firebaseApp from './components/firebase';
const db = firebaseApp.firestore();
const historyCollection = db.collection('History');
// End import firebase

const App = () => {
  
  const [His, setHis] = useState();

  useEffect(() => {
    function getHistory(){
      historyCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(typeof(doc.data().playerX));
            // console.log(doc);
            setHis(`${doc.id} => ${doc.data().playerX[2]}`);
        });
    });
    }
    getHistory();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {His}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
