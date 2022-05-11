import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messageservice',
  templateUrl: './messageservice.component.html',
  styleUrls: ['./messageservice.component.sass']
})
export class MessageserviceComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
