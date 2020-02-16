import React, { FunctionComponent } from 'react';

interface SearchFilterProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilter: FunctionComponent<SearchFilterProps> = props => {
  const generateTypeCheckbox = () => {
    const types = [
      'normal',
      'fire',
      'fighting',
      'water',
      'flying',
      'grass',
      'poison',
      'electric',
      'ground',
      'psychic',
      'rock',
      'ice',
      'bug',
      'dragon',
      'ghost',
      'dark',
      'steel',
      'fairy',
    ];
    return types.map(type => (
      <div key={`checkbox-input-${type}`}>
        <input
          type="checkbox"
          id={type}
          name="interest"
          value={type}
          onChange={props.handleChange}
        ></input>
        <label htmlFor={type}>{type.toUpperCase()}</label>
      </div>
    ));
  };

  return (
    <div>
      <h1>Search + Filter</h1>
      <form>
        <label key="textbox-label-name" htmlFor="name">
          Name:
        </label>
        <input
          key="textbox-input-name"
          id="name"
          name="name"
          type="text"
          onChange={props.handleChange}
        />
        <fieldset>
          <legend>Type(s):</legend>
          {generateTypeCheckbox()}
        </fieldset>
      </form>
    </div>
  );
};

export default SearchFilter;
