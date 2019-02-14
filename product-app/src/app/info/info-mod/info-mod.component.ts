import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-info-mod',
  templateUrl: './info-mod.component.html',
  styleUrls: ['./info-mod.component.css']
})
export class InfoModComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}
