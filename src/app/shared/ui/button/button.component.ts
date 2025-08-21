import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth = false;

  @Output() clicked = new EventEmitter<void>();

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl',
      secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500 shadow-lg hover:shadow-xl',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
      ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    const widthClass = this.fullWidth ? 'w-full' : '';

    return [
      baseClasses,
      variantClasses[this.variant],
      sizeClasses[this.size],
      widthClass
    ].join(' ');
  }

  get iconClasses(): string {
    const position = this.iconPosition === 'left' ? 'mr-2' : 'ml-2 order-1';
    return position;
  }

  handleClick(): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }
}
