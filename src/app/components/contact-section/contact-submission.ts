import { Injectable } from '@angular/core';
import { contactConfig } from './contact.config';

export interface ContactRequest {
  name: string;
  email: string;
  contact: string;
  projectName: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

export interface ContactSubmissionResult {
  enabled: boolean;
  recipientEmail: string;
}

@Injectable({ providedIn: 'root' })
export class ContactSubmissionService {
  submit(_request: ContactRequest): Promise<ContactSubmissionResult> {
    return Promise.resolve({
      enabled: Boolean(contactConfig.formEndpoint),
      recipientEmail: contactConfig.recipientEmail,
    });
  }
}
