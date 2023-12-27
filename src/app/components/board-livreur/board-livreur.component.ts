import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user.service';
@Component({
  selector: 'app-board-livreur',
  templateUrl: './board-livreur.component.html',
  styleUrls: ['./board-livreur.component.css']
})
export class BoardLivreurComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLivreurBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
}
