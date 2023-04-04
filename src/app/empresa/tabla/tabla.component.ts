import { Component, OnInit } from '@angular/core';
import {CursosService} from '../services/cursos.service';
import {listacursosI} from '../modelos/listacursos.interface';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  curso:listacursosI[] | undefined;

  constructor( private CursosService: CursosService) { }

  ngOnInit(): void {
    this.CursosService.buscarCurso().subscribe(data => {
      this.curso =data
      console.log(data)
    })
  }

}
