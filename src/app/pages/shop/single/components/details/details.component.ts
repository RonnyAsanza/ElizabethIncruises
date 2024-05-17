import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Breadcrumb2Component } from '@components/breadcrumb/breadcrumb-2/breadcrumb-2.component'
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'
import { currency } from 'src/app/states/constants'

@Component({
  selector: 'single-details',
  standalone: true,
  imports: [Breadcrumb2Component, NgbTooltip, LightgalleryModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  selectedCurrency = currency
  count = signal(1)
  colorName: string = 'Gray concrete'
  // decrement
  decrement() {
    this.count.update((prevCount) => prevCount - 1)
  }
  // increments signal
  increment() {
    this.count.update((prevCount) => prevCount + 1)
  }

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
