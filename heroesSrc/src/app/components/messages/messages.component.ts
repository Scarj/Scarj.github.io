import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
  }
}