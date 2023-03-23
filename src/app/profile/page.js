// page.js

export function generateMetadata() {
  const pageTitle = 'Profile';
  const pageDescription = 'Ini halaman profile';

  return {
    title: pageTitle,
    description: pageDescription,
  };
}

export const metadata = {
  title: generateMetadata().title,
  description: generateMetadata().description,
};

export default function Profile() {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-3'>
      <p className='text-5xl font-bold'>Halaman Profile</p>
    </div>
  );
}
