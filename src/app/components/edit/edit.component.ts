import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrangService } from '../../orang.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  title = 'Edit Orang';
  constructor(private route: ActivatedRoute, private router: Router, private service: OrangService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      nama: ['', Validators.required ],
      umur: ['', Validators.required ],
      alamat: ['', Validators.required ],
   });
  }

  ubahOrang(nama, umur, alamat) {
    this.route.params.subscribe(params => {
    this.service.ubahOrang(nama, umur, alamat, params['id']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.ambil1Orang(params['id']).subscribe((res: any) => {
        this.angForm.get('nama').setValue(res.nama);
        this.angForm.get('umur').setValue(res.umur);
        this.angForm.get('alamat').setValue(res.alamat);
      }, err => {
              alert('ERROR !!!' + "\n" + err.error.description)
              location.href = "/index";
            });
    });
  }
}