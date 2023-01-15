import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  public img: string = '';
  @Input('img')
  set cambiarImagen(newImg: string){
    this.img = newImg;
    console.log("La imagen está cambiando con el setter");
  };

  @Output() loaded = new EventEmitter<string>();
  public imageDefault: string = "../../../assets/img/pikachu-detective.jpg";
  public counter: number = 0;
  private funcionContadora: number | undefined;

  constructor() {
    // Corre ANTES del render.
    // Es importante que en el constructor no se corran cosas asincronas.
    // Solo se corre una vez.
    console.log("Log del Constructor.", "Variable \"img\":", this.img);
  }

  ngOnInit(): void {
    // Corre ANTES del render.
    // Acá si podemos correr cosas asincronas!!
    // Solo corre una vez.
    console.log("Log del método ngOnInit().", "Variable \"img\":", this.img);
    /*
    this.funcionContadora = window.setInterval(()=>{
      this.counter += 1;
      console.log("Estamos corriendo el counter:", this.counter);
    }, 1000)
    */
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Corre ANTES y DURANTE del render.
    // Su objetivo es actualizar los cambios en los Inputs.
    console.log("Log del método ngOnChanges().", "Variable \"img\":", this.img);
    console.log("Estos son los cambios:",changes);

  }

  ngAfterViewInit(): void {
    // Corre DESPUES del render.
    // Acá se manejan los HIJOS (en este caso, dos <img> y un <ng-template>).
    // Si quisieramos de alguna forma MANUPILAR esos hijos o ejecutar algunos
    //    eventos con ellos de forma "programatica" y no desde el template, este
    //    sería el método en donde deberíamos hacerlo (porque estos ya deberían
    //    estar renderizados).
    // Las directivas se corren en este método.
    console.log("Log del método ngAfterViewInit().");
  }

  ngOnDestroy(): void {
    // Este método se ejecuta cuando se elimimina el componente.
    // Por ejemplo, un *ngIf crea un componente y, cuando no se cumple su condición,
    //    lo elimina de la interface, ejecutándo este método.
    console.log("Log del método ngOnDestroy().");
    window.clearInterval(this.funcionContadora);
  }

  public imgError(){
    this.img = this.imageDefault;
  }

  public imgLoaded(){
    console.log("Imagen cargada!");
    this.loaded.emit(this.img);
  }

}
