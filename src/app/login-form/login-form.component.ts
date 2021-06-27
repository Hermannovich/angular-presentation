import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  login: Login | undefined; 

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
