import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Persona, tipopersona } from '../shared/acmebs';

@Component({
  selector: 'app-personaeditar',
  templateUrl: './personaeditar.component.html',
  styleUrls: ['./personaeditar.component.css']
})
export class PersonaeditarComponent implements OnInit {

  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  
  tipopersonamodel = new tipopersona("", undefined)

  public tipoPersonaA: tipopersona[] = [
  ];

  public persona: Persona = new Persona( "", "", "", "", "", "", "", "", undefined );

  constructor(private route: ActivatedRoute,private router: Router,
              private acmeService: AcmeserviceService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.obtenerTiposPersonas();
    let idPersona = this.route.snapshot.paramMap.get("id");
    this.acmeService.getPersona(idPersona).subscribe((persona_: Persona) => {
      this.persona = persona_
    });
  }

  volver() {
    this.router.navigate(['persona']);
  }

  onSubmit() {
    this.persona.idTipoPersona = this.verSeleccion;
    this.acmeService.updatePersona(this.persona).subscribe(() => {
      this.snackBar.open('Persona actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  obtenerTiposPersonas() {
    return this.acmeService
      .getTiposPersonas()
      .subscribe((tipoPersona: tipopersona[]) => {
        this.tipoPersonaA = tipoPersona        
      }
    );
  }

  capturar(){
    this.verSeleccion = this.opcionSeleccionado;
    
  }

}
