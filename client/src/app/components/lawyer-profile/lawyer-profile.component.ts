import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lawyer } from 'src/app/models/lawyer.model';

@Component({
  selector: 'app-lawyer-profile',
  templateUrl: './lawyer-profile.component.html',
  styleUrls: ['./lawyer-profile.component.scss']
})
export class LawyerProfileComponent {
  lawyer!: Lawyer
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); 
    console.log("hello from profile", id)
    getSingleLawyer(id).subscribe(r => {
      this.lawyer=r
    })

}

}
