import { Component, OnInit } from '@angular/core';
import { KrishnaService } from '../krishna/krishna.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[KrishnaService]
})
export class SearchComponent implements OnInit {

  public searchText;
  public searchResult;
  public searchCount;

  constructor(private router:Router,private krishnaservice:KrishnaService) { }

  ngOnInit() {

    // this.krishnaservice.getuser(this.searchText);
  }

  showUserDetail(user)
  {
    this.router.navigate(['user',user.login]);
  }
onKeyup(event)
{
  this.searchText=event.target.value;

}
getUsers()
{
  this.krishnaservice.getuser(this.searchText).subscribe(
    res=>{
      this.searchResult=res;
      this.searchCount=res.total_count;
    }
    
  );

}

}
