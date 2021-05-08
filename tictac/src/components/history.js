import React, { useEffect, useState } from "react";

// import firebase
import firebaseApp from "./firebase";
const db = firebaseApp.firestore();
const historyCollection = db.collection("History");
// End import firebase

const History = () => {
  const [His, setHis] = useState([{
    id: 0,
    Dim: 0,
    PlayerX: 0,
    PlayerO: 0,
    Time: 0,
    Win: 0,
  }]);

  useEffect(() => {
    function getHistory() {
      historyCollection.get().then((querySnapshot) => {
        var temp = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().Dim}`);
          temp.push({
            id: doc.id,
            Dim: doc.Dim,
            PlayerX: doc.PlayerX,
            PlayerO: doc.PlayerO,
            Time: doc.time,
            Win: doc.win,
          });
        });
        setHis(temp);
      });
    }
    getHistory();
  }, []);

  return (
    <div>
      <a>History</a>
      <a>{His[0].Dim}</a>
    </div>
  );
};

export default History;
