import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SeekUlComponent } from "./seek-ul.component";

describe("SeekUlComponent", () => {
    let component: SeekUlComponent;
    let fixture: ComponentFixture<SeekUlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SeekUlComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SeekUlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
