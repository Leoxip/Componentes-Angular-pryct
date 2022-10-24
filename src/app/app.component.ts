import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
  title = 'stheven-app';
   public listdevideos:Array<any> = []
  ngOnInit(): void {
    this.listdevideos = [
      {
        title:'Video 1',
        subtitle:'Subtitle video 1',
        img: "https://media.giphy.com/media/LjsI6VUVlpmnK/giphy.gif"
      },
      {
        title:'Video 2',
        subtitle:'Subtitle video 2',
        img: "https://media.giphy.com/media/DFjKkBvlaaFLa/giphy.gif"
      },
      {
        title:'Video 3',
        subtitle:'Subtitle video 3',
        img: "https://media.giphy.com/media/MB1KZC5SbTo3arEv6k/giphy.gif"
      }
    ]

  }
}
