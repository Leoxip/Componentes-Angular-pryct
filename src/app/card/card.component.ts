import { ServicioDeFavoritosService } from './../servicio-de-favoritos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante: any;
 public imagen:string | undefined;
  constructor(private servicioFavorito : ServicioDeFavoritosService) { }

  ngOnInit(): void {
    this.imagen = "https://d1r08wok4169a5.cloudfront.net/iframes/depor_logo.svg"
    //console.log('Entrando data:', this.dataEntrante);
  }

  agregarFavorito(){
   // console.log(this.dataEntrante);
    this.servicioFavorito.disparadorDeFavoritos.emit({data:this.dataEntrante})
    data:this.dataEntrante
  }

}
