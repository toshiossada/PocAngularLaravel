import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AppHttpService } from '../../app-http.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  @Input() totalPage: number;
  @Input() resource: string;
  @Input() activePage: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangePage = new EventEmitter<any>();
  pages: Array<number> = [];

  constructor(private service: AppHttpService) {
    this.totalPage = 0;
    this.activePage = 0;
  }


  ngOnInit() {
    this.searchUsers(1);
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalPage) {
      this.pages = Array(this.totalPage)
        .fill(this.totalPage)
        .map((x, i) => {
          return i + 1;
        });
    }
  }

  changePage($event, page) {
    $event.preventDefault();
    this.searchUsers(page);
  }

  searchUsers(page) {
    this.service.build(this.resource)
      .list(page)
      .subscribe((data) => {
        this.onChangePage.emit(data);
      });
  }

}
