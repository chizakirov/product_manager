import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // new_product: any; 
  new_product: any = {title: "", price: 0, url: ""};
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _product: ProductService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    
  }

  create(){
    this._router.navigate(['/products/new']);
    let obs = this._product.createProduct(this.new_product);
    obs.subscribe(data => {
      console.log(data);
      this.new_product = data;
    })
  }
}
