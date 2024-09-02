import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

// Pueden sobrevivir por si mismos
@Component({
  // selector: 'app-alone-page',
  // Esto es lo que lo hace un componente propiamente independiente
  standalone: true,
  imports: [CommonModule, CounterAloneComponent, SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css',
})
export class AlonePageComponent {}
