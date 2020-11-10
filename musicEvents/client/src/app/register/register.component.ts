import { UserResponse } from './../../models/userResponse';
import { User } from './../../models/user';
import { NetworkService } from './../services/network.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public checkoutForm: FormGroup;
  private activeSubscriptions: Subscription[];

  constructor(private formBuilder: FormBuilder, private networkService: NetworkService, private router: Router) {
    this.activeSubscriptions = [];
    this.checkoutForm = formBuilder.group({
      name: ["", [Validators.required, Validators.pattern("[A-Z][a-z]+")]],
      surname: ["", [Validators.required, Validators.pattern("[A-Z][a-z]+")]],
      username: ["", [Validators.required, Validators.pattern("[a-z0-9A-Z]{6,12}")]],
      password: ["", [Validators.required, Validators.pattern("[a-z0-9A-Z]{6,12}")]],
      password1: ["", [Validators.required, Validators.pattern("[a-z0-9A-Z]{6,12}")]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern('06[0|1|2|3|4|5|6|9]-[0-9]{3}-[0-9]{4}')]]
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.activeSubscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public onSubmit(formData) {
    if (formData.password !== formData.password1) {
      window.alert("Passwords do not match!")
      return;
    }

    const registerData = {
      name: formData.name,
      surname: formData.surname,
      username: formData.username,
      password: formData.password,
      email: formData.email,
      phone: formData.phone
    }

    const createSub = this.networkService.register(registerData).subscribe((data: UserResponse) => {
      window.alert("Accaunt successfully created");
      this.checkoutForm.reset();
      this.router.navigate(['/login'])
    },
      (err) => {
        if (err.error.message == "usernameExists") {
          window.alert("Username already exists");
        } else if (err.error.message == "passwordExists") {
          window.alert("Password already exists");
        } else {
          window.alert("Something else went wrong");
        }
      }
    );
    this.activeSubscriptions.push(createSub);
  }

}
