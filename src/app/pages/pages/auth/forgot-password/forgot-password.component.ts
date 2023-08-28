import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { ForgotPassword } from 'src/app/services/ForgotPassword';
@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {
	forgotPasswordForm	: FormGroup;
  formForgot : NgForm;
  captchaResponse: string;
  form = this.fb.group({
    email: [null, Validators.required]
  });
  emailPattern   : string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  envir :string;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private formBuilder : FormBuilder,
    private forgotPassword :ForgotPassword
   
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
			email:["",[Validators.required,Validators.pattern(this.emailPattern)]],
		})
		// const timeoutId = setTimeout(this.resetPasswordFormOpen, 5000);
    // console.log("---------------->this is bib",this.envir)
  }

  send() {
    this.router.navigate(['/SucessSend']);
  }

  async resetPasswordFormOpen(event,forgotPasswordForm){
    // console.log("------------>",event);
		this.formForgot = event;
		console.log(forgotPasswordForm.value.email);
		if(this.formForgot.valid && forgotPasswordForm.valid){
      // this.forgotPassword.getEnvir(forgotPasswordForm.value.email ).subscribe((returnBack : any) =>{
      //   console.log(returnBack)
      // })
     
			(await this.forgotPassword.sendEmail(forgotPasswordForm.value.email)).subscribe((check: any) => {
						console.log(check);
				})
			this.router.navigate(['/SucessSend']);
		}
  }

}
