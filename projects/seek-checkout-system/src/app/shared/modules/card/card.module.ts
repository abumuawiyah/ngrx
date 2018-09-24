import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DefaultCardComponent } from "./components/default-card/default-card.component";

@NgModule({
    imports: [CommonModule, NgbModule.forRoot()],
    declarations: [DefaultCardComponent],
    exports: [DefaultCardComponent]
})
export class CardModule {}
