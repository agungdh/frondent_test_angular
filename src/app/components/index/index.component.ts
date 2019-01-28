import { OrangService } from '../../orang.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  orang: any;

  constructor(private http: HttpClient, private service: OrangService) {}

  ngOnInit() {
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
  		}
	}
}