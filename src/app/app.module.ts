import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { EntitiyExtractionComponent } from './components/entitiy-extraction/entitiy-extraction.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { TokenComponent } from './components/token/token.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentComponent,
    EntitiyExtractionComponent,
    TokenComponent,
    HistoryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        NoopAnimationsModule,
        MatSliderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
