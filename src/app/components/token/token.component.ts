import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor() { }

  token: string = '';

  ngOnInit(): void {
  }

  sacuvajToken(){
    localStorage.setItem('token', this.token);
    this.token = '';
  }
}
