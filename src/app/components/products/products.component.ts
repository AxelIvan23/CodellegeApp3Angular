import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService} from '../../servicios/productos.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: any={};
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductosService) {
  		this._activatedRoute.params.subscribe( param => {
  			this.Products = _productService.getProductType(param['type']);
  		})
  }

  ngOnInit(): void {
    console.log(this.Products);
  }

}
