import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AcmeserviceService } from '../services/acmeservice.service';
import { TipoVehiculo } from '../shared/acmebs';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-tipovehiculo',
  templateUrl: './tipovehiculo.component.html',
  styleUrls: ['./tipovehiculo.component.css']
})
export class TipovehiculoComponent implements OnInit {

  public tipoVehiculoA: TipoVehiculo[] = [
    //new TipoVehiculo("Maggie", 5)
  ];

  constructor(private acmeService: AcmeserviceService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarTipoVehiculo(tipoVehiculo: TipoVehiculo) {    
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${tipoVehiculo.tipoVehiculo}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.acmeService
          .deleteTipoVehiculo(tipoVehiculo)
          .subscribe(() => {
            this.obtenerTipoVehiculos();
            this.snackBar.open('Tipo eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerTipoVehiculos();
  }

  obtenerTipoVehiculos() {
    return this.acmeService
      .getTipoVehiculos()
      .subscribe((tipoVehiculo: TipoVehiculo[]) => {
        this.tipoVehiculoA = tipoVehiculo        
      }
        );
  }
}
