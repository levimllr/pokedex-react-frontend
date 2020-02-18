import React, { FunctionComponent } from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';

interface SearchFilterProps {
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (selectedType: any) => void;
}

interface typeSelectObject {
  value: string;
  label: string;
  color: string;
}

interface optionObject {
  data: typeSelectObject;
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
}

const SearchFilter: FunctionComponent<SearchFilterProps> = props => {
  const types = [
    { value: 'normal', label: 'Normal', color: '#a8a77a' },
    { value: 'fire', label: 'Fire', color: '#ee8130' },
    { value: 'fighting', label: 'Fighting', color: '#c22e28' },
    { value: 'water', label: 'Water', color: '#6390f0' },
    { value: 'flying', label: 'Flying', color: '#a98ff3' },
    { value: 'grass', label: 'Grass', color: '#7ac74c' },
    { value: 'poison', label: 'Poison', color: '#a33ea1' },
    { value: 'electric', label: 'Electric', color: '#f7d02c' },
    { value: 'ground', label: 'Ground', color: '#e2bf65' },
    { value: 'psychic', label: 'Psychic', color: '#f95587' },
    { value: 'rock', label: 'Rock', color: '#b6a136' },
    { value: 'ice', label: 'Ice', color: '#96d9d6' },
    { value: 'bug', label: 'Bug', color: '#a6b91a' },
    { value: 'dragon', label: 'Dragon', color: '#6f35fc' },
    { value: 'ghost', label: 'Ghost', color: '#735797' },
    { value: 'dark', label: 'Dark', color: '#705746' },
    { value: 'steel', label: 'Steel', color: '#b7b7ce' },
    { value: 'fairy', label: 'Fairy', color: '#d685ad' },
  ];

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white'
    }),
    option: (
      styles: any,
      { data, isDisabled, isFocused, isSelected }: optionObject
    ) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          // ...styles[':active'],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (
      styles: any,
      { data }: optionObject
    ) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (
      styles: any,
      { data }: optionObject
    ) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (
      styles: any,
      { data }: optionObject
    ) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

  return (
    <div>
      <h1>Search + Filter</h1>
      <form className="grid-container equal-items">
        <div className="grid css-2b097c-container">
        <div className="css-5duvv3-control">
        {/* <label htmlFor="name">Name:</label> */}
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={props.handleNameChange}
          className="css-1hwfws3"
        />
        </div>
        </div>
        <div className="grid">
          <Select
            styles={customStyles}
            closeMenuOnSelect={false}
            options={types}
            isMulti
            onChange={props.handleTypeChange}
            placeholder={<div>Types</div>}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
