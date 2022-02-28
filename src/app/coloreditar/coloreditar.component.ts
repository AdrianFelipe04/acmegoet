import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Color } from '../shared/acmebs';

@Component({
  selector: 'app-coloreditar',
  templateUrl: './coloreditar.component.html',
  styleUrls: ['./coloreditar.component.css']
})
export class ColoreditarComponent implements OnInit {

  public color: Color = new Color("", undefined );

  constructor(private route: ActivatedRoute,private router: Router,
              private acmeService: AcmeserviceService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idColor = this.route.snapshot.paramMap.get("id");
    this.acmeService.getColor(idColor).subscribe((color_: Color) => {
      this.color = color_
    });
  }

  volver() {
    this.router.navigate(['color']);
  }

  onSubmit() {
    this.acmeService.updateColor(this.color).subscribe(() => {
      this.snackBar.open('Color actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
