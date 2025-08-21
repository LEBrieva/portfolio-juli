import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import { I18nService } from '../../services/i18n.service';
import { ContactInfo, SocialLink } from '../../shared/interfaces/common.interfaces';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent, CardComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitStatus = signal<'success' | 'error' | null>(null);
  submitMessage = signal<string>('');

  contactInfo: ContactInfo[] = [
    {
      type: 'email',
      value: 'juli@juliportfolio.com',
      label: 'Email',
      icon: '📧'
    },
    {
      type: 'phone',
      value: '+54 9 11 1234-5678',
      label: 'WhatsApp',
      icon: '📱'
    },
    {
      type: 'location',
      value: 'Buenos Aires, Argentina',
      label: 'Ubicación',
      icon: '📍'
    },
    {
      type: 'linkedin',
      value: 'linkedin.com/in/julimartinez',
      label: 'LinkedIn',
      icon: '💼'
    }
  ];

  socialLinks: SocialLink[] = [
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/julimartinez', icon: '💼', label: 'LinkedIn' },
    { platform: 'Instagram', url: 'https://instagram.com/julimartinez_', icon: '📸', label: 'Instagram' },
    { platform: 'Behance', url: 'https://behance.net/julimartinez', icon: '🎨', label: 'Behance' },
    { platform: 'WhatsApp', url: 'https://wa.me/5491112345678', icon: '💬', label: 'WhatsApp' }
  ];

  workingHours = [
    { day: 'Lunes - Viernes', hours: '9:00 - 18:00', available: true },
    { day: 'Sábados', hours: '10:00 - 14:00', available: true },
    { day: 'Domingos', hours: 'Cerrado', available: false }
  ];

  quickFAQs = [
    { question: '¿Cuánto tiempo toma un proyecto típico?' },
    { question: '¿Trabajas con clientes internacionales?' },
    { question: '¿Ofreces planes de pago flexibles?' },
    { question: '¿Incluyes revisiones en el precio?' }
  ];

  constructor(
    private fb: FormBuilder,
    private i18nService: I18nService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      service: ['', [Validators.required]],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  getInputClass(fieldName: string): string {
    const baseClass = 'w-full px-4 py-3 border rounded-lg transition-colors duration-200 ';
    const isInvalid = this.isFieldInvalid(fieldName);
    
    if (isInvalid) {
      return baseClass + 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500';
    }
    
    return baseClass + 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500';
  }

  getSelectClass(fieldName: string): string {
    const baseClass = 'w-full px-4 py-3 border rounded-lg transition-colors duration-200 ';
    const isInvalid = this.isFieldInvalid(fieldName);
    
    if (isInvalid) {
      return baseClass + 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500';
    }
    
    return baseClass + 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500';
  }

  getTextareaClass(fieldName: string): string {
    const baseClass = 'w-full px-4 py-3 border rounded-lg transition-colors duration-200 resize-y min-h-[120px] ';
    const isInvalid = this.isFieldInvalid(fieldName);
    
    if (isInvalid) {
      return baseClass + 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500';
    }
    
    return baseClass + 'border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set(null);
    this.submitMessage.set('');

    try {
      // Simulate form submission
      await this.simulateFormSubmission(this.contactForm.value);
      
      this.submitStatus.set('success');
      this.submitMessage.set('¡Mensaje enviado exitosamente! Te responderé dentro de 24 horas.');
      this.contactForm.reset();
      
    } catch (error) {
      this.submitStatus.set('error');
      this.submitMessage.set('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente.');
      
    } finally {
      this.isSubmitting.set(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        this.submitMessage.set('');
        this.submitStatus.set(null);
      }, 5000);
    }
  }

  private async simulateFormSubmission(formData: ContactFormData): Promise<void> {
    // Simulate API call delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Simulated submission error'));
        }
      }, 2000);
    });
  }

  getPhoneHref(phoneNumber: string): string {
    return 'tel:' + phoneNumber.replace(/\s+/g, '');
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }
}
