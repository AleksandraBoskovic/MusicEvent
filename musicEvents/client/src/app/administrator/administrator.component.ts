import { UserResponse } from './../../models/userResponse';
import { NetworkService } from './../services/network.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from './../../models/event';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit, OnDestroy {

  public checkoutForm: FormGroup;
  public eventForm: FormGroup;

  private activeSubscriptions: Subscription[];
  events: Event[];

  public btnNewAdministratorClicked: boolean;
  public btnNewEvent : boolean;

  constructor(private formBuilder: FormBuilder, private networkService: NetworkService,
    private eventService: EventService) {
    this.btnNewAdministratorClicked = false;
    this.btnNewEvent=false;

    this.eventService.getEvents().subscribe(data => this.events = data);

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


    this.eventForm = this.formBuilder.group({
      detalji: ['', [Validators.pattern('[0-9a-zA-Z ]*')]],
      nazivDog: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
      cena: ['', [Validators.required, Validators.min(0)]],
      slika:['',[Validators.pattern('[0-9a-zA-Z]+\.(jpg|png|jpeg)')]],
      kapacitet: ['', [Validators.required, Validators.min(0)]],
      datum: ['', [Validators.required]],
      vrstaMuzike: ['', [Validators.required, Validators.pattern('dzez|rok|tehno|etno|rejv|klasicna')]],
      vrstaDogadjaja: ['', [Validators.required, Validators.pattern('koncert|svirka|festival')]],
      adresa: ['', [Validators.required, Validators.pattern('[a-zA-Z]+ [a-zA-Z0-9]*')]],
      slobodanUlaz:['',[Validators.required,Validators.pattern('da|ne')]]
      
    });
  }




  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.activeSubscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public onButtonNewAdministrator() {

    if (this.btnNewAdministratorClicked === true) {
      this.btnNewAdministratorClicked = false;
      return;
    }

    this.btnNewAdministratorClicked = true;
  }

  public onBtnNewEvent()
  {
    if(this.btnNewEvent===true)
    {
      this.btnNewEvent=false;
      return;
    }
    this.btnNewEvent=true;
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

    const createSub = this.networkService.createAdministrator(registerData).subscribe((data: UserResponse) => {
      window.alert("Administrator successfully created");
      this.checkoutForm.reset();
      this.btnNewAdministratorClicked = false;
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


  public submitForm(data) {
    if (!this.eventForm.valid) {
      window.alert('Not valid');
      return;
    }else
    {
      const eventData={
        detalji: data.detalji,
        nazivDog: data.nazivDog,
        slika: data.slika,
        cena: data.cena,
        kapacitet: data.kapacitet,
        datum: data.datum,
        vrstaMuzike: data.vrstaMuzike,
        vrstaDogadjaja: data.vrstaDogadjaja,
        adresa: data.adresa,
        slobodanUlaz: data.slobodanUlaz
      }
  
      const createEventSub = this.eventService.createEvent(eventData).subscribe(() =>{
        window.alert("Event created");
        this.eventForm.reset();
        this.btnNewEvent=false;
      },
        (err)=>{
          window.alert("Something went wrong");
          
        }
      );
        this.activeSubscriptions.push(createEventSub);
    } 
   }


  public detalji() {
    return this.eventForm.get('detalji');
  }
  public slika() {
    return this.eventForm.get('slika');
  }

  public nazivDog() {
    return this.eventForm.get('nazivDog');
  }

  public adresa() {
    return this.eventForm.get('adresa');
  }

  public datum() {
    return this.eventForm.get('datum');
  }

  public cena() {
    return this.eventForm.get('cena');
  }

  public kapacitet() {
    return this.eventForm.get('kapacitet');
  }

  public vrstaMuzike() {
    return this.eventForm.get('vrstaMuzike');
  }

  public vrstaDogadjaja() {
    return this.eventForm.get('vrstaDogadjaja');
  }

  public slobodanUlaz() {
    return this.eventForm.get('slobodanUlaz');
  }

 


}
