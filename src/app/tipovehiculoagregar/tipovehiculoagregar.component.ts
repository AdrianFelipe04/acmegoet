import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { TipoVehiculo } from '../shared/acmebs';

@Component({
  selector: 'app-tipovehiculoagregar',
  templateUrl: './tipovehiculoagregar.component.html',
  styleUrls: ['./tipovehiculoagregar.component.css']
})
export class TipovehiculoagregarComponent implements OnInit {

  constructor(private acmeService: AcmeserviceService,
              private snackBar: MatSnackBar,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }

  tipovehiculomodel = new TipoVehiculo("", undefined, )

  onSubmit() {
    this.acmeService.addTipoVehiculo(this.tipovehiculomodel).subscribe(() => {      
    });
    this.snackBar.open('Tipo guardado', undefined, {
      duration: 1500,
    });
  }

  volver() {
    this.router.navigate(['tipovehiculo']);
  }

}
