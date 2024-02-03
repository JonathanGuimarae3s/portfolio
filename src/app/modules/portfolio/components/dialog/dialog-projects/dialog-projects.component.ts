import { Component, Inject, Injector, OnInit, signal } from '@angular/core';
import { Projects } from '../../../interface/projects';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,

  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {
  public getData = signal<Projects | null>(null);
  constructor(private _dialogRef: MatDialogRef<DialogProjectsComponent>, @Inject(MAT_DIALOG_DATA) private _data: Projects) {


  }
  ngOnInit(): void {
    this.getData.set(this._data)
  }

  public closeModal() {

    return this._dialogRef.close();
  }
}
