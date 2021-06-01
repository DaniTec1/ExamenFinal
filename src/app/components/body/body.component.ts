import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  lista:Array<String> = ["Daniel","Joaquin","Arturo"]
  constructor() { }

  ngOnInit(): void {
  }

}
