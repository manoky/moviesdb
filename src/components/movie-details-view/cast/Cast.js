/* eslint-disable arrow-parens */
import React from 'react';
import { imageURL } from '../../../actions/URL';
import './Cast.scss';

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
          credits.splice(0, 5).map(cast => (
            <div key={cast.id} className="CastItem">
              <div className="CastImg">
                <img src={imageURL(cast.profile_path)} alt={cast.name} />
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
