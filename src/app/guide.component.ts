import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'left-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./app.component.css']
})

export class GuideComponent {
  guideList = [{
    name: '目录1',
    children: [
      '目录1-1',
      '目录1-2'
    ]
  }, {
    name: '目录2',
    children: [
      '目录2-1',
      '目录2-2'
    ]
  }];
  @Output() pageChange = new EventEmitter<string>();
  title = 'this is guide';
  testFunc(pageName: string): void {
    this.pageChange.emit(pageName);
    this.title = pageName;
}
}
