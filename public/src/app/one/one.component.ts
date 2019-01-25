import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  products: any;
  edit_product: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.products = [];
    this.edit_product = {title: "", price: 0, url: ""};
    this.getProductsfromService();
  }

  getProductsfromService(){
    this._router.navigate(['/products']);
    let obs = this._productService.displayProducts();
    obs.subscribe(data => {
      this.products = data;
    });
  }

  delete(id){
    let obs = this._productService.deleteProduct(id);
    obs.subscribe();
    this.getProductsfromService();
  }

  edit(id, edit_product){
    this._router.navigate([`products/edit/${id}`]);
    let obs = this._productService.editProduct(id, edit_product);
    obs.subscribe(data => {
      this.edit_product = data;
    })
  }

}
