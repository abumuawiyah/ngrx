import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter
} from "@angular/core";

@Component({
    selector: "app-default-card",
    templateUrl: "./default-card.component.html",
    styleUrls: ["./default-card.component.scss"]
    // encapsulation: ViewEncapsulation.Native
})
export class DefaultCardComponent implements OnInit {
    @Input()
    metadata;
    @Output()
    buttonClicked = new EventEmitter();

    constructor() {}

    ngOnInit() {
        console.log("wow", this.metadata);
    }

    onButtonClick(e) {
        this.buttonClicked.emit(e);
    }
}
