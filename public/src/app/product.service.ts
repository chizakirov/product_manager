import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  displayProducts() {
    return this._http.get('/api/products');
  }

  displayProduct(id){
    return this._http.get(`/api/products/${id}`);
  }

  createProduct(new_product){
    return this._http.post('/api/products', new_product);
  }

  deleteProduct(id){
    return this._http.delete(`/api/products/${id}`);
  }

  editProduct(id, edit_product){
    return this._http.put(`/api/products/${id}`, edit_product);
  }
}
