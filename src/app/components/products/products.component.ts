import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService} from '../../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: any[]=[];
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductosService, private _router: Router) {
  		this._activatedRoute.params.subscribe( param => {
  			this.Products = _productService.getProductType(param['type']);
        console.log(param['type']);
  		})
  }

  ngOnInit(): void {
    
  }

  public Navegar(index) {
      this._router.navigate(['/product/',index]);
  }
}
