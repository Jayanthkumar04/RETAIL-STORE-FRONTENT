import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products!:IProduct[];

  formState=false;

  constructor(private http:ProductService)
  {
       this.displayAllProducts();
  }

  ngOnInit(): void {
    
        this.displayAllProducts();

  }

  displayAllProducts()
  {
       this.http.getAllProducts().subscribe({
        next:(data)=>{
          this.products = data;
        }
       })
  }

  toogleState()
  {
    this.formState = !this.formState;
  }

  formData()
  {
    console.log("formdata")
    this.formState = false;
  }




}
