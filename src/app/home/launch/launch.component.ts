import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
