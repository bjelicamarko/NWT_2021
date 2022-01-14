import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrdersRoutes } from './orders.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSortModule } from '@angular/material/sort';
import { CreateOrderPageComponent } from './pages/create-order-page/create-order-page.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { NumberDialogComponent } from './components/number-dialog/number-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { SnackBarService } from '../shared/services/snack-bar.service';



@NgModule({
  declarations: [
    OrdersPageComponent,
    CreateOrderPageComponent,
    ItemCardComponent,
    NumberDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(OrdersRoutes),
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatSortModule
  ]
})
export class OrdersModule { }
