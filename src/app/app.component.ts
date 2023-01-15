import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-2';

  public imgParent: string = '';
  public imagenVisible: boolean = true;

  public eliminar():void{
    this.imagenVisible = !this.imagenVisible;
  }

  public onLoaded(img: string){
    console.log("Esta fue la imagen cargada: " + img);
  }
}
