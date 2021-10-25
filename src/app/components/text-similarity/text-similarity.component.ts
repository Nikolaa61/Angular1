import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Similarity} from "../../models";
import {DandService} from "../../services/dand.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  similarity: Similarity = {
    similarity:0,
    lang:'',
    time:0,
    langConfidence:0,
    timestamp:''
  };

  similarityForm: FormGroup;

  constructor(private route: ActivatedRoute, private dandService: DandService, private formBuilder: FormBuilder) {
    this.similarityForm = this.formBuilder.group({
      text1:['', Validators.required],
      text2:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  getSimilarity(){
    this.dandService.getSimilarity(
      this.similarityForm.get('text1')?.value,
      this.similarityForm.get('text2')?.value
    ).subscribe(similarity =>{
      this.similarityForm.reset()
      this.similarity = similarity
    })
  }

}
