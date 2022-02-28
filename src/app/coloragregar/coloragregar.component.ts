import { Component, OnInit } from '@angular/core';
import { AcmeserviceService } from '../services/acmeservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Color } from '../shared/acmebs';

@Component({
  selector: 'app-coloragregar',
  templateUrl: './coloragregar.component.html',
  styleUrls: ['./coloragregar.component.css']
})
export class ColoragregarComponent implements OnInit {

  constructor(private acmeService: AcmeserviceService,
              private snackBar: MatSnackBar,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }

  colormodel = new Color("", undefined, )

  onSubmit() {
    this.acmeService.addColor(this.colormodel).subscribe(() => {      
    });
    this.snackBar.open('Color guardado', undefined, {
      duration: 1500,
    });
  }

  volver() {
    this.router.navigate(['color']);
  }


}
