

import React from 'react';
import { Disclosure } from '@headlessui/react';
import {classNames} from './NavData';
const MobileMenuItem = ({ item }) => {
  return (
    <Disclosure.Button
    key={item.name}
    as="a"
    href={item.href}
    className={classNames(
      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'block rounded-md px-3 py-2 text-base font-medium'
    )}
    aria-current={item.current ? 'page' : undefined}
  >
    {item.name}
  </Disclosure.Button>
  );
};

export default MobileMenuItem;
