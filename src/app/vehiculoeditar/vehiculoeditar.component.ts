import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Color, Marca, Persona, TipoVehiculo, Vehiculo } from '../shared/acmebs';

@Component({
  selector: 'app-vehiculoeditar',
  templateUrl: './vehiculoeditar.component.html',
  styleUrls: ['./vehiculoeditar.component.css']
})
export class VehiculoeditarComponent implements OnInit {

  opcionSeleccionado1: string  = '0';
  verSeleccion1: string        = '';

  opcionSeleccionado2: string  = '0';
  verSeleccion2: string        = '';
  
  opcionSeleccionado3: string  = '0';
  verSeleccion3: string        = '';
  
  opcionSeleccionado4: string  = '0';
  verSeleccion4: string        = '';
  
  opcionSeleccionado5: string  = '0';
  verSeleccion5: string        = '';
  
  personamodel = new Persona("","","","","","","","", undefined)

  colormodel = new Color("",undefined)

  marcamodel = new Marca("", undefined)

  tipovehiculomodel = new TipoVehiculo("", undefined)

  public personaA: Persona[] = [];
  public personaB: Persona[] = [];
  public colorA: Color[] = [];
  public marcaA: Marca[] = [];
  public tipovehiculoA: TipoVehiculo[] = [];

  public vehiculo: Vehiculo = new Vehiculo( "", "", "", "", "", "", undefined );

  constructor(private route: ActivatedRoute,private router: Router,
              private acmeService: AcmeserviceService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.obtenerColores();
    this.obtenerMarcas();
    this.obtenerPersonasA();
    this.obtenerPersonasB();
    this.obtenerTipoVehiculos();
    let idVehiculo = this.route.snapshot.paramMap.get("id");
    this.acmeService.getVehiculo(idVehiculo).subscribe((vehiculo_: Vehiculo) => {
      this.vehiculo = vehiculo_      
    });
    
  }

  volver() {
    this.router.navigate(['vehiculo']);
  }

  onSubmit() {
    this.vehiculo.idColor = this.verSeleccion1;
    this.vehiculo.idMarca = this.verSeleccion2;
    this.vehiculo.idTipoVehiculo = this.verSeleccion3;
    this.vehiculo.idConductor = this.verSeleccion4;
    this.vehiculo.idPropietario = this.verSeleccion5;
    this.acmeService.updateVehiculo(this.vehiculo).subscribe(() => {
      this.snackBar.open('Vehiculo actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

  obtenerPersonasA() {
    return this.acmeService
      .getPersonas()
      .subscribe((persona: Persona[]) => {
        this.personaA = persona        
      }
    );
  }

  obtenerPersonasB() {
    return this.acmeService
      .getPersonas()
      .subscribe((persona: Persona[]) => {
        this.personaB = persona        
      }
    );
  }

  obtenerColores() {
    return this.acmeService
      .getColores()
      .subscribe((color: Color[]) => {
        this.colorA = color        
      }
    );
  }

  obtenerMarcas() {
    return this.acmeService
      .getMarcas()
      .subscribe((marca: Marca[]) => {
        this.marcaA = marca        
      }
    );
  }

  obtenerTipoVehiculos() {
    return this.acmeService
      .getTipoVehiculos()
      .subscribe((tipoVehiculo: TipoVehiculo[]) => {
        this.tipovehiculoA = tipoVehiculo        
      }
    );
  }

  capturar(){
    this.verSeleccion1 = this.opcionSeleccionado1;
    this.verSeleccion2 = this.opcionSeleccionado2;
    this.verSeleccion3 = this.opcionSeleccionado3;
    this.verSeleccion4 = this.opcionSeleccionado4;
    this.verSeleccion5 = this.opcionSeleccionado5;
    
  }

}
