import { Component } from '@angular/core'
import { Breadcrumb1Component } from '@components/breadcrumb/breadcrumb-1/breadcrumb-1.component'
import { NavigationBar2Component } from '@components/navigation-bars'
import { HeroComponent } from './component/hero/hero.component'
import { ServiceComponent } from './component/service/service.component'
import { PartnerComponent } from './component/partner/partner.component'
import { SkillsComponent } from './component/skills/skills.component'
import { FooterComponent } from './component/footer/footer.component'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import type { JarallaxOptions } from 'jarallax'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-service-v3',
  standalone: true,
  imports: [
    NavigationBar2Component,
    Breadcrumb1Component,
    HeroComponent,
    ServiceComponent,
    PartnerComponent,
    SkillsComponent,
    FooterComponent,
    JarallaxDirective,
    RouterModule,
  ],
  templateUrl: './service-v3.component.html',
  styles: ``,
})
export class ServiceV3Component {
  jarallaxConfig: JarallaxOptions = {
    speed: 0.6,
  }
}
