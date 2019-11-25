import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../Service/auth-guard.service';
import { MapboxService } from '../../Service/mapbox.service';
import mapboxgl from 'mapbox-gl';
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
  constructor(private authService : AuthGuardService,
              private MapboxService : MapboxService ) { 
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
  }

try(){
  console.log(this.pos); 
}
  
  logout(){
    this.authService.signOut();
    }
  
  ngOnInit() {

    console.log(this.coords)
    
    var coordinates = document.getElementById('coordinates');
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVvLXB1bGUiLCJhIjoiY2p4cTF6Z2huMGx6czNtbnY2aWdwdWU5NiJ9._Dj2fBUZgCoryf1ehZTweQ';
    var map = new mapboxgl.Map({
      
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [28.2631339,-25.7515526],  // starting position [lng, lat]
    zoom: 9 // starting zoom
    
    });

    var marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([28.2631339,-25.7515526])
      .addTo(map);
       
      function onDragEnd() {
        var lngLat = marker.getLngLat();
        this.pos = lngLat.lng,lngLat.lat;
       
        coordinates.style.display = 'block';
        console.log(this.pos);
       
        }
        
        marker.on('dragend', onDragEnd);
        this.MapboxService.run(this.pos);
        

    }
  }


  
  
