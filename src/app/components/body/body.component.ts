import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  lista:Array<string> = ["Daniel","Joaquin","Arturo"]
  nuevoNombre: string = "";
  
  constructor() { }

  ngOnInit(): void {

  }
  
  addName(){
    if(this.lista.length < 10){
      this.lista.push(this.nuevoNombre)
      this.nuevoNombre = ""
      console.log(this.lista)
    }else{
      alert("Arreglo Lleno de Elementos")
    }
  }

}
