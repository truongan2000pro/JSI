firebase.initializeApp({
  apiKey: "AIzaSyCu9WVFSRn-_JuKM6sO5xAWiDrBwz5O9GQ",
  authDomain: "js-intensive.firebaseapp.com",
  projectId: "js-intensive",
});

const db = firebase.firestore();

async function getData(collectionName) {
  let data = await db.collection(collectionName).get();
  data.forEach((doc) => {
    console.log(doc.data());
  });
}
let docRef = db.collection("test").doc("FduOCQax6CsUCwSSQe3N").get();
let doc = db.collection("test").where("name", "!=", "Minh").get();

doc
  .then((data) => {
    return data.forEach((doc) => console.log(doc.data()));
  })
  .catch((error) => console.log(error));
// getData("chat");
// getData("test");
