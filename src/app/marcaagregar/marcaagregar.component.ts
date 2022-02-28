import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Marca } from '../shared/acmebs';

@Component({
  selector: 'app-marcaagregar',
  templateUrl: './marcaagregar.component.html',
  styleUrls: ['./marcaagregar.component.css']
})
export class MarcaagregarComponent implements OnInit {

  constructor(private acmeService: AcmeserviceService,
              private snackBar: MatSnackBar,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }

  marcamodel = new Marca("", undefined, )

  onSubmit() {
    this.acmeService.addMarca(this.marcamodel).subscribe(() => {      
    });
    this.snackBar.open('Marca guardado', undefined, {
      duration: 1500,
    });
  }

  volver() {
    this.router.navigate(['marca']);
  }

}
