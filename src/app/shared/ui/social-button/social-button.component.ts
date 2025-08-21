import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SocialPlatform = 'linkedin' | 'instagram' | 'behance' | 'email' | 'github' | 'dribbble' | 'twitter';
export type SocialButtonSize = 'sm' | 'md' | 'lg' | 'floating';
export type SocialButtonVariant = 'default' | 'minimal' | 'filled';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css']
})
export class SocialButtonComponent {
  @Input() platform!: SocialPlatform;
  @Input() url!: string;
  @Input() size: SocialButtonSize = 'md';
  @Input() variant: SocialButtonVariant = 'default';
  @Input() showLabel = false;
  @Input() customLabel?: string;

  get buttonClasses(): string {
    const baseClasses = 'social-button inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
    
    const sizeClasses = {
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      floating: 'w-14 h-14 text-xl shadow-lg hover:shadow-xl'
    };

    const variantClasses = {
      default: 'bg-white text-gray-600 border border-gray-200 hover:border-transparent shadow-sm',
      minimal: 'bg-transparent text-gray-600 hover:bg-gray-100',
      filled: 'text-white shadow-md'
    };

    const platformClass = this.platform;

    const labelClass = this.showLabel ? 'rounded-full px-4' : '';

    return [
      baseClasses,
      sizeClasses[this.size],
      variantClasses[this.variant],
      platformClass,
      labelClass
    ].filter(Boolean).join(' ');
  }

  get iconClasses(): string {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      floating: 'w-7 h-7'
    };

    return sizeClasses[this.size];
  }

  get iconSvg(): string {
    const icons: Record<SocialPlatform, string> = {
      linkedin: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
      
      instagram: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>`,
      
      behance: `<path d="M13.12 10.122c.238-.223.411-.512.526-.865.114-.353.171-.735.171-1.146 0-.44-.054-.83-.162-1.17-.107-.34-.28-.622-.519-.846-.238-.224-.544-.39-.917-.497-.373-.107-.822-.161-1.347-.161H6.947v4.986h3.925c.525 0 .974-.054 1.347-.161.373-.107.679-.273.917-.497zM12.7 14.736c.336-.23.603-.537.8-.92.197-.383.295-.822.295-1.317 0-.495-.098-.934-.295-1.317-.197-.383-.464-.69-.8-.92-.336-.23-.735-.406-1.197-.527-.462-.121-.96-.182-1.495-.182H6.947v5.91h4.061c.535 0 1.033-.061 1.495-.182.462-.121.861-.297 1.197-.527zM24 7.3h-5.5v1.4H24V7.3zM18.5 0C10.492 0 4 6.492 4 14.5S10.492 29 18.5 29 33 22.508 33 14.5 26.508 0 18.5 0zm-7.553 18.7c-.736.736-1.736 1.1-3 1.1H2v-4.4h5.947c1.264 0 2.264.364 3 1.1.736.736 1.1 1.736 1.1 3s-.364 2.264-1.1 3zm12.553-3.3c0 1.5-.5 2.7-1.5 3.6s-2.4 1.35-4.2 1.35H12v-9.9h5.8c1.8 0 3.2.45 4.2 1.35s1.5 2.1 1.5 3.6z"/>`,
      
      email: `<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>`,
      
      github: `<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>`,
      
      dribbble: `<path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-7.512-1.563-7.512-1.563-.126-.252-.252-.504-.504-.756 1.917-.756 3.71-1.916 5.743-3.379zM12 2.017c2.017 0 3.906.63 5.428 1.764-1.764 1.26-3.431 2.143-5.05 2.773C10.85 4.017 9.346 2.52 7.59 1.512 8.976 1.134 10.488 2.017 12 2.017zm-3.71.378c1.638.882 3.024 2.143 4.41 4.41-2.395.756-5.05 1.134-8.074 1.134-.126 0-.252 0-.378 0 .378-2.395 1.638-4.41 4.042-5.544zM2.017 12c0-.126 0-.252 0-.378 .378 0 .756 0 1.134 0 3.402 0 6.426-.378 9.198-1.26.126.252.252.504.378.756-2.647.756-4.914 2.269-6.804 4.536C3.277 14.395 2.017 13.26 2.017 12zm3.71 7.568C4.52 18.374 3.78 16.23 4.52 14.017c1.512-1.89 3.402-3.024 5.67-3.654.882 2.269 1.512 4.662 1.89 7.058-2.395.63-4.914.378-6.426-.882zm7.058.378c-.378-2.143-.882-4.284-1.638-6.3 2.143-.378 4.41-.252 6.804.252-.504 2.647-2.017 4.914-4.166 6.048z"/>`,
      
      twitter: `<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>`
    };

    return icons[this.platform] || '';
  }

  get hasCustomIcon(): boolean {
    const customIcons: Record<string, boolean> = {
      linkedin: true,
      instagram: true,
      behance: false,
      email: false,
      github: false,
      dribbble: false,
      twitter: false
    };

    return customIcons[this.platform] || false;
  }

  get customIconPath(): string {
    const iconPaths: Record<string, string> = {
      linkedin: 'linkedin.ico',
      instagram: 'instagram.ico'
    };

    return iconPaths[this.platform] || '';
  }

  get ariaLabel(): string {
    const labels: Record<SocialPlatform, string> = {
      linkedin: 'Visitar perfil de LinkedIn',
      instagram: 'Visitar perfil de Instagram',
      behance: 'Visitar perfil de Behance',
      email: 'Enviar correo electrónico',
      github: 'Visitar perfil de GitHub',
      dribbble: 'Visitar perfil de Dribbble',
      twitter: 'Visitar perfil de Twitter'
    };

    return this.customLabel || labels[this.platform] || `Visitar ${this.platform}`;
  }
}
