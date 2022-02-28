import { Component, OnInit } from '@angular/core';
import { AcmeserviceService } from '../services/acmeservice.service';

import { tipopersona } from '../shared/acmebs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-tipopersona',
  templateUrl: './tipopersona.component.html',
  styleUrls: ['./tipopersona.component.css']
})
export class TipopersonaComponent implements OnInit {
  
  public tipoPersonaA: tipopersona[] = [
    //new tipopersona("Maggie", 5)
  ];

  constructor(private acmeService: AcmeserviceService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarTipoPersona(tipoPerson: tipopersona) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${tipoPerson.tipoPersona}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.acmeService
          .deleteTipoPersona(tipoPerson)
          .subscribe(() => {
            this.obtenerTiposPersonas();
            this.snackBar.open('Tipo eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerTiposPersonas();
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
  

}
