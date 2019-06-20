/* eslint-disable arrow-parens */
import React from 'react';
import { imageURL, missing } from '../../helpers/URL';


type Props = {
  credits: Array<Object>,
}

const Cast = (props: Props) => {
  const { credits } = props;

  return (
    <div className="Cast">
      <h2>Featured Cast</h2>
      <hr />
      <div className="CastWrapper">
        {
          credits && credits.splice(0, 5).map(cast => (
            <div key={cast.id} className="CastItem">
              <div className="CastImg">
                <img
                  src={cast.profile_path !== null ? imageURL(cast.profile_path) : missing()}
                  alt={cast.name}
                />
              </div>
              <div className="CastName">
                {cast.name}
              </div>
              <div className="CastRole">
                {cast.character}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Cast;
