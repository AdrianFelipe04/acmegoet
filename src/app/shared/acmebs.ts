export class tipopersona {
    constructor(
        public tipoPersona: string,
        public idTipoPersona?: number,
    ) { }

}
export class Color {
    constructor(
        public color: string,
        public idColor?: number,
    ) { }

}
export class Marca {
    constructor(
        public marca: string,
        public idMarca?: number,
    ) { }

}
export class TipoVehiculo {
    constructor(
        public tipoVehiculo: string,
        public idTipoVehiculo?: number,
    ) { }

}
export class Persona {
    constructor(
        public idTipoPersona: any,
        public numeroCedula: any,
        public primerNombre: any,
        public segundoNombre: any,
        public apellido: any,
        public direccion: any,
        public telefono: any,
        public ciudad: any,
        public idPersona?: number,
    ) { }

}
export class Vehiculo {
    constructor(
        public placa: any,
        public idColor: any,
        public idMarca: any,
        public idTipoVehiculo: any,
        public idConductor: any,
        public idPropietario: any,
        public idVehiculo?: number,
    ) { }

}