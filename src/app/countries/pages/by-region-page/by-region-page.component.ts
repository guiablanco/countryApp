import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

//Interfaces and Types
import { Country } from '../../interfaces/country.interfaces';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[]= []
  public regions: Region[]= ["Americas", "Asia", "Europe", "Africa", "Oceania"];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService ){

  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ): void {

    this.selectedRegion = region
    this.isLoading = true;

    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      } )
  }


}
