import React, { useEffect, useState } from "react";

import { SCIndex } from "./Index.styled";

import { database } from "../../../lib";

export default function IndexTemplate() {
  const [petList, setPetList] = useState([]);
  const [indexCarrousel, setIndexCarrousel] = useState(0);

  useEffect(() => {
    const pets = database
      .ref("/pets")
      .once("value")
      .then((snapshot) => {
        setPetList(snapshot.val());
      });
  }, []);

  const handleClickElement = () => {};

  const handleClickButton = () => {};

  const hanldeClickArrow = (direction) => {};

  return <SCIndex>{petList.map((element) => element.name)}</SCIndex>;
}
