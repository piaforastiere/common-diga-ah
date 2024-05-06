import React, { useState, Dispatch, SetStateAction } from 'react';

import { WeeklyTheme } from '../../types';
import { Input } from '../../inputs';
import { SectionSubtitle } from '../../texts';

const AccordionAddContent = ({
  taskList,
  addTaks,
  week,
}: {
  taskList: any;
  addTaks: Dispatch<SetStateAction<WeeklyTheme[]>>;
  week?: number;
}) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setDescription] = useState('');

  const handleInput = () => {
    addTaks([
      ...taskList,
      {
        id: taskList.length > 0 ? taskList.length : 1,
        title: inputTitle,
        content: '',
        description: inputDescription,
      },
    ]);
  };

  return (
    <div className="title-task">
      <div className="section-task">
        <div className="title-task">
          <SectionSubtitle fontWeight={500} fontSize={18} lineHeight={27}>
            {week}.{taskList.length}
          </SectionSubtitle>
          <Input
            type="text"
            name={taskList.length > 0 ? `title-${taskList.length}` : `title-1`}
            id={taskList.length > 0 ? `title-${taskList.length}` : `title-1`}
            onBlur={() => handleInput()}
            onChange={e => setInputTitle(e.target.value)}
          />
        </div>
        <div className="section-task">
          <SectionSubtitle fontSize={16} fontWeight={500} lineHeight={24}>
            Subir Contenido
          </SectionSubtitle>
        </div>
        <div className="section-task">
          <SectionSubtitle fontSize={16} fontWeight={500} lineHeight={24}>
            Descripción
          </SectionSubtitle>
          <Input
            type="text"
            name={
              taskList.length > 0
                ? `description-${taskList.length}`
                : `description-1`
            }
            id={
              taskList.length > 0
                ? `description-${taskList.length}`
                : `description-1`
            }
            onBlur={() => handleInput()}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionAddContent;
