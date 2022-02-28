import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Marca } from '../shared/acmebs';

@Component({
  selector: 'app-marcaeditar',
  templateUrl: './marcaeditar.component.html',
  styleUrls: ['./marcaeditar.component.css']
})
export class MarcaeditarComponent implements OnInit {

  public marca: Marca = new Marca("", undefined );

  constructor(private route: ActivatedRoute,private router: Router,
              private acmeService: AcmeserviceService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idMarca = this.route.snapshot.paramMap.get("id");
    this.acmeService.getMarca(idMarca).subscribe((marca_: Marca) => {
      this.marca = marca_
    });
  }

  volver() {
    this.router.navigate(['marca']);
  }

  onSubmit() {
    this.acmeService.updateMarca(this.marca).subscribe(() => {
      this.snackBar.open('Marca actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
