import { Component, OnInit } from '@angular/core';
import { ExitProgramService } from '../Service/exit-program.service';
import { identifierModuleUrl } from '@angular/compiler';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthGuardService } from '../Service/auth-guard.service';
import { Router } from '@angular/router';
import { MapboxService, Feature } from '..//Service/mapbox.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  passwo;
  name;
  surname;
  email;
  contact;
  password;
  confirm_password;
  addresses: string[] = [];
  coodinateses: string[] = [];
  list: any;

  lng;
  lat;
  gender;
  age;
  address;
  qualification;
  price;
 
  Status = true;
  
  register_form:FormGroup;


  selectedAddress = null;
  selectedcoodinates = null;
  constructor(public RegisterService:ExitProgramService,
              private afs: AngularFirestore,
              private authService : AuthGuardService,
              private route :Router,
              public mapboxService: MapboxService) { }


              
              public handleAddressChange(address: any) {
                // Do some stuff
                this.selectedAddress = address;
                console.log(this.selectedAddress)
            }
                
  // registerGraduate(){
    
  //   this.afs.collection('Graduate/').doc(this.uid).set({
  
  //     firstName: nameF,
  //     lastName: nameL,
  //     Email: email,
  //     Surname: surname,
  //     graduateDate : date,
  //     collegeFET : skillsdev,
  //     formalExpirience : expirience,
  //     Gender: gender,
  //     identity_no : id,
  //     Age: age,
  //     Contact: contact,
  //     Address: address,
  //     Qualification: qualification,
  //     work_hours : number,
  //     contractor : skill,
  //     Price: price,
      

  //   }).then(() => {

  //     this.authService.updateRegistered(this.uid, "yes").then(async () => {
  //       (await loading).dismiss();
  //       this.route.navigateByUrl('profile')
  //     })

  //   }).catch(err => {
  //     alert(err.message)
  //   })
  // }
try(){
  console.log("*")
  this.authService.signOut();
}
  search(event: any) {
  
    const searchTerm = event.target.value.toLowerCase();
 
    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService.search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          
          this.coodinateses = features.map(feat => feat.geometry)
          this.addresses = features.map(feat => feat.place_name)
          this.list = features;
          console.log(this.addresses)
          console.log(this.list)
        });
    } else {
      this.addresses = [];
    }
    console.log(searchTerm);
  }
  clear() {
    this.addresses = []
    console.log("hello")
  }

  onSelect(address, i) {
    this.selectedAddress = address;
    //  selectedcoodinates=
    this.addresses = [];
    console.log(this.selectedAddress)


    console.log("lng:" + JSON.stringify(this.list[i].geometry.coordinates[0]))
    console.log("lat:" + JSON.stringify(this.list[i].geometry.coordinates[1]))
    this.lng = JSON.stringify(this.list[i].geometry.coordinates[0])
    this.lat = JSON.stringify(this.list[i].geometry.coordinates[1])

    console.log("index =" + i)
    

    //add to FireBase
    // this.dog.collection('coordinate').add({
    //   lat: this.temp.coordinates[1],
    //   lng: this.temp.coordinates[0],
    //   address: address,
    // }).then(function (ref) {
    //   console.log("document was written with ID : " + ref);
    //   alert("physical address : " + address + " , saved successful..")
    // }).catch(function (ee) {
    //   console.log(ee)
    //   console.log("error while processing ..")
    // });
   
  }
  ngOnInit() {
  }
  CreateAccount() {
    ​
       
        this.RegisterService.signup(
          this.name,
          this.surname,
          this.gender,
          this.age,
          this.email,
          this.contact,
          this.address,
          this.qualification,
          this.Status,
          this.price,
          this.password,
          this.passwo,
        ).then((data) => {
          console.log(data);
        })
      }
}
