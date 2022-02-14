import React from 'react';
import Image from 'next/image';
import { Menubar } from 'primereact/menubar';

export default function MenubarDemo() {
  const items = [
    {
      label: 'Coins',
      icon: 'pi pi-fw pi-wallet',
    },
    {
      label: 'Exchanges',
      icon: 'pi pi-fw pi-chart-line',
    },
    {
      label: 'NFT',
      icon: 'pi pi-fw pi-camera',
    },
    {
      label: 'Docs',
      icon: 'pi pi-fw pi-book',
    },
  ];

  return (
    <div>
      <Menubar model={items} />
    </div>
  );
}
