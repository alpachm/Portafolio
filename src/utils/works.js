import vid1 from '../assets/works/vid-1.mp4'
import vid1Mobile from '../assets/works/mobile/vid-1.mp4'
import vid2 from '../assets/works/vid-2.mp4'
import vid2mobile from '../assets/works/mobile/vid-2.mp4'
import vid3 from '../assets/works/vid-3.mp4'
import vid3Moile from '../assets/works/mobile/vid-3.mp4'
import vid4 from '../assets/works/vid-4.mp4'
import vid4Mobile from '../assets/works/mobile/vid-4.mp4'
import vid5 from '../assets/works/vid-5.mp4'
import vid5Mobile from '../assets/works/mobile/vid-5.mp4'
import vid6 from '../assets/works/vid-6.mp4'
import vid6Mobile from '../assets/works/mobile/vid-6.mp4'
import vid7 from '../assets/works/vid-7.mp4'
import vid7Mobile from '../assets/works/mobile/vid-7.mp4'
import vid8 from '../assets/works/vid-8.mp4'
import vid8Mobile from '../assets/works/mobile/vid-8.mp4'
import vid9 from '../assets/works/vid-9.mp4'
import vid9Mobile from '../assets/works/mobile/vid-9.mp4'
import vid10 from '../assets/works/vid-10.mp4'
import vid10Mobile from '../assets/works/mobile/vid-10.mp4'

let iconHtml = 'bx bxl-html5'
let iconCss = 'bx bxl-css3'
let iconJs = 'bx bxl-javascript'
let iconReact = 'bx bxl-react'
let iconRedux = 'bx bxl-redux'

