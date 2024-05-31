import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone:true,
  imports:[CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-option.component.html',
  styles: ``
})
export default class DeferOptionComponent {

}
