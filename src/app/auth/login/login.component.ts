import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../../components/button/button.component";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from "../../config/auth.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, ButtonComponent, ReactiveFormsModule],
    templateUrl: './login.component.html',
})

export class LoginComponent {
    title = 'to-do-list-front';
    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    constructor(private authService: AuthService) { }

    login = () => {
        if (this.loginForm.valid) {
            console.log('Form Submitted', this.loginForm.value);
             const { email, password } = this.loginForm.value;
             this.authService.login(email as string, password as string).subscribe({
                next: (response) => {
                    console.log('Login successful', response);
                    localStorage.setItem('token', response.token);
                },
                error: (error) => {
                    console.error('Login failed', error);
                }
            });
        }else{
            console.error('Form is invalid', this.loginForm.errors);
            // Handle form errors here
        }
    }
}