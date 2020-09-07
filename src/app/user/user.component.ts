import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { KrishnaService } from '../krishna/krishna.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[KrishnaService]
})
export class UserComponent implements OnInit {
  public user;
  constructor( private krishnaService: KrishnaService,private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    // const userId=this.activeRoute.snapshot.params['userId'];
    // const userName=this.activeRoute.snapshot.params['userName'];
    // const userScore=this.activeRoute.snapshot.params['userScore'];
    // this.user=[userId,userName,userScore];
    // console.log(userId);
    // console.log(userName);
    // console.log(userScore);
    const userId=this.activeRoute.snapshot.params['userId'];
    console.log(userId);
    this.krishnaService.getUserDetail(userId).subscribe(
      res=>{
        this.user=res;
        console.log(this.user);
      }
      )

  }

}
