import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() badge?: string;
  @Input() tags?: string[];
  @Input() variant: 'default' | 'elevated' | 'outlined' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() showActions = false;
  @Input() hoverable = true;
  @Input() customStyles?: { [key: string]: string };

  get cardClasses(): string {
    const baseClasses = 'bg-white rounded-xl overflow-hidden transition-all duration-300';
    
    const variantClasses = {
      default: 'shadow-md',
      elevated: 'shadow-lg hover:shadow-2xl',
      outlined: 'border border-gray-200 shadow-sm hover:shadow-md'
    };

    const hoverClass = this.hoverable ? 'hover:transform hover:-translate-y-1' : '';

    return [baseClasses, variantClasses[this.variant], hoverClass].join(' ');
  }

  get contentClasses(): string {
    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    return paddingClasses[this.padding];
  }

  get titleClasses(): string {
    const sizeClasses = {
      sm: 'text-lg font-semibold text-gray-900',
      md: 'text-xl font-semibold text-gray-900',
      lg: 'text-2xl font-bold text-gray-900'
    };

    return sizeClasses[this.size];
  }
}
