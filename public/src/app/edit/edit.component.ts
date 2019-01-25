import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  product: any = {title: "", price: 0, url: ""};
  updated_product: any = {title: "", price: 0, url: ""};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.getProduct(params['id']);
    });
  }

  getProduct(id){
    let obs = this._productService.displayProduct(id);
    obs.subscribe(data => {
      this.product = data;
    });
  }

  update(id, x){
    let obs = this._productService.editProduct(id, x);
    obs.subscribe(data => {
      console.log(this.updated_product);
      this.updated_product = data;
    });
  }

  delete(id){
    // this._router.navigate(['/products']);
    let obs = this._productService.deleteProduct(id);
    obs.subscribe();
  }
}
