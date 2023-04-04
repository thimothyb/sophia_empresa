import { Component, OnInit } from '@angular/core';
import {CursosService} from '../services/cursos.service';
import {listamienbrosI} from '../../empresa/modelos/listamienbros.interface';

@Component({
  selector: 'app-menbresia',
  templateUrl: './menbresia.component.html',
  styleUrls: ['./menbresia.component.css']
})
export class MenbresiaComponent implements OnInit {


  mienbros:listamienbrosI[] | undefined;

  constructor( private CursosService: CursosService) { }

  ngOnInit(): void {
    this.CursosService.buscarCurso().subscribe(data => {
      this.mienbros =data
      console.log(data)
    })
  }
}
