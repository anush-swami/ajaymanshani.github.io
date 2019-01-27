import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.css']
})
export class SearchDashboardComponent implements OnInit { 
  profile:any[];
  username:string;

  constructor(private searchService: SearchService, private location: Location) {}

  findProfile(){
    this.searchService.updateProfile(this.username);
    this.searchService.getUser().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    })
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
