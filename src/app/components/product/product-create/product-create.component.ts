import { Product } from "./../product.model";
import { Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent {
  
  product: Product = {
    name: '',
    price: null,
  }

  constructor(private productServic: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productServic.create(this.product).subscribe(() => {
      this.productServic.showMessage("Produto criado!")
      this.router.navigate(["/products"])
    });
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }
}
