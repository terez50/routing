import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  product: Product | undefined = new Product();

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
    this.activatedRoute.params.subscribe(
      params =>
        {
          this.productService.getBySeoName(params['idOrName']).subscribe(
            product => this.product = product
          )
      }
    );
  }

  onFormSubmit(form: NgForm): void {
    console.log(form);
  }

}
