import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@angular-monorepo/ui';

@Component({
  selector: 'lib-orders',
  imports: [CommonModule, UiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
