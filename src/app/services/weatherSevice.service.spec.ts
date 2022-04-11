/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherSeviceService } from './weatherSevice.service';

describe('Service: WeatherSevice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherSeviceService]
    });
  });

  it('should ...', inject([WeatherSeviceService], (service: WeatherSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
