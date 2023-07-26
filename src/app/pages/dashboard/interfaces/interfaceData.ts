export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    rolId: number;
  }
  
export interface UsuarioBack {
    id: number;
    nombres?: string;
    email?: string;
    activo?: boolean;
    rol?: { 
        rolId: number;
        descripcion: string;
    };
  }

export interface rolID { 
    rolId: number,
    descripcion: string,
};


  export interface UsuarioBackForm {
    nombres: string;
    email: string;
    activo: boolean;
    rol: { 
      rolId: number,
    };
  }