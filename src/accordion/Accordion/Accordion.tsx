import React, { useState } from 'react';

import { WeeklyTheme } from '../../types';

import { AccordionContainer } from '../styles';

import {
  AccordionTitleSection,
  AccordionShowContent,
  AccordionAddContent,
  AccordionAddSection,
} from '..';
import { SectionSubtitle } from 'texts';
import { DarkGreyButton } from 'buttons';

const Accordion = () => {
  const [showContent, setShowContent] = useState(false);
  const [inputLine, setInputLine] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [weeklyContent, addWeeklyContent] = useState<Array<WeeklyTheme>>([]);
  const [tasksContent, addTasksContent] = useState<Array<WeeklyTheme>>([]);

  const showAddContent = (id: number) => {
    const editContent = document.getElementById(`task-week-${id}`);
    if (editContent !== null) {
      editContent.classList.remove('hide');
      editContent.classList.add('show');
    }
  };

  console.log(inputLine);

  return (
    <AccordionContainer onClick={() => setShowContent(!showContent)}>
      {weeklyContent.length > 0 &&
        weeklyContent.map((item, i) => {
          return (
            <>
              <div className="section-week">
                <AccordionTitleSection
                  item={item}
                  addTaks={showAddContent}
                  number={i}
                />
              </div>

              <div className="section-task hide" id={`task-week-${i}`}>
                <SectionSubtitle fontSize={16} fontWeight={600}>
                  Contenido
                </SectionSubtitle>
                {tasksContent.length > 0 &&
                  tasksContent.map((item, i) => {
                    return (
                      <AccordionShowContent item={item} week={i} number={i} />
                    );
                  })}

                <AccordionAddContent
                  taskList={tasksContent}
                  addTaks={addTasksContent}
                  week={i}
                />
              </div>

              <DarkGreyButton onClick={() => setInputLine(true)}>
                + Contenido
              </DarkGreyButton>
            </>
          );
        })}
      {showAccordion && (
        <AccordionAddSection tasks={weeklyContent} addTaks={addWeeklyContent} />
      )}

      <DarkGreyButton onClick={() => setShowAccordion(true)}>
        + Semana
      </DarkGreyButton>
    </AccordionContainer>
  );
};

export default Accordion;
