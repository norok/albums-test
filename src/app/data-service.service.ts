import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { toPromise } from 'rxjs';

@Injectable()
export class DataServiceService {

  private albumsUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: Http) {}

  public getAlbumData(): Promise<any> {
    const that = this;

    return this.http.get(this.albumsUrl)
                .toPromise()
                .then(response => that.transformData(response))
                .catch(this.handleError);
  }

  private transformData(response) {
    let data = [];
    let albums = {};
    let returnData = [];

    data = JSON.parse(response._body).reverse();

    for (const albumData of data) {
      if (!albums[albumData.albumId]) {
        albums[albumData.albumId] = [];
      }
      if (albums[albumData.albumId].length <= 2) {
        albums[albumData.albumId].push(albumData);
      }
    }

    returnData = Object.values(albums);
    returnData = returnData.slice(0, 3);

    return returnData;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred while loading the albums, please try again', error);
    return Promise.reject(error.message || error);
  }

}
