import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {DandService} from "../../services/dand.service";
import {Language, Similarity} from "../../models";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {
  language: Language = {
    text: '',
    time:0,
    detectedLangs:[],
    timestamp:''
  }

  clean: boolean = false;
  text: string = '';

  constructor(private route: ActivatedRoute, private dandService: DandService) {

  }

  ngOnInit(): void {
  }

  getLanguageDetection(){
    this.dandService.getLanguage(
      this.text,
      this.clean
    ).subscribe(language =>{
      this.text = '',
      this.language = language
    })
  }
}
