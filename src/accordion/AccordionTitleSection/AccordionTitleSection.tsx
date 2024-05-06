import React from 'react';

import { BsChevronDown } from 'react-icons/bs';

import { WeeklyTheme } from '../../types';

import { AccordionTitles } from '../styles';
import { SectionTitle } from 'texts';

const AccordionTitleSection = ({
  item,
  addTaks,
  number,
}: {
  item?: WeeklyTheme;
  addTaks: (id: number) => void;
  number: number;
}) => {
  return (
    <div className="title-section added">
      <AccordionTitles>
        <SectionTitle text={`Semana ${number + 1}`} />
      </AccordionTitles>
      <AccordionTitles>{item.weekTitle}</AccordionTitles>
      <div onClick={() => addTaks(number)}>
        <BsChevronDown />
      </div>
    </div>
  );
};

export default AccordionTitleSection;
