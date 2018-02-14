import { Component, OnInit } from '@angular/core';

import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  cube: Mesh;

  scene = new Scene();
  camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer = new WebGLRenderer();

  constructor() { }

  ngOnInit() {

    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    let geometry = new BoxGeometry( 1, 1, 1 );
    let material = new MeshBasicMaterial( { color: 0x00ff00 } );

    this.cube = new Mesh( geometry, material );
    this.scene.add( this.cube );

    this.camera.position.z = 5;

    this.animate();
}

animate = () => {

  requestAnimationFrame( this.animate );

  this.cube.rotation.x += 0.01;
  this.cube.rotation.y += 0.01;

  this.renderer.render( this.scene, this.camera );
}

}
