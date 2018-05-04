import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public data = [];

  constructor(
    private dataService: DataServiceService
  ) {}

  ngOnInit() {
    this.getAlbumsData();
  }

  getAlbumsData(): void {
    this.dataService
      .getAlbumData()
      .then(data => {
        this.data = data;
      });
  }

}
