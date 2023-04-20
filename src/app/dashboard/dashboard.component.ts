import { Component } from '@angular/core';
interface Item {
  date: Date;
  name: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  items: Item[] = [
    { date: new Date(2022, 1, 1), name: 'Item 1' },
    { date: new Date(2022, 1, 1), name: 'Item 2' },
    { date: new Date(2022, 1, 2), name: 'Item 3' },
    { date: new Date(2022, 1, 2), name: 'Item 4' },
    { date: new Date(2022, 1, 3), name: 'Item 5' },
    { date: new Date(2022, 1, 3), name: 'Item 6' },
    { date: new Date(2022, 1, 4), name: 'Item 7' },
    { date: new Date(2022, 1, 4), name: 'Item 8' },
    { date: new Date(2022, 1, 5), name: 'Item 9' },
    { date: new Date(2022, 1, 5), name: 'Item 10' },
  ];
  filteredItems: Item[] = [...this.items];

  onFromDateChanged(dateChangeEvent: any) {
    this.filterItems();
  }

  onToDateChanged(dateChangeEvent: any) {
    this.filterItems();
  }

  onSearchInput(event: any) {
    this.filterItems();
  }

  filterItems() {
    // const fromDate: Date = (<HTMLInputElement>document.getElementById('fromDate')).valueAsDate;
    // const toDate: Date = (<HTMLInputElement>document.getElementById('toDate')).valueAsDate;
    // const searchText: string = (<HTMLInputElement>document.getElementById('searchText')).value;

    // this.filteredItems = this.items.filter((item: Item) => {
    //   if (fromDate && item.date < fromDate) {
    //     return false;
    //   }

    //   if (toDate && item.date > toDate) {
    //     return false;
    //   }

    //   if (searchText && !item.name.toLowerCase().includes(searchText.toLowerCase())) {
    //     return false;
    //   }

    //   return true;
    // });
  }

  
}
