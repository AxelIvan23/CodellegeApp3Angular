import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  Resultados: any[] = [];

  constructor(private _activateRoute: ActivatedRoute, private _productService: ProductosService, private _router: Router) { 
  		this._activateRoute.params.subscribe( param => {
  			this.Resultados = this._productService.getProductNom(param['result']);
  		})
  }

  ngOnInit(): void {
  }

  public Navegar(index) {
      this._router.navigate(['/product/',index]);
  }

}
