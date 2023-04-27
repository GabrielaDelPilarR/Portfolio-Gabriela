import gitlist from '../images/GitList.jpg';
import burger from '../images/BurgerQueen.jpg';
import helptaster from '../images/HelpTaster.jpg'
import mdlinks from '../images/npm.jpg';
import memory from '../images/memory.png';
import mokepon from '../images/mokepon.jpg'
import spotifu from '../images/spotifu.jpg'
import cakeshop from '../images/cake.jpg'
import formulario from '../images/formulario.jpg'
import grid from '../images/grid.jpg'
import video from '../images/video.jpg'
import nemium from '../images/nemium.jpg'
import card from '../images/card.jpg'
import shopping from '../images/shopping.jpg'
import pokedex from '../images/pokedex.jpg'


export interface Projects {
    categories: string;
    id: number;
    title: string;
    src: string;
    github: string;
    demo: string;
    modal: {
         title: string; 
         description: string; 
        },
    technologies:Array<{
      name: string,
      src: string,
    }>
}

interface Technologies{
  name:string,
  src: string,
}

const projectsList : Projects[]=[
      {
        categories: 'web',
          id: 0,
          title: 'Shopping List 🥗',
          src: shopping,
          github: 'https://github.com/GabrielaDelPilarR/Shopping-List-Angular',
          demo: 'https://shopping-list-gabriela.netlify.app/',
        modal: {
          title: 'Shopping List 🥗',
          description: `Anota tu lista de compras , editalas y eliminalas . Tambien podras saber el precio total que debes pagar por tu lista de compras`
      }
      ,
        technologies:[
        {
          name: 'Angular',
          src: 'https://img.icons8.com/fluency/256/angularjs.png'
        },
        {
          name: 'Typescript',
          src: 'https://img.icons8.com/color/48/000000/typescript.png',
        },
        {
          name: 'CSS3',
          src: 'https://img.icons8.com/color/48/000000/css3.png',
        },
      ]
      },
      {
        categories: 'web',
          id: 1,
          title: 'Pokedex 🌳🐲',
          src: pokedex,
          github: 'https://github.com/GabrielaDelPilarR/Pokedex-React',
          demo: 'https://pokedex-react-ecru.vercel.app/',
        modal: {
          title: 'Pokedex 🌳🐲',
          description: `Busca tu pokemon favorito y descubre sus habilidades. Se utilizó Pokemon Rest Api`
       }
      ,
        technologies:[
        {
          name: 'ReactJS',
          src: 'https://img.icons8.com/color/48/000000/react-native.png'
        },
        {
          name: 'JavaScript',
          src: 'https://img.icons8.com/color/48/000000/javascript.png',
        },
        {
          name: 'CSS3',
          src: 'https://img.icons8.com/color/48/000000/css3.png',
        },
      ]
      },
      {
        categories: 'web',
          id: 2,
          title: 'GitList 👩‍💻',
          src: gitlist,
          github: 'https://github.com/GabrielaDelPilarR/GitList-React',
          demo: '',
        modal: {
          title: 'GitList',
          description: `Administre los repositorios de su proyecto como un profesional utilizando GitList, la plataforma de desarrollo más grande y avanzada del mundo. Se utilizó GitHub Rest Api`
       }
      ,
        technologies:[
        {
          name: 'ReactJS',
          src: 'https://img.icons8.com/color/48/000000/react-native.png'
        },
        {
          name: 'JavaScript',
          src: 'https://img.icons8.com/color/48/000000/javascript.png',
        },
        {
          name: 'CSS3',
          src: 'https://img.icons8.com/color/48/000000/css3.png',
        },
      ]
      },
      {
        categories: 'responsive',
          id: 3,
          title: 'Burger Queen 🍔',
          src: burger,
          github: 'https://github.com/GabrielaDelPilarR/Burger-Queen',
          demo: ''
      ,
        modal: {
          title: 'Burger Queen',
          description: `Interfaz web para gestionar pedidos de comida rápida, enfocada a empleados administradores, meseros y cocineros para facilitar sus actividades dentro de la empresa.`
        }
        ,
          technologies:[
          {
            name: 'ReactJS',
            src: 'https://img.icons8.com/color/48/000000/react-native.png'
          },
          {
            name: 'JavaScript',
            src: 'https://img.icons8.com/color/48/000000/javascript.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          },
        ]
      },
      {
        categories: 'web',
          id: 4,
          title: 'Md-links 💻',
          src: mdlinks,
          github: 'https://github.com/GabrielaDelPilarR/Md-links-',
          demo: 'https://www.npmjs.com/package/md-links-gabyro'
      ,
        modal: {
          title: 'MD Links',
          description: `Es una libreria de NodeJS que permite analizar los archivos de tipo Markdown, ya sea desde un archivo o directorio, que pueden estar alojados dentro de carpetas .`
        }
        ,
          technologies:[
          {
            name: 'JavaScript',
            src: 'https://img.icons8.com/color/48/000000/javascript.png',
          },
          {
            name: 'NodeJS',
            src: 'https://img.icons8.com/color/48/000000/nodejs.png',
          },
          {
            name: 'Jest',
            src: 'https://i.imgur.com/iLtGD5c.png',
          },
        ]
      },
      {
        categories:'responsive',
          id: 5,
          title: 'Help Taster Social Network 🍴',
          src: helptaster,
          github: 'https://github.com/GabrielaDelPilarR/Help-Taster---social-network',
          demo: 'https://gabrieladelpilarr.github.io/Help-Taster---social-network/src/',
        modal: {
          title: 'Help Taster',
          description: `En esta red social, los usuarios pueden postear información relacionada a restaurantes y sugerencias sobre sobre los mejores platos que han degustado. Además le permite crear,editar y eliminar sus publicaciones.`
        },
        technologies:[
          {
            name: 'JavaScript',
            src: 'https://img.icons8.com/color/48/000000/javascript.png',
          },
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          },
          {
            name: 'Firebase',
            src: 'https://img.icons8.com/color/48/000000/firebase.png',
          },
          {
            name: 'Jest',
            src: 'https://i.imgur.com/iLtGD5c.png',
          },
          {
            name: 'Figma',
            src: 'https://img.icons8.com/office/48/000000/figma.png',
          }

        ]
      },
      {
        categories:'responsive',
          id: 6,
          title: 'Memory Match 🦎',
          src: memory,
          github: 'https://github.com/GabrielaDelPilarR/LIM018-memory-match',
          demo: 'https://gabrieladelpilarr.github.io/LIM018-memory-match/src/',
        modal: {
          title: 'Memory Match',
          description: `
          Es un juego que ejercita la memoria, en donde el usuario puede destapar 2 cartas por turno y si hacen match aumenta el puntaje en 100 puntos. El usuario gana cuando ha destapado todas las cartas, además de acuerdo a su desempeño puede ganar una medalla de oro, plata o bronce.`
        },
        technologies:[
          {
            name: 'JavaScript',
            src: 'https://img.icons8.com/color/48/000000/javascript.png',
          },
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          },
          {
            name: 'Jest',
            src: 'https://i.imgur.com/iLtGD5c.png',
          },
          {
            name: 'Figma',
            src: 'https://img.icons8.com/office/48/000000/figma.png',
          }]
      },
      {
        categories:'web',
          id: 7,
          title: 'Card Validation 💸',
          src: card,
          github: 'https://github.com/GabrielaDelPilarR/Card-Validation',
          demo: 'https://gabrieladelpilarr.github.io/Card-Validation/src/',
          modal: {
          title: 'Card Validation',
          description: `Realiza la compra de tu despensa semanal de manera digital , además puedes saber si tu tarjeta es valida o no utilizando el algoritmo de Luhn`
        }
        ,
        technologies:[
          {
            name: 'JavaScript',
            src: 'https://img.icons8.com/color/48/000000/javascript.png',
          },
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },
      {
        categories:'responsive',
          id: 8,
          title: 'Mokepon multiplayer 🦁',
          src: mokepon,
          github: 'https://github.com/GabrielaDelPilarR/Mokepon-multiplayer',
          demo: 'https://gabrieladelpilarr.github.io/Mokepon-multiplayer/mokepon/',
        modal: {
          title: 'Mokepon multiplayer',
          description: `Juego de interaccion donde puedes elegir un mokepon y competir en una batalla estupenda`
        }
        ,
        technologies:[
          {
            name: 'JavaScript',
            src: 'https://img.icons8.com/color/48/000000/javascript.png',
          },
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },
      {
        categories:'responsive',
          id: 9,
          title: 'Spotifu 🎧',
          src: spotifu,
          github: 'https://github.com/GabrielaDelPilarR/Spotifu',
          demo: 'https://gabrieladelpilarr.github.io/Spotifu/',
        modal: {
          title: 'Spotifu 🎧',
          description: `Spotifu es un clon exacto de la interfaz web de Spotify.`
        }
        ,
        technologies:[
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },
      {
        categories: 'responsive',
          id: 10,
          title: 'Formulario de pagos 💸',
          src: formulario,
          github: 'https://github.com/GabrielaDelPilarR/Formulario-de-pagos',
          demo: 'https://gabrieladelpilarr.github.io/Formulario-de-pagos/',
        modal: {
          title: 'Formulario de pagos 💸',
          description: `Aprendiendo flexbox, maqueta de formulario`
        }
        ,
        technologies:[
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },
      {
        categories: 'web',
          id: 11,
          title: 'Cake shop 🎂',
          src: cakeshop,
          github: 'https://github.com/GabrielaDelPilarR/CakeShop',
          demo: 'https://gabrieladelpilarr.github.io/CakeShop/',
        modal: {
          title: 'Cake shop 🎂',
          description: `Enamora tu paladar con los ricos pasteles que tenemos disponibles para ti.`
        }
        ,
        technologies:[
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },
      {
        categories: 'responsive',
          id: 12,
          title: 'Grid Gallery🌐',
          src: grid,
          github: 'https://github.com/GabrielaDelPilarR/Grid-Gallery',
          demo: 'https://gabrieladelpilarr.github.io/Grid-Gallery/index.html',
        modal: {
          title: 'Grid Gallery🌐',
          description: `Practica tus habilidades de Grid CSS con este ejercicio de las capitales del mundo.`
        }
        ,
        technologies:[
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },
      {
        categories: 'web',
          id: 13,
          title: 'Video Player🎧',
          src: video,
          github: 'https://github.com/GabrielaDelPilarR/Video-player',
          demo: 'https://gabrieladelpilarr.github.io/Video-player/',
        modal: {
          title: 'Video Player🎧',
          description: `Reproductor de video , aprendiendo js`
        }
        ,
        technologies:[
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },
      {
        categories: 'web',
          id: 14,
          title: 'Nemium project ',
          src: nemium,
          github: 'https://github.com/GabrielaDelPilarR/Curso-esencial-html-css',
          demo: 'https://gabrieladelpilarr.github.io/Curso-esencial-html-css/',
        modal: {
          title: 'Nemium project',
          description: `Curso basico de html y css, aprendiendo a programar`
        },
        technologies:[
          {
            name: 'HTML5',
            src: 'https://img.icons8.com/color/48/000000/html-5.png',
          },
          {
            name: 'CSS3',
            src: 'https://img.icons8.com/color/48/000000/css3.png',
          }]
      },   
]

const technologies : Technologies[]=[
    {
        name: 'ReactJS',
        src: 'https://img.icons8.com/color/48/000000/react-native.png',
      },
      {
        name: 'Angular',
        src: 'https://img.icons8.com/fluency/256/angularjs.png',
      },
      {
        name: 'JavaScript',
        src: 'https://img.icons8.com/color/48/000000/javascript.png',
      },
      {
        name: 'Typescript',
        src: 'https://img.icons8.com/color/48/000000/typescript.png',
      },
      {
        name: 'HTML5',
        src: 'https://img.icons8.com/color/48/000000/html-5.png',
      },
      {
        name: 'CSS3',
        src: 'https://img.icons8.com/color/48/000000/css3.png',
      },
      {
        name: 'Firebase',
        src: 'https://img.icons8.com/color/48/000000/firebase.png',
      },
      {
        name: 'NodeJS',
        src: 'https://img.icons8.com/color/48/000000/nodejs.png',
      },
      {
        name: 'Jest',
        src: 'https://i.imgur.com/iLtGD5c.png',
      },
      {
        name: 'Figma',
        src: 'https://img.icons8.com/office/48/000000/figma.png',
      }
]
export{projectsList, technologies}