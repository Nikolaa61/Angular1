import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DandService} from "../../services/dand.service";
import {Anotacija, Entity, Image} from "../../models";

@Component({
  selector: 'app-entitiy-extraction',
  templateUrl: './entitiy-extraction.component.html',
  styleUrls: ['./entitiy-extraction.component.css']
})
export class EntitiyExtractionComponent implements OnInit {

  image: Image={
    full: '',
    thumbnail: ''
  }

  entitet: Entity={
    title :'',
    categories:[],
    abstract:'',
    image: this.image
  }

  anotacija: Anotacija={
    annotations: [this.entitet],
  }

  text: string='';

  min_confidence: number=0;

  image1: boolean = false;
  abstract: boolean = false;
  categories: boolean = false;

  constructor(private route: ActivatedRoute, private dandService: DandService) { }

  ngOnInit(): void {
  }

  getEntity(){
    var include ='';
    if(this.image1){
      include += "image";
    }
    if(this.abstract){
      if(this.image1){
        include+= ",";
      }
      include+="abstract";
    }

    if(this.categories){
      if(this.image1 || this.abstract){
        include+=",";
      }
      include+= "categories"
    }
    this.dandService.getAnotacija(
      this.text,
      this.min_confidence,
      include
    ).subscribe(anotacija=>{
      this.anotacija = anotacija;
    })
  }

}
