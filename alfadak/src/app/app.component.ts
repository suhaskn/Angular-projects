import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, NewsComponent, ContactComponent, AboutComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ALFADAK';
  status: boolean = false;

  onClick(value: string) {
    // if (value === 'home') {
    //   this.status = value === 'home' ? true : false;
    // }
    // if (value === 'news') {
    //   this.status = value === 'news' ? true : false;
    // }
    // if (value === 'contact') {
    //   this.status = value === 'contact' ? true : false;
    // }
    // if (value === 'about') {
    //   this.status = value === 'about' ? true : false;
    // }
  }
}
