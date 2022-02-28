import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AcmeserviceService } from '../services/acmeservice.service';
import { Color, Marca, Persona, TipoVehiculo, Vehiculo } from '../shared/acmebs';

@Component({
  selector: 'app-vehiculoagregar',
  templateUrl: './vehiculoagregar.component.html',
  styleUrls: ['./vehiculoagregar.component.css']
})
export class VehiculoagregarComponent implements OnInit {

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


  constructor(private acmeService: AcmeserviceService,
              private snackBar: MatSnackBar,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.obtenerColores();
    this.obtenerMarcas();
    this.obtenerPersonasA();
    this.obtenerPersonasB();
    this.obtenerTipoVehiculos();
  }

  vehiculomodel = new Vehiculo("", "", "", "", "", "", undefined)

  onSubmit() {
    this.vehiculomodel.idColor = this.verSeleccion1;
    this.vehiculomodel.idMarca = this.verSeleccion2;
    this.vehiculomodel.idTipoVehiculo = this.verSeleccion3;
    this.vehiculomodel.idConductor = this.verSeleccion4;
    this.vehiculomodel.idPropietario = this.verSeleccion5;
    this.acmeService.addVehiculo(this.vehiculomodel).subscribe(() => {      
    });
    this.snackBar.open('Vehiculo guardado', undefined, {
      duration: 1500,
    });
  }

  volver() {
    this.router.navigate(['vehiculo']);
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
