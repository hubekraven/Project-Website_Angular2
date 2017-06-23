import { Component, OnInit, Input} from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';



@Component({
  selector: 'app-affiche-dialogue',
  templateUrl: './affiche-dialogue.component.html',
  styleUrls: ['./affiche-dialogue.component.scss']
})

export class AfficheDialogueComponent implements OnInit {
   dialogueMsg:string;

  constructor(private dialogRef:MdDialogRef<AfficheDialogueComponent>) { }

  ngOnInit() {
      //**Ref:http://stackoverflow.com/questions/40648252/angular2-material-mddialog-pass-in-variable
      this.dialogueMsg=this.dialogRef.config.data;//reçoit le message passé en parametre
  }

}
