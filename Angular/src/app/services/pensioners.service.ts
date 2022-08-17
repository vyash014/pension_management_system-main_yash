import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensionersService {

  constructor(private http:HttpClient) { }

  getUser(obj:any){
    
    return this.http.get('http://localhost:8083/pensionerDetailByAadhaar/'+obj.aadharNo+'/');
    
  }
}
