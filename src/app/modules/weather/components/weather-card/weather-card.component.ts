import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from '../../models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{
  @Input() weatherDatasInput!: WeatherDatas;

  ngOnInit(): void {
    console.log('Dados Recebidos do componente pai - weather-card', this.weatherDatasInput)
  }
}
