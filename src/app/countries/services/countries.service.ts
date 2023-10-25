import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {

    byCapital: {
      term: '',
      countries: []
    },
    byCountries: {
      term: '',
      countries: []
    },
    byRegion: {
      region: '',
      countries: []
    },

  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem( 'cacheStore', JSON.stringify(this.cacheStore) );
  }
  private loadFromLocalStorage(){
    if ( !localStorage.getItem('cacheStore') ) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! )
  }

  /**
   *
   * @param url string con la dirección url a hacer la petición get http.
   * @param term string del término buscado en la barra de búsqueda (para el control de errores).
   * @param searchBy string correspondiente a las opciones "capital", "nombre" o "región" (para el control de errores).
   * @returns Country[]
   */
  private getCountriesRequest(url: string, term: string, searchBy: string): Observable<Country[]>{
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => {
          console.log(error);
          alert(`No hay información de países que tengan como ${searchBy} "${term}"`);
          return of([]);}),
        // delay( 2000 ),
      )
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${ code }`;
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( error => {
          console.log(error);
          alert(`No hay información de países que tengan como código "${code}"`);
          //Esto entrega un observable con un array vacío
          return of(null); })
      ) ;
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${ term }`;
    return this.getCountriesRequest(url, term, "capital")
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term, countries } ),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${ term }`;
    return this.getCountriesRequest(url, term, "nombre")
      .pipe(
        tap( countries => this.cacheStore.byCountries = { term, countries } ),
        tap( () => this.saveToLocalStorage() )
    );
  }

  searchRegion( region: Region ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${ region }`;
    return this.getCountriesRequest(url, region, "región")
      .pipe(
        tap( countries => this.cacheStore.byRegion = { countries, region } ),
        tap( () => this.saveToLocalStorage() )
      );
  }

}

