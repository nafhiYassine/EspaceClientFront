import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../../app/models/User';
import { AuthService } from '../../../../../app/services/Auth.service'
import { TokenStorageService } from '../../../../../app/token-storage-service'

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
	user :User ;
  inputType = 'password';
  visible = false;
  emailPattern : string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";


  constructor(private router: Router,
              private fb: FormBuilder,
              public authService : AuthService,
              private cd: ChangeDetectorRef,
              private tokenStorage : TokenStorageService,
              private userServices :UserService,
              private snackbar: MatSnackBar
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
      username: ['', 
      // [Validators.required,Validators.pattern(this.emailPattern)]
    ],
      password: [''
      // , Validators.required,Validators.minLength(8), [this.asyncPasswordValidator]
    ]
    });
  }
  async logInFormOpen(){
		this.user = this.form.value
    console.log('Username ' + this.user.username)
		if(this.form.valid){
      console.log('Valid Form');
      (await this.authService.authenticate(this.user)).subscribe((authorization: string) => {
			if(authorization==null){
        console.log("1")
			  this.router.navigate(['/404']);
        this.snackbar.open('Your Password is not working', 'OK', {
          duration: 10000
        });
			}else if(authorization !==null){ 
        console.log("2")

			this.tokenStorage.saveToken(authorization,this.user.username);
      this.router.navigate(['/apps/help-center/mon-contrat']);
      this.snackbar.open('Successfully logged In! ;)', 'OK', {
        duration: 10000
      });
		  }
			});
		}
		else{
			for( let i in this.form.controls)
			{
				this.form.controls[i].markAsTouched();
			}
		}		
	}

  asyncPasswordValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous validation that resolves after a short delay
      setTimeout(() => {
        if (control.value === 'example') {
          resolve({ asyncError: true }); // Validation failed
        } else {
          resolve(null); // Validation passed
        }
      }, 1000); // Simulating a 1-second delay
    });
  }

  send() {
    
    this.router.navigate(['/']);
    this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'LOL THANKS', {
      duration: 10000
    });
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
}
