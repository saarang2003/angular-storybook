import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title: string = 'Navbar';
  @Input() imageSrc: string = '';
  isMobile: boolean = false;
  isMenuOpen: boolean = false;

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
