import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() title: string = 'Navbar';
  @Input() imageSrc: any = '';
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
