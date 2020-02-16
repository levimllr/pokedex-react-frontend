import React, { FunctionComponent } from 'react';
import Select from 'react-select'

interface SearchFilterProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const SearchFilter: FunctionComponent<SearchFilterProps> = props => {
  const types = [
      { value: 'normal', label: 'Normal' },
      { value: 'fire', label: 'Fire' },
      { value: 'fighting', label: 'Fighting' },
      { value: 'water', label: 'Water' },
      { value: 'flying', label: 'Flying' },
      { value: 'grass', label: 'Grass' },
      { value: 'poison', label: 'Poison' },
      { value: 'electric', label: 'Electric' },
      { value: 'ground', label: 'Ground' },
      { value: 'psychic', label: 'Psychic' },
      { value: 'rock', label: 'Rock' },
      { value: 'ice', label: 'Ice' },
      { value: 'bug', label: 'Bug' },
      { value: 'dragon', label: 'Dragon' },
      { value: 'ghost', label: 'Ghost' },
      { value: 'dark', label: 'Dark' },
      { value: 'steel', label: 'Steel' },
      { value: 'fairy', label: 'Fairy' },
    ];

  return (
    <div>
      <h1>Search + Filter</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={props.handleChange}
        />
        <fieldset>
          <legend>Type(s):</legend>
          <div
            className="grid-container equal-items checkbox-container"
            id="type-checkboxes"
          >
          <Select options={types} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchFilter;
