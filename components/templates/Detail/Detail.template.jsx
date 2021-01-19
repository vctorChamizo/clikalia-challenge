import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SCDetail } from "./Detail.styled";
import Button from "../../atoms/Button/Button.atom";

import { getPetById, updatePetById } from "../../../lib/db/pets";
import { route } from "next/dist/next-server/server/router";

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

  return (
    <SCDetail>
      {errorCharge ? (
        <div className="error-wrapper">
          <p>
            Ha ocurrido un error con la carga de perfil. Por favor, vuelva a
            intentarlo más tarde.
          </p>
          <Button onClick={() => router.push("/")}>Volver al inicio</Button>
        </div>
      ) : (
        <div>Detail</div>
      )}
    </SCDetail>
  );
}
