import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SCIndex } from "./Index.styled";

import { getPets, updatePetById } from "../../../lib/db/pets";

export default function IndexTemplate() {
  const [petList, setPetList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    getPets(setPetList);
  }, []);

  const handleClickElement = (index) => {
    router.push(`/detail/${index}`);
  };

  const handleClickButton = async (index) => {
    const updatedPet = petList[index];
    updatedPet["like"] = true;

    const response = await updatePetById(index, updatedPet);

    console.log(response);
  };

  return <SCIndex>{petList.map((element) => element.name)}</SCIndex>;
}
