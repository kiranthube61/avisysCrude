import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

public URL="https://gorest.co.in/public/v2/users"
  constructor(private http:HttpClient) { }

  // For get data from api 
  getData(){
    const httpHeaders=new HttpHeaders({
      'Authorization': 'Bearer 6c9022a3119ff57d4c455d1952262aabb1c92547f25ca344fc433844b2ed3b53',
      'Content-Type': 'application/json',
      'Accept':'application/json'
    })
    return this.http.get(this.URL,{headers:httpHeaders})
  }

  // Post form data to api 

  postData(data1:any)
  {
    const httpHeaders=new HttpHeaders({
      'Authorization': 'Bearer 6c9022a3119ff57d4c455d1952262aabb1c92547f25ca344fc433844b2ed3b53',
      'Content-Type': 'application/json',
      'Accept':'application/json'
    })
    return this.http.post(this.URL,data1,{headers:httpHeaders})
  }
// delete Api data 
  deleteData(id:any){
    const httpHeaders=new HttpHeaders({
      'Authorization': 'Bearer 6c9022a3119ff57d4c455d1952262aabb1c92547f25ca344fc433844b2ed3b53',
      'Content-Type': 'application/json',
      'Accept':'application/json'
    })
    return this.http.delete(this.URL+"/"+id, {headers:httpHeaders})
  }
// Update or Edit Data
  putData(data:any){
    const httpHeaders=new HttpHeaders({
      'Authorization': 'Bearer 6c9022a3119ff57d4c455d1952262aabb1c92547f25ca344fc433844b2ed3b53',
      'Content-Type': 'application/json',
      'Accept':'application/json'
    })
    return this.http.put(this.URL+"/"+data.id, data, {headers:httpHeaders})
  }
}

// curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenali.ramakrishna@15ce.com", "status":"active"}'
