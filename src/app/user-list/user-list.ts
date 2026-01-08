import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

   usersList!: User[];

   constructor(private userService: UserService, private cdr: ChangeDetectorRef){

   }

   ngOnInit(){
     this.loadUsersData()  
   }

   loadUsersData(){
     this.userService.getUserData().subscribe((res)=>{
        this.usersList = res;
        this.cdr.detectChanges();
     });
   }
}
