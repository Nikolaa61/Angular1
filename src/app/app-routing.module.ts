import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentComponent} from "./components/sentiment/sentiment.component";
import {EntitiyExtractionComponent} from "./components/entitiy-extraction/entitiy-extraction.component";
import {TokenComponent} from "./components/token/token.component";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path:"",
    component:TokenComponent
  },
  {
    path:"similarity",
    component: TextSimilarityComponent
  },
  {
    path:"detection",
    component:LanguageDetectionComponent
  },
  {
    path:"sentiment",
    component:SentimentComponent
  },
  {
    path:"entity",
    component:EntitiyExtractionComponent
  },
  {
    path:"history",
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
