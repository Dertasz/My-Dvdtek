import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dvd } from '../../models/dvd.model';
import { DvdsService } from '../../services/dvds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.scss']
})
export class DvdFormComponent implements OnInit {

  dvdForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, private dvdsService: DvdsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.dvdForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

  onSaveDvd() {
    const title = this.dvdForm.get('title').value;
    const author = this.dvdForm.get('author').value;
    const synopsis = this.dvdForm.get('synopsis').value;
    const newDvd = new Dvd(title, author);
    newDvd.synopsis = synopsis;
    if (this.fileUrl && this.fileUrl !== '') {
      newDvd.photo = this.fileUrl;
    }
    this.dvdsService.createNewDvd(newDvd);
    this.router.navigate(['/dvds']);
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.dvdsService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }
}

