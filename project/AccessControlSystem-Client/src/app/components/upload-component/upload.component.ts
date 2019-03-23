import {Component, Output, EventEmitter, ViewChild, ElementRef, Input, Inject} from '@angular/core';
import {ComponentPortal} from "@angular/cdk/portal";
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  'selector': 'input-file',
  'templateUrl': './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  public imagePath;
  imgURL: '../../../assets/user.png';
  public message: string;

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
