/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PackagesViewComponent } from './packages-view.component';

let component: PackagesViewComponent;
let fixture: ComponentFixture<PackagesViewComponent>;

describe('packages-view component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PackagesViewComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PackagesViewComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});