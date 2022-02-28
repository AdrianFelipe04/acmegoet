import { Component, OnInit } from '@angular/core';
import { AcmeserviceService } from '../services/acmeservice.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Color } from '../shared/acmebs';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  public colorA: Color[] = [
    //new Color("Maggie", 5)
  ];

  constructor(private acmeService: AcmeserviceService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarColor(color: Color) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${color.color}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.acmeService
          .deleteColor(color)
          .subscribe(() => {
            this.obtenerColores();
            this.snackBar.open('Color eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerColores();
  }

  obtenerColores() {
    return this.acmeService
      .getColores()
      .subscribe((color: Color[]) => {
        this.colorA = color        
      }
        );
  }

}
