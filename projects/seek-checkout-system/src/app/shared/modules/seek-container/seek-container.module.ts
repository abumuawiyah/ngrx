import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeekContainerComponent } from "./seek-container.component";

@NgModule({
    imports: [CommonModule],
    declarations: [SeekContainerComponent],
    exports: [SeekContainerComponent]
})
export class SeekContainerModule {}
