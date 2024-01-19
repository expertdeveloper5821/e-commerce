import { useState } from 'react';
import MobileFiltersDialog from './MobileFiltersDialog';
import SortMenu from './SortMenu';
import Filters from './Filters';
import ProductGrid from './ProductGrid';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 's', label: 's', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'l', label: 'L', checked: false },
        { value: 'Xl', label: 'XL', checked: false },
        { value: '2Xl', label: '2XL', checked: false },
        { value: '3Xl', label: '3XL', checked: true },
      ],
    },
  ]
export default function ProductList() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <div>
      <MobileFiltersDialog isOpen={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} />
      <SortMenu sortOptions={sortOptions} />
      <Filters filters={filters} />
      <ProductGrid />      
    </div>
  );
}
