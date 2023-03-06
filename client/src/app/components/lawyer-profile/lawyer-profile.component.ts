import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Lawyer } from 'src/app/models/lawyer.model';
import { SearchService } from 'src/app/services/search/search.service';
import { DialogueBoxComponent } from '../dialogue-box/dialogue-box.component';

@Component({
  selector: 'app-lawyer-profile',
  templateUrl: './lawyer-profile.component.html',
  styleUrls: ['./lawyer-profile.component.scss'],
})
export class LawyerProfileComponent {
  lawyer!: Lawyer;
  id!: string;
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      // console.log('hello from profile', this.id);
      this.searchService.getSingleLawyer(this.id).subscribe((lawyer) => {
        this.lawyer = lawyer;
        // console.log(this.lawyer);
      });
    } else {
      console.log(`id ${id} not found`);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogueBoxComponent, {
      data: { lawyer: this.id },
    });
  }
}
