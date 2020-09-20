import { LaunchService } from './../../services/launch.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public truthyFalsy = ['true', 'false'];
  public selectedItem: any = {};
  public labelType1: string;
  public labelType2: string;
  public labelType3: string;
  public filters = [
    {
      tag: 'Launch Year',
      label: 'launch_year',
      items: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    },
    {
      tag: 'Successful Launch',
      label: 'launch_success',
      items: this.truthyFalsy
    },
    {
      tag: 'Successful Laing',
      label: 'land_success',
      items: this.truthyFalsy
    }
  ];
  @Output() filterParams = new EventEmitter();

  constructor(
    private launchService: LaunchService
  ) { }

  ngOnInit(): void {
  }

  select( label: string, value: any) {
    if (this.selectedItem[label] === value) {
      delete this.selectedItem[label];
    } else {
      this.selectedItem = {
        ...this.selectedItem,
        [label]: value
      };
    }
    this.filterParams.emit(this.selectedItem);
  }

}
