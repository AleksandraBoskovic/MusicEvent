import { NetworkService } from './../services/network.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public checkoutForm: FormGroup;

  constructor(private networkService: NetworkService, private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(formData) {
    this.networkService.doLogin(formData);

  }

}
