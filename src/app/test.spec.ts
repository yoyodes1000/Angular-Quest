import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailServiceService } from './shared/cocktail-service.service';
import { HttpClientModule } from '@angular/common/http';


describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CocktailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should be created', () => {
    const service: CocktailServiceService = TestBed.inject(CocktailServiceService);
    expect(service).toBeTruthy();
  });

  it('service should have a "getCocktails" method which returns at least one object', () => {
    const service: CocktailServiceService = TestBed.inject(CocktailServiceService);
    const cocktails = service.getCocktails()
    expect(cocktails.length).toBeGreaterThan(0);
  });

  it('should create a CocktailListComponent instance', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(
    'component should have a public property named "cocktails"',
    waitForAsync(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.cocktails).toBeTruthy();
      }
    )
  );
});