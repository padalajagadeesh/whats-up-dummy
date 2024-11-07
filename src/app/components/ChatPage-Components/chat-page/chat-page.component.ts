import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {
  UserChatDetails:boolean=false;
  openPage:boolean = true
  ChatUsers =['Nowfal','jack','maxi','Faf','Green','Root','Bolt'];
  constructor(private route:Router){}
  chatDetails(user:any){
    this.openPage = true
    this.route.navigate(['./chatDetails',user])
    this.UserChatDetails = true;
    console.log(user,'15:::')
  }
}
