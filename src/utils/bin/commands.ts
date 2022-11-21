// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';


// Help
export const ayuda = async (args: string[]): Promise<string> => {
  return `Estos son los comandos disponibles:
  - ayuda: lista de comandos disponibles.
  - sobremi: breve presentación.
  - experiencia: información sobre experiencia profesional y
               proyectos personales.
  - contacto: información de contacto.

[tab]: autocompletar.
[ctrl+l]/clear: limpiar terminal.\n
`;
};

// About
export const sobremi = async (args: string[]): Promise<string> => {
  return `Hola, soy ${config.name}. 
Bienvenido a mi portfolio!
Soy un desarrollador Back-End con experiencia en Java (Spring/Springboot),
Javascript (Node.js) y conocimientos en Python y Kotlin (Ktor).
`;
};

export const experiencia = async (args: string[]): Promise<string> => {
  return `
  Actualmente me desempeño como desarrollador Back-End en ASAP Consulting.
  Colaboro en varios proyectos en simultaneo, implementando integraciones con servicios externos, 
  tales como CRMs, servicios de mensajería, AWS SQS, IA, etc.

  Mis tareas principales son desarrollar y mantener REST-APIs, 
  usando java con Spring/Spring-Boot como herramienta principal, 
  hacer consultas a las bases de datos que sean necesarias con SQL, 
  dockerizar los proyectos y desplegarlos en AWS.
`;
};

/*export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};*/

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const ls = async (args: string[]): Promise<string> => {
  return `te
dije
que
no
tengo
presupuesto`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `lamentablemente no me da el presupuesto
para hacer un sistema de archivos.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `<p style="color:"red"">ACCESO DENEGADO</p>`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `      
        ███╗   ███╗ █████╗ ██╗   ██╗██████╗  ██████╗                    
        ████╗ ████║██╔══██╗██║   ██║██╔══██╗██╔═══██╗                   
        ██╔████╔██║███████║██║   ██║██████╔╝██║   ██║                   
        ██║╚██╔╝██║██╔══██║██║   ██║██╔══██╗██║   ██║                   
        ██║ ╚═╝ ██║██║  ██║╚██████╔╝██║  ██║╚██████╔╝                   
        ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝                    
██████╗  █████╗ ███╗   ██╗██████╗  ██████╗ ██╗     ███████╗ ██████╗ 
██╔══██╗██╔══██╗████╗  ██║██╔══██╗██╔═══██╗██║     ██╔════╝██╔═══██╗
██████╔╝███████║██╔██╗ ██║██║  ██║██║   ██║██║     █████╗  ██║   ██║
██╔═══╝ ██╔══██║██║╚██╗██║██║  ██║██║   ██║██║     ██╔══╝  ██║   ██║
██║     ██║  ██║██║ ╚████║██████╔╝╚██████╔╝███████╗██║     ╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚══════╝╚═╝      ╚═════╝ 
Desarrollador Back-End.      

Escribí ayuda para ver los comandos disponibles.
`;
};
