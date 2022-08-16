import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges ->', changes);

  }
  ngOnInit(): void {
    console.log('OnInit ->');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy ->')
  }
  counterRender():boolean{
    console.log('render button ->');
    return true;
  
  }




}
