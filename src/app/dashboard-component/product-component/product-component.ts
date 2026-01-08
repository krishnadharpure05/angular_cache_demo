import { ChangeDetectorRef, Component } from '@angular/core';
import { DashboardService } from '../dashboard-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-component',
  imports: [CommonModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
   productData: any[] = [];
   continentData: any[] = []; 
   error: boolean = false;
  
   constructor(private dashboardService: DashboardService, private cdr: ChangeDetectorRef){

   }

   ngOnInit(){
      this.dashboardService.getProductContinentData().subscribe({
         next: (res) => {
           this.productData = res.productData,
           this.continentData = res.continentData
           this.cdr.detectChanges();
         },
         error: () => {
            this.error = true;
            this.productData = [];
            this.continentData =[];
         } 
      });
   }
}
