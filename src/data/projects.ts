import gitlist from '../images/GitList.jpg';
import burger from '../images/BurgerQueen.jpg';
import helptaster from '../images/HelpTaster.jpg'
import mdlinks from '../images/npm.jpg';


interface Project {
    categories: string;
    id: number;
    title: string;
    src: string;
    github: string;
    demo: string;
    modal: {
         title: string; 
         description: string; 
        }

}

interface Technologies {
    name: string,
    src: string,
    projects: number[];
}

const project : Project[]=[
      {
        categories: 'web',
          id: 1,
          title: 'GitList 👩‍💻',
          src: gitlist,
          github: 'https://github.com/GabrielaDelPilarR/GitList-React',
          demo: '',
        modal: {
          title: 'GitList',
          description: `Administre los repositorios de su proyecto como un profesional utilizando GitList, la plataforma de desarrollo más grande y avanzada del mundo. Se utilizó GitHub Rest Api`
        }
      },
      {
        categories: 'responsive',
          id: 2,
          title: 'Burger Queen 🍔',
          src: burger,
          github: 'https://github.com/GabrielaDelPilarR/Burger-Queen',
          demo: ''
      ,
        modal: {
          title: 'Burger Queen',
          description: `Interfaz web para gestionar pedidos de comida rápida, enfocada a empleados administradores, meseros y cocineros para facilitar sus actividades dentro de la empresa.`
        }
      },
      {
        categories: 'web',
          id: 3,
          title: 'Md-links 💻',
          src: mdlinks,
          github: 'https://github.com/GabrielaDelPilarR/Md-links-',
          demo: 'https://www.npmjs.com/package/md-links-gabyro'
      ,
        modal: {
          title: 'MD Links',
          description: `Es una libreria de NodeJS que permite analizar los archivos de tipo Markdown, ya sea desde un archivo o directorio, que pueden estar alojados dentro de carpetas .`
        }
      },
      {
        categories:'responsive',
          id: 4,
          title: 'Help Taster Social Network 🍴',
          src: helptaster,
          github: 'https://github.com/GabrielaDelPilarR/Help-Taster---social-network',
          demo: 'https://gabrieladelpilarr.github.io/Help-Taster---social-network/src/',
        modal: {
          title: 'Help Taster',
          description: `En esta red social, los usuarios pueden postear información relacionada a restaurantes y sugerencias sobre sobre los mejores platos que han degustado. Además le permite crear,editar y eliminar sus publicaciones.`
        }
      },
      {
        categories:'responsive',
          id: 5,
          title: 'Memory Match 🦎',
          src: 'memory',
          github: 'https://github.com/GabrielaDelPilarR/LIM018-memory-match',
          demo: 'https://gabrieladelpilarr.github.io/LIM018-memory-match/src/',
        modal: {
          title: 'Memory Match',
          description: `About
          Es un juego que ejercita la memoria, en donde el usuario puede destapar 2 cartas por turno y si hacen match aumenta el puntaje en 100 puntos. El usuario gana cuando ha destapado todas las cartas, además de acuerdo a su desempeño puede ganar una medalla de oro, plata o bronce.`
        }
      },
      {
        categories:'web',
          id: 6,
          title: 'Card Validation 💸',
          src: 'card',
          github: 'https://github.com/GabrielaDelPilarR/Card-Validation',
          demo: 'https://gabrieladelpilarr.github.io/Card-Validation/src/',
          modal: {
          title: 'Card Validation',
          description: `Realiza la compra de tu despensa semanal de manera digital , además puedes saber si tu tarjeta es valida o no utilizando el algoritmo de Luhn`
        }
      },
      {
        categories:'responsive',
          id: 7,
          title: 'Mokepon multiplayer 🦁',
          src: 'mokepon',
          github: 'https://github.com/GabrielaDelPilarR/Mokepon-multiplayer',
          demo: 'https://gabrieladelpilarr.github.io/Mokepon-multiplayer/mokepon/',
        modal: {
          title: 'Mokepon multiplayer',
          description: `Juego de interaccion donde puedes elegir un mokepon y competir en una batalla estupenda`
        }
      },
      {
        categories:'responsive',
          id: 8,
          title: 'Spotifu 🎧',
          src: 'spotifu',
          github: 'https://github.com/GabrielaDelPilarR/Spotifu',
          demo: 'https://gabrieladelpilarr.github.io/Spotifu/',
        modal: {
          title: 'Spotifu 🎧',
          description: `Spotifu es un clon exacto de la interfaz web de Spotify.`
        }
      },
      {
        categories: 'responsive',
          id: 9,
          title: 'Formulario de pagos 💸',
          src: 'formulario',
          github: 'https://github.com/GabrielaDelPilarR/Formulario-de-pagos',
          demo: 'https://gabrieladelpilarr.github.io/Formulario-de-pagos/',
        modal: {
          title: 'Formulario de pagos 💸',
          description: `Aprendiendo flexbox, maqueta de formulario`
        }
      },
      {
        categories: 'web',
          id: 10,
          title: 'Cake shop 🎂',
          src: 'cakeshop',
          github: 'https://github.com/GabrielaDelPilarR/CakeShop',
          demo: 'https://gabrieladelpilarr.github.io/CakeShop/',
        modal: {
          title: 'Cake shop 🎂',
          description: `Enamora tu paladar con los ricos pasteles que tenemos disponibles para ti.`
        }
      },
      {
        categories: 'responsive',
          id: 11,
          title: 'Grid Gallery🌐',
          src: 'grid',
          github: 'https://github.com/GabrielaDelPilarR/Grid-Gallery',
          demo: 'https://gabrieladelpilarr.github.io/Grid-Gallery/index.html',
        modal: {
          title: 'Grid Gallery🌐',
          description: `Practica tus habilidades de Grid CSS con este ejercicio de las capitales del mundo.`
        }
      },
      {
        categories: 'web',
          id: 12,
          title: 'Video Player🎧',
          src: 'video',
          github: 'https://github.com/GabrielaDelPilarR/Video-player',
          demo: 'https://gabrieladelpilarr.github.io/Video-player/',
        modal: {
          title: 'Video Player🎧',
          description: `Reproductor de video , aprendiendo js`
        }
      },
      {
        categories: 'web',
          id: 13,
          title: 'Nemium project ',
          src: 'nemium',
          github: 'https://github.com/GabrielaDelPilarR/Curso-esencial-html-css',
          demo: 'https://gabrieladelpilarr.github.io/Curso-esencial-html-css/',
        modal: {
          title: 'Nemium project',
          description: `Curso basico de html y css, aprendiendo a programar`
        }
      },   
]

