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

  //  return  firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
  //   // this.setCurrentSession(firebase.auth())
  //     //  console.log("user is registered");
  //     //   this.userID=user['user'].uid;
  //     //   this.userEmail=user['user'].email;
       
  //       firebase.database().ref('users/').set({
  //        username: name,
  //        surname: surname,
  //        email: email,
  //        contact: contact,
  //        password : password,
 
  //      });
  //     return user
  //    }).catch((error)=> {
  //      // Handle Errors here.
  //      var errorCode = error.code;
  //      var errorMessage = error.message;
  //     return errorMessage
  //      // ...
  //     //  console.log(errorMessage)
  //     //  this.data=errorMessage
  //     //  console.log(this.data)
      
  //    });
    
  //  }

  
}
