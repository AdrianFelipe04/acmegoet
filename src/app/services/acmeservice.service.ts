import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Color, Marca, Persona, tipopersona, TipoVehiculo, Vehiculo } from '../shared/acmebs';

@Injectable({
  providedIn: 'root'
})
export class AcmeserviceService {

  baseUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }

//////////////////////////////////////////////TIPO PERSONA////////////////////////////////////////////////////
getTiposPersonas() {
  return this.http.get(`${this.baseUrl}TipoPersona/selectAll.php`);
}

getTipoPersona(id: string | number) {
  return this.http.get(`${this.baseUrl}TipoPersona/select.php?idTipoPersona=${id}`);
}

addTipoPersona(tipopersona: tipopersona) {
  console.log(tipopersona);
  
  return this.http.post(`${this.baseUrl}TipoPersona/insert.php`, tipopersona);
}

deleteTipoPersona(tipopersona: tipopersona) {
  return this.http.delete(`${this.baseUrl}TipoPersona/delete.php?idTipoPersona=${tipopersona.idTipoPersona}`);
}

updateTipoPersona(tipopersona: tipopersona) {
  return this.http.put(`${this.baseUrl}TipoPersona/update.php`, tipopersona);
}
//////////////////////////////////////////////COLOR////////////////////////////////////////////////////
  getColores() {
    return this.http.get(`${this.baseUrl}Color/selectAll.php`);
  }

  getColor(id: string | number) {
    return this.http.get(`${this.baseUrl}Color/select.php?idColor=${id}`);
  }

  addColor(color: Color) {    
    return this.http.post(`${this.baseUrl}Color/insert.php`, color);
  }

  deleteColor(color: Color) {
    return this.http.delete(`${this.baseUrl}Color/delete.php?idColor=${color.idColor}`);
  }

  updateColor(color: Color) {    
    return this.http.put(`${this.baseUrl}Color/update.php`, color);
  }

  //////////////////////////////////////////////MARCA////////////////////////////////////////////////////
  getMarcas() {
    return this.http.get(`${this.baseUrl}Marca/selectAll.php`);
  }

  getMarca(id: string | number) {
    return this.http.get(`${this.baseUrl}Marca/select.php?idMarca=${id}`);
  }

  addMarca(marca: Marca) {    
    return this.http.post(`${this.baseUrl}Marca/insert.php`, marca);
  }

  deleteMarca(marca: Marca) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');    
    // ,{ headers }
    return this.http.delete(`${this.baseUrl}Marca/delete.php?idMarca=${marca.idMarca}`);
  }

  updateMarca(marca: Marca) {    
    return this.http.put(`${this.baseUrl}Marca/update.php`, marca);
  }

  //////////////////////////////////////////////TIPO VEHICULO////////////////////////////////////////////////////
  getTipoVehiculos() {
    return this.http.get(`${this.baseUrl}TipoVehiculo/selectAll.php`);
  }

  getTipoVehiculo(id: string | number) {
    return this.http.get(`${this.baseUrl}TipoVehiculo/select.php?idTipoVehiculo=${id}`);
  }

  addTipoVehiculo(tipoVehiculo: TipoVehiculo) {    
    return this.http.post(`${this.baseUrl}TipoVehiculo/insert.php`, tipoVehiculo);
  }

  deleteTipoVehiculo(tipoVehiculo: TipoVehiculo) {
    return this.http.delete(`${this.baseUrl}TipoVehiculo/delete.php?idTipoVehiculo=${tipoVehiculo.idTipoVehiculo}`);
  }

  updateTipoVehiculo(tipoVehiculo: TipoVehiculo) {    
    return this.http.put(`${this.baseUrl}TipoVehiculo/update.php`, tipoVehiculo);
  }

  //////////////////////////////////////////////PERSONA////////////////////////////////////////////////////
  getPersonas() {
    return this.http.get(`${this.baseUrl}Persona/selectAll.php`);
  }

  getPersona(id: string | number) {
    return this.http.get(`${this.baseUrl}Persona/select.php?idPersona=${id}`);
  }

  addPersona(persona: Persona) {   
    console.log(persona);
     
    return this.http.post(`${this.baseUrl}Persona/insert.php`, persona);
  }

  deletePersona(persona: Persona) {
    return this.http.delete(`${this.baseUrl}Persona/delete.php?idPersona=${persona.idPersona}`);
  }

  updatePersona(persona: Persona) {    
    return this.http.put(`${this.baseUrl}Persona/update.php`, persona);
  }

  //////////////////////////////////////////////VEHICULO////////////////////////////////////////////////////
  getVehuculos() {
    return this.http.get(`${this.baseUrl}Vehiculo/selectAll.php`);
  }

  getVehiculo(id: string | number) {
    return this.http.get(`${this.baseUrl}Vehiculo/select.php?idVehiculo=${id}`);
  }

  addVehiculo(vehiculo: Vehiculo) {
    console.log(vehiculo);
        
    return this.http.post(`${this.baseUrl}Vehiculo/insert.php`, vehiculo);
  }

  deleteVehiculo(vehiculo: Vehiculo) {
    return this.http.delete(`${this.baseUrl}Vehiculo/delete.php?idVehiculo=${vehiculo.idVehiculo}`);
  }

  updateVehiculo(vehiculo: Vehiculo) {
    return this.http.put(`${this.baseUrl}Vehiculo/update.php`, vehiculo);
  }
}

