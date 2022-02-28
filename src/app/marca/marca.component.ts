import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Marca } from '../shared/acmebs';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  public marcaA: Marca[] = [
    //new Marca("Maggie", 5)
  ];

  constructor(private acmeService: AcmeserviceService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarMarca(marca: Marca) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${marca.marca}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.acmeService
          .deleteMarca(marca)
          .subscribe(() => {
            this.obtenerMarcas();
            this.snackBar.open('Color eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerMarcas();
  }

  obtenerMarcas() {
    return this.acmeService
      .getMarcas()
      .subscribe((marca: Marca[]) => {
        this.marcaA = marca        
        }
      );
  }

}
