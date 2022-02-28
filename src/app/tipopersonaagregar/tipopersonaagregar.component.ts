import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AcmeserviceService } from '../services/acmeservice.service';
import { tipopersona } from '../shared/acmebs';

@Component({
  selector: 'app-tipopersonaagregar',
  templateUrl: './tipopersonaagregar.component.html',
  styleUrls: ['./tipopersonaagregar.component.css']
})
export class TipopersonaagregarComponent implements OnInit {

  constructor(private acmeService: AcmeserviceService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  tipopersonamodel = new tipopersona("", undefined, )

  onSubmit() {
    //debugger
    this.acmeService.addTipoPersona(this.tipopersonamodel).subscribe(() => {      
      
      
    });
    this.snackBar.open('Tipo guardado', undefined, {
      duration: 1500,
    });
    // this.router.navigate(['tipopersonas']);
  }

  volver() {
    this.router.navigate(['tipopersonas']);
  }

}
