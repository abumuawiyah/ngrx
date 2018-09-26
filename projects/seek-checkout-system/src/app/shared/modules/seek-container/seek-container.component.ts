import {
    Component,
    OnInit,
    Input,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild
} from "@angular/core";

@Component({
    selector: "app-seek-container",
    templateUrl: "./seek-container.component.html",
    styleUrls: ["./seek-container.component.scss"]
})
export class SeekContainerComponent implements OnInit {
    @Input()
    data;
    @Input()
    metadata;
    @ViewChild("body", { read: ViewContainerRef })
    dynamicComponentContainer: ViewContainerRef;
    header = { text: "" };
    body = { text: "" };
    footer = { text: "" };

    constructor(private resolver: ComponentFactoryResolver) {}

    printTextByKey(key) {
        return this.data[key] || key;
    }

    ngOnInit() {
        const componentFactory = this.resolver.resolveComponentFactory(
            this.metadata.components.body
        );
        const viewContainerRef = this.dynamicComponentContainer;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance["data"] = this.data[
            this.metadata.dataAccess.body
        ];
        componentRef.instance["metadata"].uniqId = this.data.label;
        componentRef.instance[this.metadata.actionReference.body].subscribe(
            this.metadata.actions[this.metadata.actionReference.body]
        );
        this.header.text = this.printTextByKey(this.metadata.texts.header);
        this.footer.text = this.printTextByKey(this.metadata.texts.footer);
    }
}
