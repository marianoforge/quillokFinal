import React, { useState } from 'react';
import arrowMenu from '../images/work_arrow_projects.svg';
import * as projectStyles from '../styles/projects.module.css';

const Accordion = ({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
  status,
  image,
}) => {
  const [isActive, setIsActive] = useState(status);

  return (
    <div className={projectStyles.workContent}>
      <div className={projectStyles.leftContent}>
        <div className={projectStyles.btWorks}>
          <div
            className={
              isActive ? projectStyles.workSelect : projectStyles.workUnselect
            }
            onClick={() => setIsActive(!isActive)}
          >
            <div
              className={
                isActive ? projectStyles.highlight : projectStyles.unhighlight
              }
            >
              <div
                className={
                  isActive
                    ? projectStyles.arrowSelect
                    : projectStyles.arrowUnselect
                }
              >
                <img src={arrowMenu} alt='Arrow Menu' />
              </div>

              <div
                className={
                  isActive
                    ? projectStyles.textSelect
                    : projectStyles.textUnselect
                }
              >
                {title}
              </div>
            </div>
          </div>
        </div>

        {isActive ? (
          <div className={projectStyles.descriptionWork}>
            <p>{content1}</p>
            <p>{content2}</p>
            <p>{content3}</p>
            <p>
              <strong>{content4}</strong>
              <br></br>
              {content5}
            </p>
          </div>
        ) : null}
      </div>
      {isActive ? (
        <div className={projectStyles.rightContent}>
          <div className={projectStyles.frameImageWork}>
            <div className={projectStyles.imageWork}>
              <img src={image} width='100%' alt={title} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
