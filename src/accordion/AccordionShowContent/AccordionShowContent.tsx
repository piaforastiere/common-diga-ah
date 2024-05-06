import React, { useState } from 'react';

import { BsChevronDown } from 'react-icons/bs';

import { AccordionTitles } from '../styles';
import { SectionTitle } from 'texts';

const AccordionShowContent = ({
  item,
  week,
  number,
}: {
  item: any;
  week: number;
  number: number;
}) => {
  const [showTaskContent, addShowTaskContent] = useState(false);
  return (
    <div className="title-section added">
      <AccordionTitles>
        <SectionTitle text={`${week + 1}.${number}`} />
      </AccordionTitles>
      <AccordionTitles>{item.title}</AccordionTitles>
      <div onClick={() => addShowTaskContent(!showTaskContent)}>
        <BsChevronDown />
      </div>
      {showTaskContent && <div> {item.description} </div>}
    </div>
  );
};

export default AccordionShowContent;
