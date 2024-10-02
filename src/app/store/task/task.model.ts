export interface Skill {
    id: number;               // Identificador único de la habilidad
    name: string;            // Nombre de la habilidad
  }
  
  export interface Person {
    id: number;              // Identificador único de la persona
    fullName: string;        // Nombre completo
    age: number;             // Edad
    skills: Skill[];         // Lista de habilidades
  }
  
  export interface Task {
    id: number;               // Identificador único de la tarea
    title: string;            // Nombre de la tarea
    deadline: Date;          // Fecha límite
    completed: boolean;      // Estado de la tarea
    people: Person[];        // Lista de personas asociadas
  }
  