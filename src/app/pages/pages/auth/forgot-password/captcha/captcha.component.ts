import { Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

   @Output() eventEmitter : EventEmitter <NgForm> =new EventEmitter<NgForm>();
   
    token: string|undefined;
    form: NgForm;
    constructor() {
      this.token = undefined;
    }

  ngOnInit(): void {
    
  }
  
  public send(form): void {
    if (form.invalid) {

      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    this.eventEmitter.emit(form);
    // console.log(`Token [${this.token}] generated`);
  }

}
