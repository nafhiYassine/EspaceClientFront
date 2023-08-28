import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { Token } from '@angular/compiler';
import { ForgotPassword } from 'src/app/services/ForgotPassword';
import { PasswordModel } from 'src/app/models/PasswordModel';


@Component({
  selector: 'vex-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class ResetPasswordComponent {
  form: UntypedFormGroup;

  inputType = 'password';
  visible = false;
	tokenParam :string;
  err=false;
  passwordModel : PasswordModel;
  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private cd: ChangeDetectorRef,private route :ActivatedRoute,private forgotService :ForgotPassword
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(10)]],
      passwordConfirm: ['', Validators.required]
    },{ validators: this.passwordsMatchValidator });
    this.route.queryParams
			  .subscribe(params => {
				this.tokenParam=params.token;
			  })
        console.log("----->tzest",this.tokenParam);
  }

  send() {
    if(this.form.valid){
      this.passwordModel=this.form.value.password;
      this.forgotService.changePassword(this.tokenParam,this.passwordModel).subscribe({
        
      })
      this.router.navigate(["/login"]);
   
  }
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
  passwordsMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('passwordConfirm')?.value;
    if (password !== confirmPassword) {
      control.get('passwordConfirm')?.setErrors({ passwordsMismatch: true });
    } else {
      control.get('passwordConfirm')?.setErrors(null);
    }
    return null;
  }

}
