import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../Service/auth-guard.service';
import { MapboxService } from '../../Service/mapbox.service';
import mapboxgl from 'mapbox-gl';
import * as firebase from 'firebase';
import { firestore } from 'firebase';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { ExitProgramService } from 'src/app/Service/exit-program.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posLng : number;
  posLat : number;
  pos : any = [];
  coords : any = [];

  

  name;
  surname;
  gender;
  age;
  email;
  contact;
  address;
  qualification;
  price;
  password;
  category;
  confirm_password;
  Status = true;
  
  register_form:FormGroup;
  Key;
  constructor(private authService : AuthGuardService,
              private MapboxService : MapboxService,
              public formGroup:FormBuilder,
              public exitProgramService: ExitProgramService,
              private route :Router, ) { 
    if (navigator.geolocation) {
      // 🗺️ yep, we can proceed!
      console.log("success geolocation")
      navigator.geolocation.getCurrentPosition(pos => {
        this.posLng = pos.coords.longitude;
        this.posLat = pos.coords.latitude
        console.log(this.posLng)
        console.log(this.posLat)
        this.coords[0] = pos.coords.longitude
        this.coords[1] = pos.coords.latitude;
        console.log(this.coords)
      });
    } else {
      // no can do
      console.log("fail geolocation")
    }

    
    



    // db.collection("category/").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log(doc.data().Address);
    //     this.GraduateArray.push(doc.data());
    //     this.total_grads = this.total_grads + 1;
    //     if(doc.data().Status == true){
    //       this.working = this.working + 1;
    //     }else{
    //       this.not_working = this.not_working + 1;
    //     }

    //     this.GraphData.push({
    //       Working: this.working,
    //       NotWorking: this.not_working,
    //       TotalGrads: this.total_grads
    //     })
    //     });
    // });

    this.register_form = formGroup.group({
      name: ["",[Validators.required]],
      surname: ["",[Validators.required]],
      gender: ["",[Validators.required]],
      age: ["",[Validators.required]],
      email: ["",[Validators.required]],
      contact: ["",[Validators.required]],
      address: ["",[Validators.required]],
      qualification: ["",[Validators.required]],
      category: ["",[Validators.required]],
      price: ["",[Validators.required]],
      password: ["",[Validators.required]],
      confirm_password: ["",[Validators.required]],
      status: ["",[Validators.required]]
    })
  }

try(){
  console.log(this.pos); 
  this.route.navigateByUrl('register')
}
  

  
  ngOnInit() {

    console.log(this.coords)
    
    var coordinates = document.getElementById('coordinates');
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTF6Z2huMGx6czNtbnY2aWdwdWU5NiJ9._Dj2fBUZgCoryf1ehZTweQ';
    // var map = new mapboxgl.Map({
      
    // // container: 'map', // container id
    // style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    // center: [28.2631339,-25.7515526],  // starting position [lng, lat]
    // zoom: 9 // starting zoom
    
    // });

    var marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([28.2631339,-25.7515526]);
      // .addTo(map);
       
      function onDragEnd() {
        var lngLat = marker.getLngLat();
        this.pos = lngLat.lng,lngLat.lat;
       
        coordinates.style.display = 'block';
        console.log(this.pos);
       
        }
        
        marker.on('dragend', onDragEnd);
        this.MapboxService.run(this.pos);
        
        // var Chart = require('chart.js');

      //   var myChart = new Chart('myChart', {
      //     type: 'line',
      //     data: {
      //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      //         datasets: [{
      //             label: '# of Votes',
      //             data: [12, 19, 3, 5, 2, 3],
      //             backgroundColor: [
      //                 'rgba(255, 99, 132, 0.2)',
      //                 'rgba(54, 162, 235, 0.2)',
      //                 'rgba(255, 206, 86, 0.2)',
      //                 'rgba(75, 192, 192, 0.2)',
      //                 'rgba(153, 102, 255, 0.2)',
      //                 'rgba(255, 159, 64, 0.2)'
      //             ],
      //             borderColor: [
      //                 'rgba(255, 99, 132, 1)',
      //                 'rgba(54, 162, 235, 1)',
      //                 'rgba(255, 206, 86, 1)',
      //                 'rgba(75, 192, 192, 1)',
      //                 'rgba(153, 102, 255, 1)',
      //                 'rgba(255, 159, 64, 1)'
      //             ],
      //             borderWidth: 1
      //         }]
      //     },
      //     options: {
      //         scales: {
      //             yAxes: [{
      //                 ticks: {
      //                     beginAtZero: true
      //                 }
      //             }]
      //         }
      //     }
      // });
    }

    CreateAccount() {

      // this.Key = this.exitProgramService.generateKey();
      this.exitProgramService.signup(
        this.name,
        this.surname,
        this.gender,
        this.age,
        this.email,
        this.contact,
        this.address,
        this.qualification,
        this.category,
        this.Status,
        this.price
        // this.password
      ).then((data) => {
        console.log(data);
      })
    }
  }


  
  
