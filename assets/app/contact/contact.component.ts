import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from './contact';


import { FacebookComponent } from '../facebook/facebook.component';

@Component({
  selector: 'app-contact',
  providers: [FacebookComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emails: Array<Contact>;
  contactForm: FormGroup;
  

  //npm i --save ngx-facebook
  //npm install @agm/core --save
  constructor(fb: FormBuilder, private router: Router) { 
  }

  ngOnInit() {
  }
}