import { Component, OnInit } from '@angular/core';
import {DandService} from "../../services/dand.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: string[] = [];


  constructor(private dandService: DandService) { }

  ngOnInit(): void {
    this.history= this.dandService.getHistory();
  }



}
