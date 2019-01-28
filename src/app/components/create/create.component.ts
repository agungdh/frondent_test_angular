import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrangService } from '../../orang.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Tambah Orang';
  angForm: FormGroup;
  constructor(private _ngZone: NgZone, private route: ActivatedRoute, private router: Router, private service: OrangService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      nama: ['', Validators.required ],
      umur: ['', Validators.required ],
      alamat: ['', Validators.required ],
   });
  }
  tambahOrang(nama, umur, alamat) {
      this.service.tambahOrang(nama, umur, alamat);
      this._ngZone.run(() => {
        this.router.navigate(['index']);
      });
  }
  ngOnInit() {
  }
}