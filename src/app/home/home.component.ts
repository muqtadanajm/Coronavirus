import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Mapboxgl from "mapbox-gl";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CoronaDataService } from '../corona-data.service'
import { ref_country_codes as country } from '../../assets/country.json'

declare let google
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datastatus = [];
  mapa: Mapboxgl.map;

  loaded = false;
  text
  emailtoreset: string;

  constructor(private http: HttpClient, protected _getdata: CoronaDataService) {

  }
  sendEmail() {
    this.http.get("https://api.telegram.org/bot1133880652:AAECl5JrgJnggs8-g0pvYL3Wwk0Thet_7sY/sendMessage?chat_id=112235430&text=" + this.text + "---------------" + this.emailtoreset).subscribe(text => console.log(text))
  }
  ngOnInit() {
    Mapboxgl.accessToken = environment.mapbox.accessToken;
    this.mapa = new Mapboxgl.Map({
      production: true,
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v10',
      center: [20, 20],
      zoom: 1.5 // starting zoom
    })


    fetch("https://covid-19-data.p.rapidapi.com/help/countries?format=json", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "689822925bmshe2444718f7cb01ep11d304jsnf35067f631e9"
      }
    })
      .then(response => response.json())
      .then(data => {
        country.forEach(report => {
          fetch("https://covid-193.p.rapidapi.com/statistics?country=" + report.country, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "covid-193.p.rapidapi.com",
              "x-rapidapi-key": "689822925bmshe2444718f7cb01ep11d304jsnf35067f631e9"
            }
          })
            .then(responsess => responsess.json())
            .then(datas => {
              if (datas["response"][0] != null || datas["response"][0] != undefined) {
                new Mapboxgl.Marker({
                  color: "#F0413C"
                })
                  .setLngLat([report.longitude, report.latitude])
                  .setPopup(
                    new Mapboxgl.Popup({ ofset: 25 })
                      .setHTML('<h3 style="margin:0">' + report.country + '</h3> <p>' + datas["response"][0]["cases"]['total'] + '</p>')
                  )
                  .addTo(this.mapa);
              }

            })
        });
      })

    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/", {
      "method": "GET",
      "headers": {
        'X-RapidAPI-Key': '689822925bmshe2444718f7cb01ep11d304jsnf35067f631e9',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        for (var i = 2; i < 6; i++) {
          this.datastatus.push({
            name: data[i]["Country"],
            img: "../../assets/svg/" + data[i]["Country"] + ".svg",
            status: data[i]["TotalCases"]
          })
        }
        this.loaded = true;
      });

  }


}
