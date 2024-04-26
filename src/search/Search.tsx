import React, { Dispatch, SetStateAction } from 'react'

import { Dayjs } from 'dayjs'
import { RiSearchLine } from 'react-icons/ri'

import { SearchContainer } from './styles'
import { Input } from 'inputs'

export interface SearchProps {
  width?: string
  type?: string
  hasIcon?: boolean
  min?: string | Dayjs | undefined
  max?: string | Dayjs | undefined
  classSearch?: string
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

const Search = ({
  width,
  type,
  hasIcon,
  min,
  max,
  classSearch,
  searchValue,
  setSearchValue,
}: SearchProps) => {

  return (
    <SearchContainer className={classSearch} width={width}>
      <Input
        value={searchValue}
        type={type ? type : 'text'}
        name="search"
        id="search"
        onBlur={(e) => setSearchValue(e.target.value)}
        onChange={(e) => setSearchValue(e.target.value)}
        inputClass="search-input"
        width={width}
        min={min && min}
        max={max && max}
      />
      {hasIcon && (
        <span>
          <RiSearchLine />
        </span>
      )}
    </SearchContainer>
  )
}

export default Search
