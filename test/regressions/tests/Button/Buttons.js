import React from 'react';
import { Button } from '@boa/components/Button';

export default function Buttons() {
  return (
    <div>
      <Button label={'Raised'} />
      <Button variant={'flat'} label={'Flat'} />
      <Button variant={'icon'} dynamicIcon={'Home'} label={'Home'} />
    </div>
  );
}
