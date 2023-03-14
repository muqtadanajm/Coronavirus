import { Injectable } from '@angular/core';
import * as Mapboxgl from "mapbox-gl";
import { environment } from './../environments/environment';
import { ref_country_codes as country } from '../assets/country.json'
@Injectable({
  providedIn: 'root'
})
export class CoronaDataService {
  mapa: Mapboxgl.map;
  iraqdata = [];
  datastatus = [];
  allstatus = [];
  alldata = [];
  constructor() {


  }
  ngOnInit() {
    this.getmarker()
  }

  async myiraq() {
    const response = await fetch("https://covid-193.p.rapidapi.com/statistics?country=Iraq", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "689822925bmshe2444718f7cb01ep11d304jsnf35067f631e9"
      }
    })
      .then(responsess => responsess.json())
      .then(datas => {

        var stay = datas.response[0].cases.total - datas.response[0].deaths.total - datas.response[0].cases.recovered;
        var range = Math.floor(((datas.response[0].deaths.total + datas.response[0].cases.recovered) / datas.response[0].cases.total) * 100)
        this.iraqdata.push({
          allcases: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(datas.response[0].cases.total),
          alldeaths: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(datas.response[0].deaths.total),
          allrecovered: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(datas.response[0].cases.recovered),
          newcases: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(datas.response[0].cases.new),
          newdeaths: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(datas.response[0].deaths.new),
          carnt: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(stay),
          tests: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(datas.response[0].tests.total),
          day: datas.response[0].day,
          range: range
        })
      })
    return this.iraqdata;
  }

  async getalldata() {

      fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/", {
        "method": "GET",
        "headers": {
          'X-RapidAPI-Key': '689822925bmshe2444718f7cb01ep11d304jsnf35067f631e9',
          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      })
        .then(response => response.json())
        .then(data => {
          this.allstatus.push(data);
        });
  
    return this.allstatus
  }

  async getall() {
   

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
                status: data[i]["TotalCases"],
                recovered: data[i]["TotalRecovered"],
                range: 0
              })
            }
        this.getrange(0);
        this.getrange(1);
        this.getrange(2);
          });
    
        
  
    return this.datastatus
  }


  async getallstatus() {

    const respon = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "x-rapidapi-key": "689822925bmshe2444718f7cb01ep11d304jsnf35067f631e9"
      }
    })
      .then(response => response.json())
      .then(data => {
        var stay = data[0]['TotalCases'] - data[0]['TotalDeaths'] - data[0]['TotalRecovered']
        this.alldata.push({
          status: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data[0]['TotalCases']),
          deaths: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data[0]['TotalDeaths']),
          recovered: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data[0]['TotalRecovered']),
          carnt: new Intl.NumberFormat('en-US', { style: 'decimal' }).format(stay)
        })
      })

    return this.alldata;
  }
  getrange(num) {
    fetch("https://covid-193.p.rapidapi.com/statistics?country=" + this.datastatus[num]['name'], {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "689822925bmshe2444718f7cb01ep11d304jsnf35067f631e9"
      }
    })
      .then(responsess => responsess.json())
      .then(datas => {
        let range = ((datas['response'][0]['deaths']['total'] + datas['response'][0]['cases']['recovered']) / datas['response'][0]['cases']['total']) * 100;
        this.datastatus[num].range = Math.floor(range);
        
      })
  }

  getmarker() {
    Mapboxgl.accessToken = environment.mapbox.accessToken;
    this.mapa = new Mapboxgl.Map({
      production: false,
      container: 'maps', // container id
      style: 'mapbox://styles/mapbox/light-v10',
      center: [20, 20],
      zoom: 1.5 // starting zoom
    });
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

  }


}

