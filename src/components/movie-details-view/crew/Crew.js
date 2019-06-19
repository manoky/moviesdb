/* eslint-disable arrow-parens */
import React from 'react';
import { imageURL, missing } from '../../../actions/URL';


type Props = {
  credits: Array<Object>,
}

const Crew = (props: Props) => {
  const { credits } = props;
  const filteredCrew = [];

  if (credits !== undefined) {
    credits.forEach(crew => {
      const index = filteredCrew.findIndex(c => c.name === crew.name);
      if (index <= -1) {
        filteredCrew.push(crew);
      }
    });
  }

  return (
    <div className="Crew">
      <h2>Featured Crew</h2>
      <hr />
      <div className="CrewWrapper">
        {
          filteredCrew.splice(0, 5).map(crew => (
            <div key={crew.id} className="CrewItem">
              <div className="CrewImg">
                <img
                  src={crew.profile_path !== null ? imageURL(crew.profile_path)
                    : missing()}
                  alt={crew.name}
                />
              </div>
              <div className="CrewName">
                {crew.name}
              </div>
              <div className="CrewJob">
                {crew.job}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Crew;
