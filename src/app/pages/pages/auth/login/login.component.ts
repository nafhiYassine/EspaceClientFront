import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../../app/models/User';
import { AuthService } from '../../../../../app/services/Auth.service'
import { TokenStorageService } from '../../../../../app/token-storage-service'
import jwt_decode from "jwt-decode";

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: User;
  inputType = 'password';
  visible = false;
  emailPattern: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  jwtToken: string;
  issuer: string;
  id: string;
  compo: string;


  constructor(private router: Router,
    private fb: FormBuilder,
    public authService: AuthService,
    private cd: ChangeDetectorRef,
    private tokenStorage: TokenStorageService,
    private userServices: UserService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
			username	: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
			password	: ['',[Validators.required,Validators.minLength(6)]],
    });
  }

  async logInFormOpen() {
    this.user = this.form.value;
    if (this.form.valid) {
      (await this.authService.authenticate(this.user)).subscribe(
        (data: { authorization: string; refreshToken: string }) => {
          if (data.authorization == null) {
            this.router.navigate(['/404']);
            this.snackbar.open('Your Password is not working', 'OK', {
              duration: 10000
            });
          } else {
            this.tokenStorage.storeSessionData(data.authorization, data.refreshToken);
            this.router.navigate(['/apps/home/mon-contrat']);
            this.snackbar.open(' Connexion réussie ! ', 'OK', {
              duration: 2000
            });
          }
        },
        (error) => {
          // Handle error if needed
        }
      );
    } else {
      for (let i in this.form.controls) {
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
