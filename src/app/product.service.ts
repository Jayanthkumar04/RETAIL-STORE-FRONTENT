import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts()
  {
   return this.http.get<IProduct[]>(`https://localhost:7154/product/getAll`);
  }
}
