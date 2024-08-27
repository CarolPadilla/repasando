import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.page.html',
  styleUrls: ['./comics.page.scss'],
})
export class ComicsPage implements OnInit {

//define la lista de productos con sus respectivas imágenes y descripciones. 
productos = [
  {
    nombre: 'Wolverine',
    descripcion: 'Wolverine es un feroz mutante de Marvel con garras de adamantium, un factor de curación increíble y una actitud indomable. Es un miembro clave de los X-Men',
    imagen: 'assets/img/wolverine.jpg',
    precio: 10000
  },
  {
    nombre: 'Superman',
    descripcion: 'Superman es un superhéroe de DC Comics, un extraterrestre de Krypton con poderes sobrehumanos, que protege la Tierra como Clark Kent.',
    imagen: 'assets/img/superman.jpg',
    precio: 200000
  },
  {
    nombre: 'Batman',
    descripcion: 'Batman es un millonario de Gotham City que lucha contra el crimen como el vigilante enmascarado, usando habilidades y tecnología sin superpoderes.',
    imagen: 'assets/img/batman.jpg',
    precio: 20000
  },
  {
    nombre: 'Jocker',
    descripcion: 'El Joker es el enemigo loco y caótico de Batman, conocido por su estilo de payaso y su deseo de causar caos.',
    imagen: 'assets/img/jocker.jpg',
    precio: 20000
  },
  {
    nombre: 'Harley Queen',
    descripcion: 'Harley Quinn es una villana de DC Comics, ex psiquiatra del Joker, conocida por su estilo excéntrico y caos.',
    imagen: 'assets/img/harley.jpg',
    precio: 20000
  },
  {
    nombre: 'Ironman',
    descripcion: 'Iron Man es un superhéroe de Marvel, creado por Tony Stark, un genio millonario que construye una avanzada armadura de alta tecnología. ',
    imagen: 'assets/img/ironman.jpg',
    precio: 20000
  },
  {
    nombre: 'Capitan America',
    descripcion: 'Capitán América es el símbolo del heroísmo y la justicia en Marvel Comics. Steve Rogers, un soldado mejorado con el suero del supersoldado',
    imagen: 'assets/img/capitanamerica.jpg',
    precio: 20000
  },
  {
    nombre: 'Bruja Scarlet',
    descripcion: 'Bruja Escarlata, también conocida como Wanda Maximoff, es una poderosa hechicera del universo Marvel. Con habilidades para manipular la realidad',
    imagen: 'assets/img/brujascarlet.jpg',
    precio: 20000
  },
  {
    nombre: 'Vision',
    descripcion: 'Visión es un sintetoide creado por Marvel, mezcla de tecnología avanzada y humanidad. Con la capacidad de alterar su densidad, volar y emitir rayos de energía',
    imagen: 'assets/img/vision.jpg',
    precio: 20000
  },


  // Añade más comics según sea necesario

];

  constructor() { }

  ngOnInit() {
  }

}


