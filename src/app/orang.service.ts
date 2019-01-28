import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class OrangService {

  parentUri = 'http://localhost:3000/';
  constructor(private http: HttpClient) { 
    
  }

  tambahOrang(nama, umur, alamat) {
    const uri = this.parentUri + 'orangs';
    const obj = {
      nama: nama,
      umur: umur,
      alamat: alamat,
    };
    this.http.post(uri, obj)
        .subscribe(res => {
          map(res => {
            return res;
          });
        }, err => {
          alert('ERROR !!!' + "\n" + err.error.description);
        });
  }

  ambilOrang() {
    const uri = this.parentUri + 'orangs';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
                          return res;
                        }));
  }

  ambil1Orang(id) {
    const uri = this.parentUri + 'orangs/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
                          return res;
                        }));
  }

  ubahOrang(nama, umur, alamat, id) {
    const uri = this.parentUri + 'orangs/' + id;
    const obj = {
      nama: nama,
      umur: umur,
      alamat: alamat,
    };

    return this
            .http
            .put(uri, obj)
            .subscribe(res => {
              map(res => {
                return res;
              });
            }, err => {
              alert('ERROR !!!' + "\n" + err.error.description);
            });
  }

  hapusOrang(id) {
    const uri = this.parentUri + 'orangs/' + id;
    return this
            .http
            .delete(uri)
            .subscribe(res => {
              map(res => {
                return res;
              });
            }, err => {
              alert('ERROR !!!' + "\n" + err.error.description);
            });
  }
}