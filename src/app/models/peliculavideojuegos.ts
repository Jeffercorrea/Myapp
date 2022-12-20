import { Comentarios } from "./comentarios";
import { Usuario } from "./usuario";

export class Peliculavideojuegos {
    public id?;
    public titulo;
    public descripcion;
    public imagen;
    public tipo;
    public usuario: Usuario;
    public comentario?: Comentarios[];

    setValues(data: any){
        this.id =data.id;
        this.titulo =data.titulo;
        this.descripcion =data.descripcion;
        this.imagen =data.imagen;
        this.tipo =data.tipo;

    }
}
