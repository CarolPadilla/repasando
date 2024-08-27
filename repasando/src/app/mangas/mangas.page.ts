import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.page.html',
  styleUrls: ['./mangas.page.scss'],
})
export class MangasPage implements OnInit {



 //define la lista de productos con sus respectivas imágenes y descripciones. 
 productos = [
  {
    nombre: 'OnePiece',
    descripcion: 'narra las aventuras de Monkey D. Luffy y su tripulación mientras buscan el tesoro legendario para que Luffy se convierta en el Rey de los Piratas.',
    imagen: 'assets/img/onepice.jpg',
    precio: 10000
  },
  {
    nombre: 'Sailor Moon',
    descripcion: 'Sailor Moon es un manga creado por Naoko Takeuchi que sigue la historia de Usagi Tsukino, una chica de 14 años que descubre que es la reencarnación de la princesa de la Luna',
    imagen: 'assets/img/sailormoon.jpg',
    precio: 200000
  },
  {
    nombre: 'Boruto',
    descripcion: 'Boruto: Naruto Next Generations es un manga creado por Masashi Kishimoto y Mikio Ikemoto. La historia sigue a Boruto Uzumaki, el hijo del séptimo Hokage, Naruto Uzumaki.',
    imagen: 'assets/img/boruto.jpg',
    precio: 20000
  },
  {
    nombre: 'Dragon ball',
    descripcion: 'Dragon Ball, sigue las aventuras de Son Goku desde su niñez hasta su adultez. La historia comienza con Goku, un joven con una fuerza excepcional',
    imagen: 'assets/img/dragonball.jpg',
    precio: 20000
  },
  {
    nombre: 'Shin Chan ',
    descripcion: 'Shin Chan, sigue las travesuras de "Shin" Nohara, un niño de 5 años con un carácter travieso y una visión peculiar del mundo. ',
    imagen: 'assets/img/shinchan.jpg',
    precio: 20000
  },
  {
    nombre: 'Naruto',
    descripcion: '"Naruto" cuenta la historia de Naruto Uzumaki, un joven ninja que sueña con convertirse en el Hokage y ganarse el respeto de su aldea.',
    imagen: 'assets/img/naruto.jpg',
    precio: 20000
  },
  {
    nombre: 'Jujutsu Kaisen',
    descripcion: '"Jujutsu Kaisen" sigue a Yuji Itadori, quien obtiene habilidades sobrenaturales al consumir un objeto maldito y lucha contra maldiciones en una escuela de hechicería.',
    imagen: 'assets/img/jujutsukaisen.jpg',
    precio: 20000
  },
  {
    nombre: 'One Punch Man',
    descripcion: '"One Punch Man" sigue a Saitama, un héroe que derrota a todos con un solo golpe y busca un desafío real.',
    imagen: 'assets/img/onepunchman.jpg',
    precio: 20000
  },
  {
    nombre: 'Chainsawman',
    descripcion: '"Chainsaw Man" sigue a Denji, un cazador de demonios que obtiene poderes de motosierra y busca una vida mejor mientras enfrenta criaturas infernales.',
    imagen: 'assets/img/chainsawman.jpg',
    precio: 20000
  },


  // Añade más productos según sea necesario
];


  constructor() { }

  ngOnInit() {
  }

}
