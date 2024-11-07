import { NgModule } from "@angular/core";
import { ChatPageComponent } from "./chat-page/chat-page.component";
import { ChatDetailsComponent } from "./chat-details/chat-details.component";
import { GroupsPageComponent } from "./groups-page/groups-page.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { RouterModule, Routes } from "@angular/router";
import { MainChatComponent } from "./main-chat/main-chat.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [ 
    {
    path:'',
    component: MainChatComponent,
    children:[
        {path:'chat',component: ChatPageComponent},
        {path:'groups',component: GroupsPageComponent},
        {path:'chatDetails/:user',component: ChatDetailsComponent}
    ]},
    
];

@NgModule({
    declarations:[
    ChatPageComponent,
    ChatDetailsComponent,
    SideNavComponent,
    GroupsPageComponent,
    MainChatComponent
    ],
    imports:[
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class ChatPageModule {};