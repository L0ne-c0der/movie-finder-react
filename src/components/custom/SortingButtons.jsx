import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { setSortBy } from '@/slices/filterSlice';

const SortingButtons = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector(state => state.filter.sortBy);

  const handleSort = (sortType) => {
    dispatch(setSortBy(sortType));
  };

  return (
    <div className="flex space-x-2">
      <Button 
        variant={currentSort === "new" ? "default" : "outline"}
        onClick={() => handleSort("new")}
        size="sm"
      >
        New
      </Button>
      <Button 
        variant={currentSort === "ascending" ? "default" : "outline"}
        onClick={() => handleSort("ascending")}
        size="sm"
      >
        A-Z
      </Button>
      <Button 
        variant={currentSort === "descending" ? "default" : "outline"}
        onClick={() => handleSort("descending")}
        size="sm"
      >
        Z-A
      </Button>
      <Button 
        variant={currentSort === "rating" ? "default" : "outline"}
        onClick={() => handleSort("rating")}
        size="sm"
      >
        Rating
      </Button>
    </div>
  );
};

export default SortingButtons;