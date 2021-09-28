import { Ingreso } from "./ingreso.modelo";

export class IngresoServicio{

    ingresos: Ingreso[] = [
        new Ingreso ("Salario", 4000),
        new Ingreso ("Venta coche", 500)
    ];

    eliminar(ingreso:Ingreso){
        const indice:number = this.ingresos.indexOf(ingreso);

        this.ingresos.splice(indice,1);

    }

}