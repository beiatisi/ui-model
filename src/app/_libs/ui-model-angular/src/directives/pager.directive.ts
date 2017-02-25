import { Directive, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Pager } from 'ui-model';

@Directive({
  selector: '[uiPager]',
  exportAs: 'uiPager',
  inputs: ['index', 'recordCount', 'size'],
})
export class PagerDirective extends Pager implements OnInit, OnDestroy {
  constructor() {
    super();
  }

  @Output() indexChange: EventEmitter<number> = new EventEmitter();

  sub: any;

  ngOnInit(): void {
    this.sub = this.changes.subscribe((index) => {
      this.indexChange.emit(index);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
