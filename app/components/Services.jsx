import Image from 'next/image';

const services = [
  {
    icon: 'assets/services/icon-1.svg',
    title: 'UI/UX Dizajn',
    description: 'Dizajn korisničkog iskustva i sučelja.',
  },
  {
    icon: 'assets/services/icon-2.svg',
    title: 'Razvoj web aplikacije',
    description: 'Izrada skalabilne i sigurne aplikacije.',
  },
  {
    icon: 'assets/services/icon-3.svg',
    title: 'Automatizacije i integracije',
    description: 'Integracije i automatizacije za marketing.',
  },
  {
    icon: 'assets/services/icon-4.svg',
    title: 'Korisnička podrška',
    description: 'Održavanje, ažuriranje i izmjene.',
  },
];

export const Services = () => {
  return (
    <section
      className='relative z-40'
      id='services'
    >
      <div className='container mx-auto'>
        <ul className='relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-stretch lg:place-items-stretch'>
          {services.map((item, idx) => {
            return (
              <li
                key={idx}
                className='bg-white shadow-custom p-6 md:max-w-none rounded-lg'
              >
                <Image
                  src={item.icon}
                  width={48}
                  height={48}
                  alt={item.title}
                  className='mb-4'
                />
                <h3 className='text-[20px] text-primary font-semibold mb-3'>{item.title}</h3>
                <p className='text-[15px]'>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
