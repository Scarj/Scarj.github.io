import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroDetailComponent} from './hero-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule.withRoutes([
        {path: 'details/11', component: HeroDetailComponent}
      ])],
      declarations: [HeroDetailComponent],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
