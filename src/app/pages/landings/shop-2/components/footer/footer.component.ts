import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LogoBoxComponent } from '@components/logo-box/logo-box.component'
import { createdBy, developedByLink } from 'src/app/states/constants'

@Component({
  selector: 'shop2-footer',
  standalone: true,
  imports: [RouterModule, LogoBoxComponent],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  author = createdBy
  developBy = developedByLink
  about = ['About us', 'Our boxes', 'Bestsellers', 'Sale']

  listCenter = [
    'Help center',
    'Delivery info',
    'Terms of service',
    'Privacy policy',
  ]
}
