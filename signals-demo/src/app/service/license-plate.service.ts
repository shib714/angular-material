import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LicensePlate } from '../model/license-plate';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  url: string = 'https://lp-store-server.vercel.app/data';

  http: HttpClient = inject(HttpClient);

  fetchPlates() {
    return this.http.get<LicensePlate[]>(this.url);
  }
}
