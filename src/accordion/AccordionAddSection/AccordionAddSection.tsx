import React, { SetStateAction, Dispatch, useState } from 'react';

import { WeeklyTheme } from '../../types';

import { AccordionTitles } from '../styles';
import { LightBlueButton } from 'buttons';
import { Input } from 'inputs';
import { SectionTitle } from 'texts';

const AccordionAddSection = ({
  tasks,
  addTaks,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tasks?: any;
  addTaks: Dispatch<SetStateAction<WeeklyTheme[]>>;
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = () => {
    addTaks([
      ...tasks,
      {
        id: tasks.length > 0 ? `week-${tasks.length}` : `week-1`,
        title: inputValue,
      },
    ]);
  };

  const handleSubmit = () => {
    console.log('save');
  };

  return (
    <div className="title-section">
      <>
        <AccordionTitles>
          <SectionTitle
            text={`Semana ${tasks.length > 0 ? tasks.length + 1 : '1'}`}
          />
        </AccordionTitles>
        <Input
          type="text"
          name={tasks.length > 0 ? `week-${tasks.length}` : `week-1`}
          id={tasks.length > 0 ? `week-${tasks.length}` : `week-1`}
          onBlur={() => handleInput()}
          onChange={e => setInputValue(e.target.value)}
        />
        <LightBlueButton onClick={handleSubmit}>Guardar</LightBlueButton>
      </>
    </div>
  );
};

export default AccordionAddSection;
