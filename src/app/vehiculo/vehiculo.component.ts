import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Vehiculo } from '../shared/acmebs';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  public vehiculoA: Vehiculo[] = [
    new Vehiculo("", "", "", "", "", "", undefined)
  ];

  constructor(private acmeService: AcmeserviceService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarVehiculo(vehiculo: Vehiculo) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${vehiculo.placa}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.acmeService
          .deleteVehiculo(vehiculo)
          .subscribe(() => {
            this.ObtenerVehiculo();
            this.snackBar.open('Vehiculo eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.ObtenerVehiculo();
  }

  ObtenerVehiculo() {
    return this.acmeService
      .getVehuculos()
      .subscribe((vehiculo: Vehiculo[]) => {
        this.vehiculoA = vehiculo        
      }
        );
  }

}
