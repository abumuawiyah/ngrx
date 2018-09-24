import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DefaultAccordionComponent } from "./default-accordion.component";

describe("DefaultAccordionComponent", () => {
    let component: DefaultAccordionComponent;
    let fixture: ComponentFixture<DefaultAccordionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DefaultAccordionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultAccordionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
