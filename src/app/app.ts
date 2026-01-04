import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hulpverleningszone Oost Vlaams-Brabant: post Landen';
  footerUrl = 'https://oost-vlaams-brabant.hulpverleningszone.be';
  footerLink = 'oost-vlaams-brabant.hulpverleningszone.be';
}