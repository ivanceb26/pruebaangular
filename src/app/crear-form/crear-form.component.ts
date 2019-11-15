import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-form',
  templateUrl: './crear-form.component.html',
  styleUrls: ['./crear-form.component.css']
})

@Injectable()
export class CrearFormComponent implements OnInit {

  title = 'Prueba Usuarios Laravel + Angular';

    public userForm: FormGroup;
    submitted = false;
    user: any;
    users: any;
    // url = 'http://laravel.test';
    url = 'https://www.nwhome19.com/pruebalaravel';

    constructor(private http: HttpClient) {
        this.getUsers();
    }

    ngOnInit() {
    	/*this.userForm = this.formBuilder.group({
    		id:[''],
            nombres: ['', [Validators.required]],
            apellidos: ['', Validators.required],
            cedula: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[0–9]*')]],
            correo: ['', [Validators.required, Validators.email]],
            telefono: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[0–9]*')]],
        });*/
        
        this.userForm = new FormGroup({
        	'id': new FormControl(),
            'nombres': new FormControl('',[Validators.required]),
            'apellidos': new FormControl('', Validators.required),
            'cedula': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
            'correo': new FormControl('', [Validators.required, Validators.email]),
            'telefono': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
        });
    }

    get f() { return this.userForm.controls; }
    // Add a New Product
    //userForm: NgForm
    storeUser(userForm: any) {
        // console.log('Form successful submit.');
        // console.log(productForm.value);
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }

        this.http.post(this.url+'/api/crear', userForm.value).subscribe(res => {
            this.getUsers();
            userForm.reset();
        }, err => {
            console.log('Error occured');
        });
    }

    getUsers() {
        // console.log('Get Products and Update Table');
        return this.http.get(this.url+'/api/listar').subscribe(users => {
            this.users = users;
        });
    }

    showUser(id) {
        console.log('Get User '+id);
        return this.http.get(this.url+'/api/buscar/'+id).subscribe(user => {
            this.user = user;
            this.userForm.patchValue({
                id: this.user.id,
                nombres: this.user.nombres,
                apellidos: this.user.apellidos,
                cedula: this.user.cedula,
                correo: this.user.correo,
                telefono: this.user.telefono
            });
        });
    }

    /*deleteProduct(id) {
        console.log('Delete Product id ' + id);

        this.http.delete('http://laravel-api.testing/api/product/' + id).subscribe(res => {
            console.log('Product Deleted and refresh Table');
            this.getProducts();
        }, err => {
            console.log('Error occured');
        });
    }*/

    putUser(id) {
        console.log('Update User id ' + id);
        console.log(this.userForm);

        this.http.post(this.url+'/api/actualizar', this.userForm.value).subscribe(res => {
            console.log('update executed correctly');
            console.log(JSON.stringify(res));
            this.getUsers();
            this.userForm.reset();
        }, err => {
            console.log('Error occured');
        });
    }

}


