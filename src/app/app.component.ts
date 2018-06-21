import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { CoreState } from './core-data/reducers';
import { LoadMains } from './core-data/main.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  scool$: Observable<any[]>;

  constructor(private store: Store<CoreState>) {}

  ngOnInit(): void {

    this.store.dispatch( new LoadMains());

    this.scool$ = this.store.select('main', 'main', 'scool');
  }
}
