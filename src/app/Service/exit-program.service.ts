import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExitProgramService {
  
  constructor() {
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
