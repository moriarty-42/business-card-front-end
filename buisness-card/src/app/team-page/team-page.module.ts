import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamPageComponent } from './team-page.component';
import { TeamMemberCard } from '../components/team-member-card/team-member-card.component';

const ROUTES: Routes = [{
    path: "team", component: TeamPageComponent
}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [TeamPageComponent, TeamMemberCard],
    exports: []
})
export class TeamPageModule {
}