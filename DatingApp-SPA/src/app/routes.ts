import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessageComponent } from './message/message.component';
import { MemberComponent } from './member/member.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'lists', component: ListsComponent},
    { path: 'messege', component: MessageComponent},
    { path: 'member', component: MemberComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];