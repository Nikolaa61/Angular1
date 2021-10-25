import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DandService} from "../../services/dand.service";
import {Sentiment, Sentiment1} from "../../models";

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  sentiment1: Sentiment1={
    score: 0,
    type: ''
  }
  sentiment: Sentiment={
    sentiment: this.sentiment1,
    time: 0,
    timestamp:'',
    lang:''
  }

  text: string = '';
  lang: string ='auto';
  r: number = 0;
  g: number = 0;
  b: number = 0;
  hex: string='';

  constructor(private route: ActivatedRoute, private dandService: DandService) { }

  ngOnInit(): void {
  }

  getSentiment(){
    this.dandService.getSentiment(
      this.text,
      this.lang
    ).subscribe(sentiment=>{
      this.text = '',
      this.sentiment = sentiment
      this.r =  255 + (-255 * sentiment.sentiment.score);
      this.g = 255 *sentiment.sentiment.score;
      this.hex = this.rgbToHex(this.r, this.g, this.b);
    })
  }

  rgbToHex(r: any, g: any, b: any) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
