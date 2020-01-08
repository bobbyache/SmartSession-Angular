import { Component } from '@angular/core';
import { CoreInfrastructureService } from './shared/core-infrastructure.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = this.core.applicationName;
  version = this.core.version;

  constructor(private core: CoreInfrastructureService) {}
}
