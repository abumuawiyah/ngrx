import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-default-accordion",
    templateUrl: "./default-accordion.component.html",
    styleUrls: ["./default-accordion.component.scss"]
})
export class DefaultAccordionComponent implements OnInit {
    @Input()
    metadata;

    constructor() {}

    ngOnInit() {}
}
