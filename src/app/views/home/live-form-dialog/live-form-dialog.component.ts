import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  public liveForm: FormGroup;
  myDate = new Date();

  constructor(    
    private fb: FormBuilder,
    private liveService: LiveService,
    public dialogRef: MatDialogRef<LiveFormDialogComponent>    
  ) { }

  ngOnInit(): void {
    this.liveForm = this.fb.group({
    liveName: ['', [Validators.required]],
    channelName: ['', [Validators.required]],
    liveDate: [this.myDate, [Validators.required]],
    liveTime: ['', [Validators.required]],
    liveLink: ['', [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

  saveLive(): void {
    this.liveService.postLives(this.liveForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.liveForm.reset();
  }

}
