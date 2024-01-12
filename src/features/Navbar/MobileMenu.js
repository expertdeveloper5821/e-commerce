import React from 'react';
import { Disclosure } from '@headlessui/react';
import { navigation, user, userNavigation } from './NavData';
import MobileMenuItem from './MobileMenuItem';
import { classNames } from './NavData';

const MobileMenu = () => {
  return (
    <Disclosure.Panel className="md:hidden bg-blue-800">
      {({ open }) => (
        <>
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-blue-800">
            {navigation.map((item) => (
              <MobileMenuItem key={item.name} item={item} />
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex justify-center">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">{user.name}</div>
                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
              </div>
            </div>

            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </div>
        </>
      )}
    </Disclosure.Panel>
  );
};
export default MobileMenu;
