import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';




 @Injectable()
export class KrishnaService {

constructor( private http:Http) { }
 public getuser(searchtext):Observable<any>{
  // const searchtext='Krishna';
  const url='http://api.github.com/search/users?q='+searchtext;
  return this.http.get(url).pipe(map(
    res=>{
      const data=res.json();
      console.log(data);
      return data;
    }
  ));
}

  getUserDetail(userId):Observable<any>
  {
    const url='https://api.github.com/users/'+userId;
    return this.http.get(url).pipe(map(
      res=>{
        const user=res.json();
        return user
      }
    ));

  }
   
    // const data=[
    //   {name:"Krishna",id:101,email:"krishna.choudhary@gmail.com",age:27},
    //   {name:"ram",id:102,email:"ram@gmail.com",age:27},
    //   {name:"shyam",id:103,email:"shyam@gmail.com",age:27},
    //   {name:"dilip",id:104,email:"dilip@gmail.com",age:27},

    // ];

   
  
}
