/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ChocolatesComponent } from './chocolates.component';

let component: ChocolatesComponent;
let fixture: ComponentFixture<ChocolatesComponent>;

describe('chocolates component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChocolatesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ChocolatesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});