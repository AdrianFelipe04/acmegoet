import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { TipoVehiculo } from '../shared/acmebs';

@Component({
  selector: 'app-tipovehiculoeditar',
  templateUrl: './tipovehiculoeditar.component.html',
  styleUrls: ['./tipovehiculoeditar.component.css']
})
export class TipovehiculoeditarComponent implements OnInit {

  public tipoVehiculo: TipoVehiculo = new TipoVehiculo("", undefined );

  constructor(private route: ActivatedRoute,private router: Router,
              private acmeService: AcmeserviceService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idTipoVehiculo = this.route.snapshot.paramMap.get("id");
    this.acmeService.getTipoVehiculo(idTipoVehiculo).subscribe((tipoVehiculo_: TipoVehiculo) => {
      this.tipoVehiculo = tipoVehiculo_
    });
  }

  volver() {
    this.router.navigate(['tipovehiculo']);
  }

  onSubmit() {
    this.acmeService.updateTipoVehiculo(this.tipoVehiculo).subscribe(() => {
      this.snackBar.open('Tipo actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
