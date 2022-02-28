import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Persona } from '../shared/acmebs';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public personaA: Persona[] = [
    new Persona("", "", "", "", "", "", "", "", undefined)
  ];

  constructor(private acmeService: AcmeserviceService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarPersona(persona: Persona) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${persona.primerNombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.acmeService
          .deletePersona(persona)
          .subscribe(() => {
            this.obtenerPersonas();
            this.snackBar.open('Persona eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerPersonas();
    // console.log(this.obtenerPersonas);
    console.log(this.personaA);
    
    
  }

  obtenerPersonas() {
    return this.acmeService
      .getPersonas()
      .subscribe((persona: Persona[]) => {
        this.personaA = persona        
      }
        );
  }
  

}
