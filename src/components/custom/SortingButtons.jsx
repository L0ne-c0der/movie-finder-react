import React from 'react';
import { Button } from '@/components/ui/button';
const SortingButtons = () => (
    <div className="flex space-x-2 mt-4">
      <Button variant="default">New</Button>
      <Button variant="outline">Ascending</Button>
      <Button variant="outline">Descending</Button>
      <Button variant="outline">Rating</Button>
    </div>
  );
  export default SortingButtons;
  //action to specify the default button
  //prolly make it smaller