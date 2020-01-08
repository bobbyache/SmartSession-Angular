import { Component } from '@angular/core';
import { ApplicationSettingsService } from './shared/services/application-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = this.appSettings.applicationName;
  version = this.appSettings.version;

  constructor(private appSettings: ApplicationSettingsService) {}
}
