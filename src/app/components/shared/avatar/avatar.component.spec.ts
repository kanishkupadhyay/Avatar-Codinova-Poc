import { AvatarComponent } from './avatar.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";

describe('AvatarComponent', () => {
    let component: AvatarComponent;
    let fixture: ComponentFixture<any>;
    beforeAll(async()=>{
         await  TestBed.configureTestingModule({
            declarations: [AvatarComponent]
        }).compileComponents()
        fixture = TestBed.createComponent(AvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges()
    })
    test('should have a default name', () => {
        expect(component.name).toEqual("kanishk");
    });

});


