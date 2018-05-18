/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { OrderActivitiesComponent } from './order-activities.component';

let component: OrderActivitiesComponent;
let fixture: ComponentFixture<OrderActivitiesComponent>;

describe('order-activities component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OrderActivitiesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(OrderActivitiesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});