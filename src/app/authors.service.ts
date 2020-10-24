import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors(){
    return ["Author A","Author B","Author C"];
  }
}
