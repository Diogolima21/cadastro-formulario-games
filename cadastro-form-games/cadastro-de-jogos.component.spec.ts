import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeJogosComponent } from './cadastro-de-jogos.component';

describe('CadastroDeJogosComponent', () => {
  let component: CadastroDeJogosComponent;
  let fixture: ComponentFixture<CadastroDeJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
