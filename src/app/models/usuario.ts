
export class Usuario {
    public id;
    public nombre;
    public rol;

    setValues(data: any){
        this.id =data.id;
        this.nombre =data.nombre;
        this.rol =data.rol;
    }
    
}
