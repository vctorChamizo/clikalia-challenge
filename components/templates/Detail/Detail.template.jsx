import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SCDetail } from "./Detail.styled";

import { getPetById, updatePetById } from "../../../lib/db/pets";

export default function DetailTemplate() {
  const [errorCharge, setErrorCharge] = useState(false);
  const [petDetail, setPetDetail] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getPeDetail(idPet) {
      const snapshot = await getPetById(idPet);
      setPetDetail(snapshot.val());
    }

    id ? getPeDetail(id) : setErrorCharge(true);
  }, []);

  const handleClickButton = async (index) => {
    const updatedPet = { ...petDetail };
    updatedPet["like"] = true;

    setPetDetail(updatedPet);

    const response = await updatePetById(index, updatedPet);
  };

  return <SCDetail>Detail</SCDetail>;
}
