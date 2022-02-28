import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Persona, tipopersona } from '../shared/acmebs';

@Component({
  selector: 'app-personaagregar',
  templateUrl: './personaagregar.component.html',
  styleUrls: ['./personaagregar.component.css']
})

export class PersonaagregarComponent implements OnInit {

  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  
  tipopersonamodel = new tipopersona("", undefined)

  public tipoPersonaA: tipopersona[] = [
    new tipopersona("Maggie", 5)
  ];

  constructor(private acmeService: AcmeserviceService,
              private snackBar: MatSnackBar,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.obtenerTiposPersonas();
    console.log(this.tipopersonamodel);
    
  }

  ngOnChanges(prueba: any)  {
    
  }

  personamodel = new Persona("", "", "", "", "", "", "", "", undefined)

  onSubmit() {
    this.personamodel.idTipoPersona = this.verSeleccion;
    this.acmeService.addPersona(this.personamodel).subscribe(() => {      
    });
    this.snackBar.open('Persona guardado', undefined, {
      duration: 1500,
    });
  }

  volver() {
    this.router.navigate(['persona']);
  }

  obtenerTiposPersonas() {
    return this.acmeService
      .getTiposPersonas()
      .subscribe((tipoPersona: tipopersona[]) => {
        this.tipoPersonaA = tipoPersona
        console.log(this.tipoPersonaA);
        
      }
    );
  }

  capturar(){
    this.verSeleccion = this.opcionSeleccionado;
    
  }

}
