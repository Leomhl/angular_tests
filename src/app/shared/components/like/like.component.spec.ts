import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id.service';
import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;

  beforeEach(async () => {

    // TestBed is used to declare modules and configure the structure that's necessary
    // to run the component test
    await TestBed.configureTestingModule({
      declarations: [ LikeComponent ],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    // Is not a good ideia use only detect changes here, 
    // if is necessary pass values into the onInit, this funcion will be fired
    // before the value atribution. The correct is use here and inside a it element if
    // some value changes to occur
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    expect(component.id).toBeTruthy();
  });

  it('Should not auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  // Done is used to create asynchronous tests
  // it(`#${LikeComponent.prototype.like.name} should trigger emission when called`, done => {
  //   fixture.detectChanges();
  //   component.liked.subscribe(() => {
  //     expect(true).toBeTrue();
  //     done();
  //   })
  //   component.like();
  // });


  // This is a more simple approach to develop the test of emission
  it(`#${LikeComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
