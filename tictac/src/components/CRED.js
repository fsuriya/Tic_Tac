import firebase from './keyDB';

export async function History(){
    const read = await firebase.firestore().ref('/');
    await read.once('value',(snapshot) => {
      let fromdatabase = snapshot.val();
      console.log(fromdatabase);
      // for(let item in fromdatabase){
      //   newState.push({
      //     date : item,
      //     close : fromdatabase[item].close,
      //     open : fromdatabase[item].open,
      //     high : fromdatabase[item].high,
      //     low : fromdatabase[item].low,
      //     volume : fromdatabase[item].volume,
      //     predict : fromdatabase[item].predict
      //   })
      // }
    })
    // console.log(newState);
    // return newState;
}