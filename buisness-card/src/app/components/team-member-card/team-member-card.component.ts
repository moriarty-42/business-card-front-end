import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "team-member",
    templateUrl: "team-member-card.component.html",
    styleUrls: ["./team-member-card.component.css"]
})
export class TeamMemberCard {

    @Input()
    public memberName: string;

    @Output()
    public onClick: EventEmitter<string> = new EventEmitter();

    private message: string;

    public newMEssage(event: any) {
        this.message = event.target.value;
    }

    public onClickButton() {
        this.onClick.emit(this.message);
    }
}
