import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { DropdownListContainer, ListContainer } from './styles';
import { Person } from 'types';
import FilteringList from '../utils';
import SectionSubtitle from '../../texts/SectionSubtitle/SectionSubtitle';
import Search from '../../search/Search';

const DropdownList = ({
  hasSearch,
  list,
  searchValue,
  setSearchValue,
  text,
  type,
  onSelect,
  isVisible,
  setIsVisible,
}: {
  hasSearch: boolean;
  list: Array<Person>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  text?: string;
  type: string;
  onSelect: (selectedItem: Person) => void;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [filterList, setFilterList] = useState<'' | Person[] | null>(list);

  const ref = useRef<HTMLDivElement | null>(null);

  const highlightText = (string1: string, string2: string) => {
    const text = string1 + ' ' + string2;
    if (!searchValue) {
      return text; // Si no hay valor de búsqueda, retorna el texto original
    }

    // Divide el texto en partes antes y después de la coincidencia
    const parts = text.split(new RegExp(`(${searchValue})`, 'i'));

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === searchValue.toLowerCase() ? (
            <span key={index} style={{ color: '#313131' }}>
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  useEffect(() => {
    setFilterList(FilteringList(searchValue, list));
  }, [searchValue, list]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <DropdownListContainer ref={ref}>
      <SectionSubtitle
        fontSize={12}
        fontWeight={400}
        classSub="dropdown-title"
        onClick={() => setIsVisible(!isVisible)}
      >
        {!isVisible && type === 'add' ? <AiOutlinePlus /> : <AiOutlineMinus />}
        {text ? text : 'Buscar por Alumno'}
        {/* {type === "search" && !showContent ? (
					<RiArrowDownSLine />
				) : (
					<RiArrowUpSLine />
				)} */}
      </SectionSubtitle>
      {isVisible && (
        <ListContainer>
          {hasSearch && (
            <Search
              classSearch="person-search"
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          )}
          {filterList &&
            filterList.map((item, i) => {
              return (
                <p
                  key={i}
                  onClick={() => {
                    onSelect(item); // Call onSelect when an item is clicked
                    // setShowContent(false); // Hide the list after selection
                  }}
                >
                  {highlightText(item.name, item.lastname)}
                </p>
              );
            })}
        </ListContainer>
      )}
    </DropdownListContainer>
  );
};

export default DropdownList;
