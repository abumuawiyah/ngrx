import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-seek-ul",
    templateUrl: "./seek-ul.component.html",
    styleUrls: ["./seek-ul.component.scss"]
})
export class SeekUlComponent implements OnInit {
    @Input()
    data;
    @Input()
    metadata = { uniqId: null };
    @Output()
    radioClicked = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onRadioClick(e, item) {
        this.radioClicked.emit({
            data: item,
            metadata: this.metadata
        });
    }
}
