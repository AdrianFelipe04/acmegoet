import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipopersonaComponent } from './tipopersona/tipopersona.component';
import { ColorComponent } from './color/color.component';
import { MarcaComponent } from './marca/marca.component';
import { PersonaComponent } from './persona/persona.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { TipovehiculoComponent } from './tipovehiculo/tipovehiculo.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { MaterialModule } from './material.module';
// import { AgregartipopersonaComponent } from './agregartipopersona/agregartipopersona.component';
import { TipopersonaagregarComponent } from './tipopersonaagregar/tipopersonaagregar.component';
import { TipopersonaeditarComponent } from './tipopersonaeditar/tipopersonaeditar.component';
import { ColoragregarComponent } from './coloragregar/coloragregar.component';
import { ColoreditarComponent } from './coloreditar/coloreditar.component';
import { MarcaagregarComponent } from './marcaagregar/marcaagregar.component';
import { MarcaeditarComponent } from './marcaeditar/marcaeditar.component';
import { TipovehiculoagregarComponent } from './tipovehiculoagregar/tipovehiculoagregar.component';
import { TipovehiculoeditarComponent } from './tipovehiculoeditar/tipovehiculoeditar.component';
import { PersonaagregarComponent } from './personaagregar/personaagregar.component';
import { PersonaeditarComponent } from './personaeditar/personaeditar.component';
import { VehiculoagregarComponent } from './vehiculoagregar/vehiculoagregar.component';
import { VehiculoeditarComponent } from './vehiculoeditar/vehiculoeditar.component';
import { ListaPersonaPipe } from './lista-persona.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TipopersonaComponent,
    ColorComponent,
    MarcaComponent,
    PersonaComponent,
    VehiculoComponent,
    TipovehiculoComponent,
    DialogoConfirmacionComponent,
    TipopersonaagregarComponent,
    TipopersonaeditarComponent,
    ColoragregarComponent,
    ColoreditarComponent,
    MarcaagregarComponent,
    MarcaeditarComponent,
    TipovehiculoagregarComponent,
    TipovehiculoeditarComponent,
    PersonaagregarComponent,
    PersonaeditarComponent,
    VehiculoagregarComponent,
    VehiculoeditarComponent,
    ListaPersonaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule 
  ],
  entryComponents:[
    DialogoConfirmacionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
