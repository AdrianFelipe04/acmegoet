import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { tipopersona } from '../shared/acmebs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tipopersonaeditar',
  templateUrl: './tipopersonaeditar.component.html',
  styleUrls: ['./tipopersonaeditar.component.css']
})
export class TipopersonaeditarComponent implements OnInit {

  public tipo_persona: tipopersona = new tipopersona("", undefined );

  constructor(private route: ActivatedRoute,
    private router: Router, private acmeService: AcmeserviceService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idTipoPersona = this.route.snapshot.paramMap.get("id");
    this.acmeService.getTipoPersona(idTipoPersona).subscribe((tipoP: tipopersona) => {
      this.tipo_persona = tipoP
    });
  }

  volver() {
    this.router.navigate(['tipopersonas']);
  }

  onSubmit() {
    this.acmeService.updateTipoPersona(this.tipo_persona).subscribe(() => {
      this.snackBar.open('Tipo actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
