import { OrangService } from '../../orang.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  orang: any;

  constructor(private _ngZone: NgZone, private route: ActivatedRoute, private router: Router, private http: HttpClient, private service: OrangService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ambilOrang();  
    });
    this.ambilOrang();
  }

  ambilOrang() {
    this.service.ambilOrang().subscribe(res => {
			this.orang = res;
    }, err => {
    	alert('ERROR !!!'+ "\n" + 'Server backend tidak aktif');
    });
  }

  	hapusOrang(id) {
  		if (confirm('Yakin hapus ?')) {
        this.service.hapusOrang(id);
        this.service.ambilOrang().subscribe(res => {
          this.orang = res;
        }, err => {
          alert('ERROR !!!'+ "\n" + 'Server backend tidak aktif');
        });
  		}
	}
}