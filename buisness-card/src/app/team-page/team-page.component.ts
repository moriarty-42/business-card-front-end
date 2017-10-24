import { Component } from '@angular/core';

@Component({
    templateUrl: "team-page.component.html",
})
export class TeamPageComponent {

    private componentValue;
    private componentClick(name: string) {
        this.componentValue = name;
    }
}
