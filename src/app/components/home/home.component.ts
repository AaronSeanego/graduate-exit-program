import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../Service/auth-guard.service';
import { MapboxService } from '../../Service/mapbox.service';
import mapboxgl from 'mapbox-gl';
import * as firebase from 'firebase';
import { firestore } from 'firebase';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { ExitProgramService } from 'src/app/Service/exit-program.service';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';



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

  GraduateArray = [];
  working = 0;
  not_working = 0;
  total_grads = 0;
  GraphData = [];

  cWorking = 0;
  cNotWorking = 0;
  cTotal = 0;

  egWorking = 0;
  egNotWorking = 0;
  egTotal = 0;

  pWorking = 0;
  pNotWorking = 0;
  pTotal = 0;

  latlng;
  geocoder: any;

  temp;
  temp1;
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

  db = firebase.firestore();
  pieChart:any [];
  constructor(private authService : AuthGuardService,
              private MapboxService : MapboxService,
              public formGroup:FormBuilder,
              public exitProgramService: ExitProgramService,
              private route :Router,
              private http: HttpClient ) { 
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

      // var Chart = require('chart.js');
        var myChart = new Chart('myChart', {
          type: 'line',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
    // var randomScalingFactor = function() {
		// 	return Math.round(Math.random() * 100);
		// };

    this.db.collection("Graduate/").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data().Address);
        this.GraduateArray.push(doc.data());
        this.total_grads = this.total_grads + 1;
        if(doc.data().Status == true){
          this.working = this.working + 1;
        }else{
          this.not_working = this.not_working + 1;
        }

        if((doc.data().Category == "Carpentry") && (doc.data().Status == true)){
          this.cWorking = this.cWorking + 1;
        }else if((doc.data().Category == "Carpentry") && (doc.data().Status == false)){
          this.cNotWorking = this.cNotWorking + 1;
        }

        if(doc.data().Category == "Carpentry"){
          this.cTotal = this.cTotal + 1;
        }

        if((doc.data().Category == "Electrical Engineering") && (doc.data().Status == true)){
          this.egWorking = this.egWorking + 1;
        }else if((doc.data().Category = "Eletrical Engineering") && (doc.data().Status == false)){
          this.egNotWorking = this.egNotWorking + 1;
        }

        if(doc.data().Category == "Electrical Engineering"){
          this.cTotal = this.cTotal + 1;
        }

        if((doc.data().Category == "Plumbing") && (doc.data().Status == true)){
          this.pWorking = this.pWorking + 23;
        }else if((doc.data().Category == "Plumbing") && (doc.data().Status == false)) {
          this.pNotWorking = this.pNotWorking + 43;
        }

        if(doc.data().Category == "Plumbing"){
          this.pTotal = this.pTotal + 1;
        }
        

        this.GraphData.push({
          Working: this.working,
          NotWorking: this.not_working,
          TotalGrads: this.total_grads
        })

        });

        var myChart = new Chart('Pie01', {
          type: 'pie',
          data: {
            datasets: [{
              // label: 'Number of Users Registered Monthly',
              data: [43, 65],
              backgroundColor: [
                '#E4A9A8',
                '#26C6DA',
                'yellow'
              ],
              label: 'Dataset 1'
            }],
            labels: [
              'Working',
              'Not Working',
            ]
          },
          options: {
            responsive: true
          }
        });

        var myChart = new Chart('Pie02', {
          type: 'pie',
          data: {
            datasets: [{
              // label: 'Number of Users Registered Monthly',
              data: [41, 23],
              backgroundColor: [
                '#E4A9A8',
                '#26C6DA',
                'yellow'
              ],
              label: 'Dataset 1'
            }],
            labels: [
              'Working',
              'Not Working',
            ]
          },
          options: {
            responsive: true
          }
        });

        var myChart = new Chart('Pie03', {
          type: 'pie',
          data: {
            datasets: [{
              // label: 'Number of Users Registered Monthly',
              data: [5, 20],
              backgroundColor: [
                '#E4A9A8',
                '#26C6DA',
                'yellow'
              ],
              label: 'Dataset 1'
            }],
            labels: [
              'Working',
              'Not Working',
            ]
          },
          options: {
            responsive: true
          }
        });
    });

    console.log(this.coords)
    
    var coordinates = document.getElementById('coordinates');
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTF6Z2huMGx6czNtbnY2aWdwdWU5NiJ9._Dj2fBUZgCoryf1ehZTweQ';
    var map = new mapboxgl.Map({
      
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [28.2631339,-25.7515526],  // starting position [lng, lat]
    zoom: 9 // starting zoom
    
    });

    this.geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: {
        color: 'orange',
        draggable : true,
        
      },
      
      placeholder: 'Search for places ', // Placeholder text for the search bar
      // Coordinates of UC Berkeley
    });


    this.latlng =  map.addControl(this.geocoder);
    
    var marker;
    // var marker = new mapboxgl.Marker({
    //   draggable: true
    //   })
    //   .setLngLat([28.2631339,-25.7515526])
    //   .addTo(map);
       
      function onDragEnd() {
        var lngLat = marker.getLngLat();
        this.temp = lngLat.lng;
        this.temp1 = lngLat.lat;
       
        coordinates.style.display = 'block';
        console.log(lngLat.lng);
        console.log(lngLat.lat);
        console.log(this.pos);
       
        }

      map.on('load', (event) =>{
        map.addSource('firebase', {
          type : JsonPipe,
          data : {
            type : 'FeatureCollection',
            features : []
          }
        });

        // this.source = 
      })
        
        // marker.on('dragend', onDragEnd);
        this.MapboxService.run(this.pos);

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

      var myChart = new Chart('CarpenterChart', {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
                label: 'Carpenter',
                data: [12, 19, 3, 5, 2, 3,42,54,12,21,23,65],
                backgroundColor: [
                    'rgba(8, 139, 247, 0)',
                    'rgba(8, 139, 247, 0)',
                    'rgba(8, 139, 247, 0)',
                    'rgba(8, 139, 247, 0)',
                    'rgba(8, 139, 247, 0)',
                    'rgba(8, 139, 247, 0)'
                ],
                borderColor: [
                    'rgba(177, 18, 23, 1)',
                    'rgba(177, 18, 23, 1)',
                    'rgba(177, 18, 23, 1)',
                    'rgba(177, 18, 23, 1)',
                    'rgba(177, 18, 23, 1)',
                    'rgba(177, 18, 23, 1)'
                ],
                borderWidth: 2
            },{
              label: 'Electrical Engineering',
                data: [54, 75, 32, 32, 45, 12,65,5,17,32,15,43],
                backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)',
                    'rgba(255, 159, 64, 0)'
                ],
                borderColor: [
                    'rgba(8, 139, 247, 1)',
                    'rgba(8, 139, 247, 1)',
                    'rgba(8, 139, 247, 1)',
                    'rgba(8, 139, 247, 1)',
                    'rgba(8, 139, 247, 1)',
                    'rgba(8, 139, 247, 1)'
                ],
                borderWidth: 2
            },{
              label: 'Plumbing',
                data: [12, 45, 55, 32, 1, 23,3,74,62,75,23,15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)',
                    'rgba(255, 159, 64, 0)'
                ],
                borderColor: [
                    'rgba(227, 8, 247, 1)',
                    'rgba(227, 8, 247, 1)',
                    'rgba(227, 8, 247, 1)',
                    'rgba(227, 8, 247, 1)',
                    'rgba(227, 8, 247, 1)',
                    'rgba(227, 8, 247, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    }

    gone()
    {
      console.log(this.latlng )
      this.pos[0] = this.latlng._controls[2].mapMarker._lngLat.lng;
    this.pos[1] = this.latlng._controls[2].mapMarker._lngLat.lat;
      // console.log(this.latlng._controls[2].mapMarker._lngLat )
      console.log(this.temp  + " lngitude ..")
      console.log(this.temp1  + " latitude")
      console.log( this.pos)
      
    }
    
    loc(){
  this.MapboxService.geoloc(this.pos);
  // .subscribe((data) =>{
  //                 console.log(data)
  //               });
          
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


  
  
