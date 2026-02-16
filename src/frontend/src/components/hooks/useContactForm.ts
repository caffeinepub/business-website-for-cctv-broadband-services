import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  contact: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  service?: string;
  message?: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact information is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Log form data (in a real app, this would be sent to backend)
    console.log('Form submitted:', formData);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      contact: '',
      service: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSelectChange,
    handleSubmit,
    resetForm
  };
}
