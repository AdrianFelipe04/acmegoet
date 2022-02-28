import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipopersonaComponent } from './tipopersona/tipopersona.component';
import { TipopersonaagregarComponent } from './tipopersonaagregar/tipopersonaagregar.component';
import { TipopersonaeditarComponent } from './tipopersonaeditar/tipopersonaeditar.component';
import { ColorComponent } from './color/color.component';
import { ColoragregarComponent } from './coloragregar/coloragregar.component';
import { ColoreditarComponent } from './coloreditar/coloreditar.component';
import { MarcaComponent } from './marca/marca.component';
import { MarcaagregarComponent } from './marcaagregar/marcaagregar.component';
import { MarcaeditarComponent } from './marcaeditar/marcaeditar.component';
import { TipovehiculoComponent } from './tipovehiculo/tipovehiculo.component';
import { TipovehiculoagregarComponent } from './tipovehiculoagregar/tipovehiculoagregar.component';
import { TipovehiculoeditarComponent } from './tipovehiculoeditar/tipovehiculoeditar.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaagregarComponent } from './personaagregar/personaagregar.component';
import { PersonaeditarComponent } from './personaeditar/personaeditar.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculoagregarComponent } from './vehiculoagregar/vehiculoagregar.component';
import { VehiculoeditarComponent } from './vehiculoeditar/vehiculoeditar.component';

const routes: Routes = [
  { path: "tipopersonas", component: TipopersonaComponent },
  { path: "tipopersonas/agregar", component: TipopersonaagregarComponent },
  { path: "tipopersonas/editar/:id", component: TipopersonaeditarComponent },
  
  { path: "color", component: ColorComponent },
  { path: "color/agregar", component: ColoragregarComponent },
  { path: "color/editar/:id", component: ColoreditarComponent },

  { path: "marca", component: MarcaComponent },
  { path: "marca/agregar", component: MarcaagregarComponent },
  { path: "marca/editar/:id", component: MarcaeditarComponent },

  { path: "tipovehiculo", component: TipovehiculoComponent },
  { path: "tipovehiculo/agregar", component: TipovehiculoagregarComponent },
  { path: "tipovehiculo/editar/:id", component: TipovehiculoeditarComponent },

  { path: "persona", component: PersonaComponent },
  { path: "persona/agregar", component: PersonaagregarComponent },
  { path: "persona/editar/:id", component: PersonaeditarComponent },

  { path: "vehiculo", component: VehiculoComponent },
  { path: "vehiculo/agregar", component: VehiculoagregarComponent },
  { path: "vehiculo/editar/:id", component: VehiculoeditarComponent },

  /////////////////////////////Cambiar////////////////////////////
  { path: "", redirectTo: "/vehiculo", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/vehiculo" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
