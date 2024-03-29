import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
   title!: string;
   description!: string;
   createdDate!: Date;
   snaps!: number;
   imageUrl!: string;

   ngOnInit(): void {
     this.title = "Archibald";
     this.description = "Mon meilleur ami depuis tout petit !"
     this.createdDate = new Date();
     this.snaps = 6;
     this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
   }
}