const technologies : Technologies[]=[
    {
        name: 'ReactJS',
        src: 'https://img.icons8.com/color/48/000000/react-native.png',
        projects: [1,2],
      },
      {
        name: 'JavaScript',
        src: 'https://img.icons8.com/color/48/000000/javascript.png',
        projects: [1,2,3,4,5,6,7,12],
      },
      {
        name: 'Typescript',
        src: 'https://img.icons8.com/color/48/000000/typescript.png',
        projects: [],
      },
      {
        name: 'HTML5',
        src: 'https://img.icons8.com/color/48/000000/html-5.png',
        projects: [1,2,3,4,5,6,7,8,9,10,11,12],
      },
      {
        name: 'CSS3',
        src: 'https://img.icons8.com/color/48/000000/css3.png',
        projects: [1,2,3,4,5,6,7,8,9,10,11,12],
      },
      {
        name: 'Firebase',
        src: 'https://img.icons8.com/color/48/000000/firebase.png',
        projects: [5],
      },
      {
        name: 'NodeJS',
        src: 'https://img.icons8.com/color/48/000000/nodejs.png',
        projects: [4],
      },
      {
        name: 'Jest',
        src: 'https://i.imgur.com/iLtGD5c.png',
        projects: [4,5,6],
      },
      {
        name: 'Figma',
        src: 'https://img.icons8.com/office/48/000000/figma.png',
        projects: [2,3,5,6],
      }
]
export{project, technologies}