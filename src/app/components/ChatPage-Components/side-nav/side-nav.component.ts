import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  constructor(private route:Router){}
  selectNav(data:any){
    switch(data){
      case 'Chats':
        this.route.navigate(['chat'])
        break;
      case 'Communities':
        this.route.navigate(['groups'])
        break;
    }
  }
}
