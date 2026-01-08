import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient){
     
  }

  userUrl: string = "https://fake-json-api.mock.beeceptor.com/users"; 
  companyUrl: string = "https://fake-json-api.mock.beeceptor.com/companies";
  productUrl: string = "https://dummy-json.mock.beeceptor.com/posts";
  continentUrl: string = "https://dummy-json.mock.beeceptor.com/continents";
  
  private userCompanyData$!: Observable<any>;
  private productContinentData$!: Observable<any>;


  getUsers():Observable<any[]>{
    console.log("Calling Users API");
     return this.http.get<any[]>(this.userUrl);
  }

  getCompanyList():Observable<any[]>{
    console.log("Calling Company API");
    return this.http.get<any[]>(this.companyUrl);
  }
 
  getProductList(): Observable<any[]>{
    console.log("Calling Product API");
    return this.http.get<any[]>(this.productUrl);
  }

  getContinentList(): Observable<any[]>{
    console.log("Calling Continent API");
    return this.http.get<any[]>(this.continentUrl);
  }


  getUserCompanyData(): Observable<any> {
    // return forkJoin({
    //   userData: this.getUsers(),
    //   companyData: this.getCompanyList()
    // });

    if(!this.userCompanyData$){
      this.userCompanyData$ = forkJoin({
        userData: this.getUsers(),
        companyData: this.getCompanyList()
      }).pipe(shareReplay(1));
    }

    return this.userCompanyData$;
  }

  getProductContinentData(): Observable<any> {
    // return forkJoin({
    //   productData: this.getProductList(),
    //   continentData: this.getContinentList()
    // });

    if (!this.productContinentData$) {
      this.productContinentData$ = forkJoin({
        productData: this.getProductList(),
        continentData: this.getContinentList()
      }).pipe(shareReplay(1));
    }

    return this.productContinentData$;
  }

}
