import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onServerCreation() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  // event binding
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    throw new Error('Method not implemented.');
  }
}
