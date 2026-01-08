import { ChangeDetectorRef, Component } from '@angular/core';
import { DashboardService } from '../dashboard-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-component',
  imports: [CommonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent {
   userData: any[] = [];
   companyData: any[] = []; 
   error: boolean = false;
  
   constructor(private dashboardService: DashboardService, private cdr: ChangeDetectorRef){

   }

   ngOnInit(){
      this.dashboardService.getUserCompanyData().subscribe({
         next: (res) => {
           this.userData = res.userData,
           this.companyData = res.companyData
           this.cdr.detectChanges();
         },
         error: () => {
            this.error = true;
            this.userData = [];
            this.companyData =[];
         } 
      });
   }
}
