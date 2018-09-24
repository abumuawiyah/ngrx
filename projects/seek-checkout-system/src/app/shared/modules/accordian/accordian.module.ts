import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultAccordionComponent } from "./components/default-accordion/default-accordion.component";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [CommonModule, NgbAccordionModule],
    declarations: [DefaultAccordionComponent],
    exports: [DefaultAccordionComponent]
})
export class AccordianModule {}
