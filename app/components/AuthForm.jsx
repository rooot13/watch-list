'use client'

import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <Auth 
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
      appearance={{
        theme: 'dark',
        variables: {
          default: {
            colors: {
              background: '#1e3a8a', // Tailwind CSS 'blue-900'
              inputBackground: '#1e40af', // Tailwind CSS 'blue-800'
              inputBorder: '#3b82f6', // Tailwind CSS 'blue-500'
              inputText: '#ffffff',
              labelText: '#bfdbfe', // Tailwind CSS 'blue-200'
              buttonText: '#1e3a8a', // Tailwind CSS 'blue-900'
              buttonBackground: '#3b82f6', // Tailwind CSS 'blue-500'
              buttonBorder: '#93c5fd', // Tailwind CSS 'blue-300'
            }
          }
        },
        button: {
          className: 'bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded transition duration-200'
        },
        input: {
          className: 'bg-blue-800 border-blue-500 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded p-2 w-full'
        },
        container: {
          className: 'space-y-4 mt-4'
        },
      }}
    />
  );
