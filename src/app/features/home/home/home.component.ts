import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface currency {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // value = 'Clear me';
  // username = 'Unknown';
  currencyData: Observable<any>;
  date: any;
  displayedColumns: string[] = ['ccy', 'base_ccy', 'buy', 'sale'];
  dataSource: currency[] = [
    // { ccy: 'USD', base_ccy: 'UAH', buy: '26.55000', sale: '26.95000' },
    // { ccy: 'EUR', base_ccy: 'UAH', buy: '31.25000', sale: '31.85000' },
    // { ccy: 'RUR', base_ccy: 'UAH', buy: '0.35000', sale: '0.38000' },
    // { ccy: 'BTC', base_ccy: 'USD', buy: '44541.2288', sale: '49229.7792' },
  ];

  columns = [
    { columnsDef: 'ccy', header: 'Name', cell: 'CELL' },
    { columnsDef: 'base_ccy', header: 'Base', cell: 'CELL' },
    { columnsDef: 'buy', header: 'Buy', cell: 'CELL' },
    { columnsDef: 'sale', header: 'Sale', cell: 'CELL' },
  ];

  constructor(private http: HttpClient) {
    this.currencyData = this.http.get(
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    );

    this.date = new Date().toDateString();

    this.currencyData.subscribe((data: currency[]) => {
      console.log(data);
      this.dataSource = data;
    });
  }

  ngOnInit(): void {}

  // setUserName() {
  //   this.username = this.value === '' ? 'Unknown' : this.value;
  // }
}
