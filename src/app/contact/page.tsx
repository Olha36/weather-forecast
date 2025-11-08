'use client';

import Header from '@/components/Header/Header';
import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import styles from '../../css/contact.module.css';

interface ContactFormInputs {
  name: string;
  email: string;
  message?: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [result, setResult] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setResult('Sending...');
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message || '');
    formData.append('access_key', 'faf674dd-d1ad-4e7c-a4ab-75e7a99b76e5');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const resData = await response.json();

      if (resData.success) {
        Swal.fire({
          title: 'Good job!',
          text: 'Message sent successfully 🙂!',
          icon: 'success',
          customClass: {
            confirmButton: styles.swalBtn,
          },
        });
        reset();
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'Network error. Please try again.',
        icon: 'error',
      });
    } finally {
      setResult('');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>
            Whether you want to start a project, join the team, or just say
            “hi,” we’d love to hear from you.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
          >
            <label className={styles.label}>
              <span className={styles.labelText}>Your Name</span>
              <input
                type="text"
                placeholder="John Doe"
                className={styles.input}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Your Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className={styles.input}
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Your Message</span>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className={styles.textarea}
                {...register('message')}
              />
            </label>

            <button type="submit" className={styles.button} disabled={!!result}>
              {result ? result : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
