import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@angular-monorepo/ui';

@Component({
  selector: 'lib-products',
  imports: [CommonModule, UiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
