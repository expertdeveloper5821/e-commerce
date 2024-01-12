import React,{useState} from 'react';
import { Disclosure } from '@headlessui/react';
// import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gradient-to-r from-purple-900 via-blue-900 to-red-500 h-20 sticky top-0 z-50">
        {({ open }) => (
          <>
            <DesktopMenu open={open} setOpen={setOpen} />
            <MobileMenu open={open} />
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;