import React, { FunctionComponent } from 'react';

interface SearchFilterProps {
  handleChange: (event: React.FormEvent<HTMLFormElement>) => void;
};

const generateTypeCheckbox = () => {
  const types = [
    'normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 
    'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 
    'fairy'
  ];
  return types.map(type => (
    <div>
      <input type="checkbox" id={type} name="interest" value={type}></input>
      <label htmlFor={type}>{type.toUpperCase()}</label>
    </div>
  ));
};

const SearchFilter:FunctionComponent<SearchFilterProps> =
    props => (
        <div>
          <form onChange={props.handleChange}>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" type="text" />
            <fieldset>
              <legend>Type(s):</legend>
              {generateTypeCheckbox()} 
            </fieldset>
          </form>
        </div>
    )

export default SearchFilter;
