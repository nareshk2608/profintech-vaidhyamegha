// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChBu-eWV8sZrq04NgX1FsGRC-_4AmQCUc",
  authDomain: "profintech-365902.firebaseapp.com",
  databaseURL: "https://profintech-365902-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "profintech-365902",
  storageBucket: "profintech-365902.appspot.com",
  messagingSenderId: "88862420126",
  appId: "1:88862420126:web:17c4878e82361578d35f8f",
  measurementId: "G-6S39RT58ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

const contactForm = document.forms.namedItem("contact_form")
const email_contact = document.getElementById("mce-EMAIL")

submit.addEventListener("click",(e) => {
  e.preventDefault()
  db.collection('contact-form').doc().set({
    email: email_contact.value
  }).then(() => {
    contactForm.reset();
    modal.classList.toggle("display-none");
  })
});

close.addEventListener("click", () => {
  modal.classList.toggle("display-none");
});


