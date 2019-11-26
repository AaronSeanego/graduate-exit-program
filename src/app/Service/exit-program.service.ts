import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExitProgramService {
  
  userID;
  userEmail;
  GraduatesArray = [];
  constructor() {
  }

<<<<<<< HEAD
  // generateKey() {
  //   let newKey = firebase.database().ref().child('Graduate/').push().key;
  //   return newKey;
  // }
=======
  signup(name,surname,gender,age,email,contact,address,qualification,status,price,password)
  {
   var db = firebase.firestore();
​
   return db.collection("Graduate/").add({
     Username: name,
     Surname: surname,
     Email: email,
     Gender: gender,
     Age: age,
     Contact: contact,
     Address: address,
     Qualification: qualification,
     Status: status,
     Price: price,
     Password: password
   }).then((docRef) => {
     console.log("Document written with ID: ", docRef.id);
 }).catch((error) => {
     console.error("Error adding document: ", error);
 });
   
  }
​
 getGraduates() {
   var db = firebase.firestore();
   return db.collection("Graduates").get().then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
         this.GraduatesArray.push(doc);
     });
 });
​
 return this.GraduatesArray;
 }

  // signup(name,surname,email,contact,password)
  //  {
  //   var db = firebase.firestore();
  //   console.log(name,email,password,"signup details serv")
>>>>>>> df6258e0b5717233cdcd212f77945d9bbc1188be

  signup(name,surname,gender,age,email,contact,address,qualification,category,status,price,password)
   {
    var db = firebase.firestore();

    return db.collection("Graduate/").add({
      Username: name,
      Surname: surname,
      Email: email,
      Gender: gender,
      Age: age,
      Contact: contact,
      Address: address,
      Qualification: qualification,
      Category: category,
      Status: status,
      Price: price,
      Password: password
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  }).catch((error) => {
      console.error("Error adding document: ", error);
  });
    
<<<<<<< HEAD
   }

  getGraduates() {
    var db = firebase.firestore();
    return db.collection("Graduates/").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          this.GraduatesArray.push(doc);
        });
    });
  }

  // return this.GraduatesArray;
  // }
=======
  //  }

  
>>>>>>> df6258e0b5717233cdcd212f77945d9bbc1188be
}
