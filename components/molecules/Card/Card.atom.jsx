import React, { useState } from "react";
import { SCCard } from "./Card.styled";

import LikeIcon from "../../../public/icon/like_icon.svg";
import UnlikeIcon from "../../../public/icon/unlike_icon.svg";

export const Card = ({ children, action, actionButton }) => {
  const [state, setState] = useState(children?.like || false);

  const handleOnClick = () => {
    const newState = !state;

    setState(newState);
    actionButton(newState);
  };
  return (
    <SCCard>
      <img alta="Pet image profile" src={children?.profile} onClick={action} />

      <div className="card-wrapper">
        <div className="text-wrapper" onClick={action}>
          <ul>
            <li>
              <p>
                <span>Nombre:</span> {children?.name}
              </p>
            </li>
            <li>
              <p>
                <span>Descripción:</span> {children?.description}
              </p>
            </li>
          </ul>
        </div>
        <div className="icon-wrapper" onClick={() => handleOnClick(!state)}>
          {state ? <LikeIcon /> : <UnlikeIcon />}
        </div>
      </div>
    </SCCard>
  );
};
