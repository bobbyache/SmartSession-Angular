import { Component, OnInit } from '@angular/core';
import { CoreInfrastructureService } from '../shared/core-infrastructure.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  title = this.core.applicationName;
  version = this.core.version;

  constructor(private core: CoreInfrastructureService) { }

  ngOnInit() {
  }

}
