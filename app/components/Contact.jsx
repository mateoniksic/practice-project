import { useState, useEffect } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import { AnimatedText } from './AnimatedText';

import Image from 'next/image';

import { LuCircleCheckBig } from 'react-icons/lu';

export const Contact = () => {
  const [state, handleSubmit] = useForm('mnnqkdqw');

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });

      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <section
      className='pt-8 xl:pt-32 pb-32 bg-slate-900'
      id='contact'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col items-center xl:flex-row xl:justify-center gap-16'>
          <div className='flex-1 mx-auto xl:mx-0 flex flex-col'>
            <AnimatedText
              text='Kontaktirajte me'
              textStyles='h2 mb-12 text-center xl:text-left text-white'
            />
            <form
              onSubmit={handleFormSubmit}
              className='flex flex-col gap-6 w-full max-w-[480px] bg-slate-50 p-8 rounded-[8px]'
            >
              {/* firstname and lastname */}
              <div className='flex gap-8'>
                {/* firstname */}
                <div className='flex-1'>
                  <label
                    htmlFor='firstname'
                    className='block mb-2 text-sm font-medium text-primary'
                  >
                    Ime <span className='text-accent'>*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type='text'
                    id='firstname'
                    name='firstname'
                    value={formData.firstname}
                    className='input'
                    placeholder='Vaše ime'
                    required
                  />
                </div>
                {/* lastname */}
                <div className='flex-1'>
                  <label
                    htmlFor='lastname'
                    className='block mb-2 text-sm font-medium text-primary'
                  >
                    Prezime <span className='text-accent'>*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type='text'
                    id='lastname'
                    name='lastname'
                    value={formData.lastname}
                    className='input'
                    placeholder='Vaše prezime'
                    required
                  />
                </div>
              </div>
              {/* email */}
              <div className='flex-1'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-primary'
                >
                  Email <span className='text-accent'>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  className='input'
                  placeholder='Vaš email...'
                  required
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
              {/* phone */}
              <div className='flex-1'>
                <label
                  htmlFor='phone'
                  className='block mb-2 text-sm font-medium text-primary'
                >
                  Kontakt broj
                </label>
                <input
                  onChange={handleChange}
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  className='input'
                  placeholder='Vaš kontakt broj +385...'
                />
              </div>
              {/* message */}
              <div className='flex-1'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-primary'
                >
                  Poruka <span className='text-accent'>*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  id='message'
                  name='message'
                  value={formData.message}
                  className='textarea'
                  placeholder='Vaša poruka...'
                  rows='5'
                  required
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
              {/* submit */}
              <button
                type='submit'
                disabled={state.submitting}
                className='btn btn-accent flex items-center justify-center gap-2'
              >
                {state.submitting ? (
                  <span>Šaljem...</span>
                ) : (
                  <>
                    <LuCircleCheckBig className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${showIcon ? 'opacity-100' : 'opacity-0'}`} />
                    <span className={` transition-opacity duration-500 ease-in-out ${showIcon ? 'opacity-0' : 'opacity-100'}`}>Pošalji poruku</span>
                  </>
                )}
              </button>
            </form>
          </div>
          <div className='hidden xl:flex relative w-[577px] h-[800px] rounded-lg overflow-hidden'>
            <Image
              src='/assets/contact/img.png'
              className='object-cover'
              fill
              quality={100}
              alt='cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
