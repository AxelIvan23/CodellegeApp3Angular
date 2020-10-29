import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto: any={};

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductosService) {
  		this._activatedRoute.params.subscribe( param => {
  			this.producto = _productService.getProductId(param['id']);
  		}) 
  }

  ngOnInit(): void {
      const obj = document.getElementById('ratingBack') as HTMLStyleElement;
      let scale = 0.0;
      scale = 1.0-(this.producto.rating / 5.0);
      obj.style.transform = "translateX(-2px) scaleX("+scale+")";
  }

}
