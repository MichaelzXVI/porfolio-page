import { useEffect, useState } from 'react'; // Import useState hook
import Dividers from '../ui services/Dividers';
import Card from '../ui/Card';
import Icons from '../ui services/Icons';
import Notifications from '../ui/Notifications';
import { IoIosPhonePortrait } from 'react-icons/io';
import { GiVibratingSmartphone } from 'react-icons/gi';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsPhoneFill } from 'react-icons/bs';
import Stickers from '../ui services/Stickers';
import { MdSmartphone } from 'react-icons/md';
import { SiImessage } from 'react-icons/si';
import { FaWhatsappSquare } from 'react-icons/fa';

export default function Contactme() {
  const [showNotification, setShowNotification] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  function handleClick(item) {
    if (item.title === 'Email') {
      navigator.clipboard
        .writeText(item.info)
        .then(() => {
          console.log('Text copied to clipboard:', item.info);
          setShowNotification(true);
        })
        .catch((err) => {
          console.error('Error copying text to clipboard:', err);
          // Handle the error
        });
    } else {
      window.open(item.info, '_blank');
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  }, [showNotification]);

  const contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      info: 'michaelzxvi@gmail.com',
    },
    {
      icon: 'linkedIn',
      title: 'LinkedIn',
      info: 'https://www.linkedin.com/in/michael-kadimov-455907271/',
    },
    {
      icon: 'github',
      title: 'GitHub',
      info: 'https://github.com/MichaelzXVI',
    },
  ];

  return (
    <section id="contact" className="bg-contactmeBg">
      <div className="text-center">
        <Dividers className="w-full transform object-cover" type="contactme" />
      </div>
      <div className="bg-projectsBg ml-3 flex flex-col pt-3 sm:ml-10">
        <span className=" text-sm uppercase tracking-widest text-slate-800">
          get in touch
        </span>
        <span className="font-logofont text-3xl font-bold uppercase tracking-widest text-slate-950 sm:text-4xl">
          Contact Me
        </span>
      </div>

      <div className="font-aboutfont flex flex-wrap items-center justify-center space-y-6 px-20 py-16 text-2xl sm:gap-10 sm:space-x-0 sm:space-y-0 ">
        {contactInfo.map((item) => (
          <Card
            key={item.title}
            onClick={() => handleClick(item)}
            type="contactme"
          >
            <Icons type={item.icon} />
            <span className="font-logofont font-bold">{item.title}</span>
          </Card>
        ))}
        <div className="relative">
          <Card type="contactme" onClick={() => setShowPhone(!showPhone)}>
            <MdSmartphone />
            <span className="font-logofont font-bold">Phone</span>
          </Card>
          {showPhone && (
            <div className=" absolute -bottom-14 flex w-full flex-col rounded-b-lg border border-t-0 border-slate-950 bg-[#dad8d7] py-3 text-center ">
              054-910-7593
              <div className="text-md flex items-center justify-center gap-5 pt-2">
                <GiVibratingSmartphone />
                <FaWhatsappSquare />
                <SiImessage />
              </div>
            </div>
          )}
        </div>
      </div>

      {showNotification && <Notifications />}

      <Dividers className="z-[-1] w-full " type="contactmeBottom" />
    </section>
  );
}
