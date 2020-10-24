import { AppError } from './../common/app-error';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private picsurl = 'https://jsonplaceholder.typicode.com/photos';
  public arraydata = [];
  public arrdata = [];
  constructor(@Inject(String) private url, private http: Http) {    //url passed from github-followers.service.ts
   }

   getAll(){
    return this.http.get(this.url)//.map(response => response.json())
    .pipe(map(response => response.json()), catchError(this.handleError));
   }

   getRecords(){
     return this.http.get(this.url).subscribe((data) => {
       this.arraydata = data.json()
       //Array.from(Object.keys(data), 
       //k => data[k]
       //);
       //console.log(this.arraydata);
       console.log(this.arraydata);
    });
   }

    getPics(){
      return this.http.get(this.picsurl).subscribe((datas) => {
        this.arrdata = datas.json();
        console.log(this.arrdata);
    });
   } 

   create(resource){
   // return Observable.throw(new AppError());   
     return this.http.post(this.url, JSON.stringify(resource))
     .pipe(map(response => response.json()),catchError(this.handleError));
   }

   update(resource){
     return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
     .pipe(map(response => response.json()),catchError(this.handleError));
   }

   delete(id){
    //  return Observable.throw(new AppError());
    return this.http.delete(this.url + '/' + id)
    .pipe(map(response => response.json()),catchError(this.handleError));    
   }
    
   private handleError(error : Response)
   {
     if(error.status===400)
        return Observable.throw(new BadInput(error.json()));

     if(error.status===404)
        return Observable.throw(new NotFoundError());

     return Observable.throw(new AppError(error)); 
   }

}
