import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  mockData: any;
  constructor() {}

  mock() {
    return (this.mockData = [
      {
        datas: '11/11/2022',
      },
      {
        datas: '01/12/2022',
      },
      {
        datas: '11/09/2022',
      },
    ]);
  }
}
