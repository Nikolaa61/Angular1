import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anotacija, Language, Sentiment, Similarity} from "../models";
import { environment } from 'src/environments/environment';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class DandService {

  private readonly apiUrl = environment.dandApi
  history: string[] = [];

  constructor(private httpClient: HttpClient) { }

  getSimilarity(text1: string, text2: string){
    this.dodajLog(new Date(), "GET", `${this.apiUrl}/datatxt/sim/v1/?text1="${text1}"&text2="${text2}"&token=${(localStorage.getItem('token'))}`);
    return this.httpClient.get<Similarity>(`${this.apiUrl}/datatxt/sim/v1/?text1="${text1}"&text2="${text2}"&token=${(localStorage.getItem('token'))}`);
  }

  getLanguage(text: string, clean: boolean){
    this.dodajLog(new Date(), "GET", `${this.apiUrl}/datatxt/li/v1/?text=${text}&clean=${clean}&token=${localStorage.getItem('token')}`);
    return this.httpClient.get<Language>(`${this.apiUrl}/datatxt/li/v1/?text=${text}&clean=${clean}&token=${localStorage.getItem('token')}`);
  }

  getSentiment(text: string, lang: string){
    this.dodajLog(new Date(), "GET", `${this.apiUrl}/datatxt/sent/v1/?text=${text}&lang=${lang}&token=${localStorage.getItem('token')}`);
    return this.httpClient.get<Sentiment>(`${this.apiUrl}/datatxt/sent/v1/?text=${text}&lang=${lang}&token=${localStorage.getItem('token')}`);
  }

  getAnotacija(text: string, min_confidence: number, include: string){
    this.dodajLog(new Date(), "GET", `${this.apiUrl}/datatxt/nex/v1/?text=${text}&min_confidence=${min_confidence}&include=${include}&token=${localStorage.getItem('token')}`);
    return this.httpClient.get<Anotacija>(`${this.apiUrl}/datatxt/nex/v1/?text=${text}&min_confidence=${min_confidence}&include=${include}&token=${localStorage.getItem('token')}`);
  }

  dodajLog(datum: Date, method: string, url: string){


    this.history.push('['+ moment(datum).format('DD.MM.YYYY HH:MM:SS') + ']' + " " + method + " " + url);
  }

  getHistory(){
    return this.history;
  }
}
