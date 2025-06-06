import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams } from 'react-router-dom';

import { METACHAIN_SHARD_ID } from 'appConstants';
import { isHash, addressIsBech32, isMetachain } from 'helpers';
import { faSearch } from 'icons/regular';
import { TransactionFiltersEnum } from 'types';

export interface SearchFilterType {
  name: string;
  filter: TransactionFiltersEnum;
  placeholder?: string;
  className?: string;
  validation?: 'address' | 'hash' | 'address-or-metachain';
}

export const SearchFilter = ({
  name,
  filter,
  placeholder = 'Search',
  className = '',
  validation
}: SearchFilterType) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams);
  const existingValue = paramsObject[filter] ?? '';

  const [inputValue, setInputValue] = useState<string>(existingValue);
  const [errorText, setErrorText] = useState<string>('');

  const changeInputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
    setErrorText('');
  };

  const updateUrl = (searchValue: string) => {
    const paramsObject = Object.fromEntries(searchParams);
    delete paramsObject[filter];
    const { page, size, ...rest } = paramsObject;

    const nextUrlParams = {
      ...rest,
      ...(searchValue ? { [filter]: searchValue } : {})
    };

    setSearchParams(nextUrlParams);
    document.body.click();
  };

  const updateSearchValue = (searchValue: string) => {
    if (validation && searchValue) {
      if (validation === 'hash') {
        setErrorText(isHash(searchValue) ? '' : 'Invalid Hash');
        if (isHash(searchValue)) {
          updateUrl(searchValue);
        }
      }
      if (validation === 'address') {
        setErrorText(addressIsBech32(searchValue) ? '' : 'Invalid Address');
        if (addressIsBech32(searchValue)) {
          updateUrl(searchValue);
        }
      }
      if (validation === 'address-or-metachain') {
        const isValid =
          isMetachain(searchValue) || addressIsBech32(searchValue);

        setErrorText(isValid ? '' : 'Invalid Address');
        if (isValid) {
          if (isMetachain(searchValue)) {
            updateUrl(String(METACHAIN_SHARD_ID));

            return;
          }

          updateUrl(searchValue);
        }
      }

      return;
    }

    updateUrl(searchValue);
  };

  return (
    <div role='search' className={`search-filter-block ${className ?? ''}`}>
      <div
        className={`input-group input-group-sm input-group-seamless ${
          validation ? 'has-validation' : ''
        }`}
      >
        <input
          type='text'
          className='form-control'
          value={inputValue || ''}
          onChange={changeInputValue}
          onKeyDown={(keyEvent: React.KeyboardEvent) => {
            if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
              updateSearchValue(inputValue);
            }
          }}
          placeholder={placeholder}
          name={name}
          data-testid={name}
        />
        <>
          {inputValue ? (
            <button
              type='reset'
              className='input-group-text search-icon'
              onClick={() => {
                if (existingValue) {
                  updateSearchValue('');
                  setInputValue('');
                }
                setInputValue('');
                return true;
              }}
              data-testid='resetSearch'
            >
              <svg
                height='20'
                width='20'
                viewBox='0 0 20 20'
                aria-hidden='true'
                focusable='false'
                className='clear'
              >
                <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
              </svg>
            </button>
          ) : (
            <button
              type='submit'
              className='input-group-text search-icon'
              onClick={() => {
                updateSearchValue(inputValue);
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          )}
        </>
        {errorText && (
          <div className='invalid-feedback d-block'>{errorText}</div>
        )}
      </div>
    </div>
  );
};
