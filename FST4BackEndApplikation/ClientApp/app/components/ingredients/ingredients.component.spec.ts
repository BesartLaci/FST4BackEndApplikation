/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { IngredientsComponent } from './ingredients.component';

let component: IngredientsComponent;
let fixture: ComponentFixture<IngredientsComponent>;

describe('ingredients component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IngredientsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(IngredientsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});