const works = [
    {
        id: 1,
        proyecto: 'real',
        nombre: 'techos y placas',
        videos: {
            desktop: vid1,
            mobile: vid1Mobile
        },
        api: 'no',
        icons: [iconReact],
        tecnologias: ['react'],
        librerias: ['react-scroll', 'formsubmit.co'],
        descripcion: 'Este fue mi primero proyecto real donde tuve la oportunidad de poner en práctica todo lo aprendido hasta ese momento. Fue un completo desafio que asumí con mucha responsabilidad y compromiso. Tuve que leer mucha documentación para poder agregar funcionalidades que faltaban. Prestando mucha atención a todo lo que mi cliente quería para su página web logré desarrollar este proyecto donde quedó completamente satisfecho.',
        url: 'https://grand-treacle-5fc0b9.netlify.app/'
    },
    {
        id: 2,
        proyecto: 'Practica',
        nombre: 'ecommerce',
        videos: {
            desktop: vid2,
            mobile: vid2mobile
        },
        api: 'si',
        icons: [iconReact, iconRedux],
        tecnologias: ['react', 'redux'],
        librerias: ['axios', 'react-router-dom', 'react-hook-form', 'react-redux'],
        descripcion: 'Proyecto realizado para consumir un API completa. Tuve la oportunidad de hacerlo en equipo de 3 personas, donde afianzamos nuestro conocimiento en GitHub y trabajo en quipo. Fue un proyecto bastante complejo porque pusimos en practica conceptos avanzados de peticiones asincrónicas que realizamos para poder obtener los productos que fueron mostrados. Además implementamos conceptos de rutas protegidas con el Token Bearer. Logramos cumplir con el 100% del proyecto.',
        url: 'https://entregable-6-los-jinetes.netlify.app/'
    },
    {
        id: 3,
        proyecto: 'Practica',
        nombre: 'pokeapi',
        videos: {
            desktop: vid3,
            mobile: vid3Moile
        },
        api: 'si',
        icons: [iconReact, iconRedux],
        tecnologias: ['react', 'redux'],
        librerias: ['axios', 'react-router-dom', 'react-hook-form', 'react-redux'],
        descripcion: 'Proyecto realizado para poner en práctica peticiones asincrónicas y estados globales utilizando redux. Añadiendo el dark-mode intenté darle un toque más complejo y completo al proyecto.',
        url: 'https://poke-api-los-jinetes.netlify.app/'
    },
    {
        id: 4,
        proyecto: 'Practica',
        nombre: 'API rick & morty',
        videos: {
            desktop: vid4,
            mobile: vid4Mobile
        },
        api: 'si',
        icons: [iconReact],
        tecnologias: ['react'],
        librerias: ['axios'],
        descripcion: 'Proyecto realizado en equipo de 4 personas para afianzar conocimientos en GitHub y trabajo en equipo. Con este proyecto reforzamos conocimiento de peticiones asincrónicas',
        url: 'https://team-los-4-jinetes.netlify.app/'
    },
    {
        id: 5,
        proyecto: 'Practica',
        nombre: 'API Clima',
        videos: {
            desktop: vid5,
            mobile: vid5Mobile
        },
        api: 'si',
        icons: [iconReact],
        tecnologias: ['react'],
        librerias: ['axios'],
        descripcion: 'Proyecto realizado para reforzar conocimiento en peticiones asincrónicas.',
        url: 'https://app-clima-react-2.netlify.app/'
    },
    {
        id: 6,
        proyecto: 'Practica',
        nombre: 'Search Country',
        videos: {
            desktop: vid6,
            mobile: vid6Mobile
        },
        api: 'si',
        icons: [iconReact],
        tecnologias: ['react'],
        librerias: ['axios'],
        descripcion: 'Proyecto personal realizado para practicar nuevos conceptos. Consumiendo API pública de paises y agregando funcionalidades extras para sacar máximo provecho.',
        url: 'https://search-country-react.netlify.app/'
    },
    {
        id: 7,
        proyecto: 'Practica',
        nombre: 'Usuarios',
        videos: {
            desktop: vid7,
            mobile: vid7Mobile
        },
        api: 'si',
        icons: [, iconReact],
        tecnologias: ['react'],
        librerias: ['axios', 'react-hook-form'],
        descripcion: 'Proyecto realizado para reforzar conocimientos de peticiones asincrónicas. Fue utilizada la librería react-hook-form para poder obtener la información del formulario ademas de trabajar con los metodos de promesas como el GET, POST y el UPDATE. Proyecto importante para comprender bien los cenceptos de petición asincrónica.',
        url: 'https://lively-horse-4b09b0.netlify.app/'
    },
    {
        id: 8,
        proyecto: 'Practica',
        nombre: 'ecommerce fundamentos',
        videos: {
            desktop: vid8,
            mobile: vid8Mobile
        },
        api: 'no',
        icons: [iconHtml, iconCss, iconJs],
        tecnologias: ['html', 'css', 'javascript'],
        librerias: ['sweetalert2', 'mixitup'],
        descripcion: 'Proyecto realizado para fortalecer conocimientos en JavasCript y el DOM. Se imprimen los productos de forma dinámica a través del DOM y se utiliza lógica de programación para el carrito de compras.',
        url: 'https://ubiquitous-douhua-847eb4.netlify.app/'
    },
    {
        id: 9,
        proyecto: 'Practica',
        nombre: 'Ejemplo portafolio',
        videos: {
            desktop: vid9,
            mobile: vid9Mobile
        },
        api: 'no',
        icons: [iconHtml, iconCss],
        tecnologias: ['html', 'css'],
        librerias: ['no'],
        descripcion: 'Maquetado de un ejemplo de portafolio. Este proyecto se realizó con el fin de utilizar las técnologias de HTML y CSS, además de entender muy bien los conceptos de Grid CSS y FlexBox CSS.',
        url: 'https://celebrated-melomakarona-154f37.netlify.app/'
    },
    {
        id: 10,
        proyecto: 'Practica',
        nombre: 'Maquetado',
        videos: {
            desktop: vid10,
            mobile: vid10Mobile
        },
        api: 'no',
        icons: [iconHtml, iconCss],
        tecnologias: ['html', 'css'],
        librerias: ['no'],
        descripcion: 'Proyecto realizado para fortalecer conocimientos en fundamentos como HTML y CSS. Maquetado 100% responsive. Proyecto importante para comprender conceptos como fleblox css y grid css',
        url: 'https://practica-maquetado.netlify.app/'
    }
]

export default works