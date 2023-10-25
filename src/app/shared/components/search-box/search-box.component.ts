import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  //Esto crea un observable para que inicie la búsqueda mientras escribe en la searchBox
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  //Evento que ejecutará la petición de debouncer en el html
  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500) //Dice cuanto tiempo debe esperar antes de ejecutar lo siguiente
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      });
    }

    //tiene como finalidad destruir el componente para que no siga siendo escuchado y gastando recursos, cuando sale de la página
    ngOnDestroy(): void {
      console.log('unsubscribe of debouncer');
      this.debouncerSuscription?.unsubscribe();
    }

    emitValue( value: string): void {
      this.onValue.emit(value);
    }

    onKeyPress( searchTerm: string ): void {
      this.debouncer.next( searchTerm );

    }


  }
