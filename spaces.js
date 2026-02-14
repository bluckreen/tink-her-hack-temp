// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdMMYHYzQaDFVlTKMC5XzISZIN7TBKmBU",
  authDomain: "spacebooker-3abd9.firebaseapp.com",
  projectId: "spacebooker-3abd9",
  storageBucket: "spacebooker-3abd9.firebasestorage.app",
  messagingSenderId: "76226422507",
  appId: "1:762264225076:web:2a9ae8901f68f442e7d161"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const hallList = document.getElementById('hall-list');

db.collection("halls").get().then((querySnapshot) => {
    console.log("Number of halls:", querySnapshot.size);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        const hall = doc.data();

        const a = document.createElement('a');
        a.href = hall.link || "#";
        a.className = "space-card";

        const h3 = document.createElement('h3');
        h3.textContent = hall.name;

        const span = document.createElement('span');
        span.className = "status " + (hall.status === "available" ? "available" : "booked");
        span.textContent = hall.status === "available" ? "🟢 Available" : "🔴 Booked";

        a.appendChild(h3);
        a.appendChild(span);

        hallList.appendChild(a);
    });
}).catch((error) => {
    console.error("Error fetching halls: ", error);
});
