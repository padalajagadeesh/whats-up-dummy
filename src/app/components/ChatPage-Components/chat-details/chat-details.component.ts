import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss']
})
export class ChatDetailsComponent {
UserChatDetails: boolean=false;
selectUser:any;
constructor(private route:ActivatedRoute){
}
ngOnInit(){
  this.UserChatDetails=true;
  this.selectUser = this.route.snapshot.paramMap.get('user');
 console.log( this.selectUser ,'151000::::')
}

}
