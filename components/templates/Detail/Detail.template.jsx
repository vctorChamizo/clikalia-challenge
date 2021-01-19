import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SCDetail } from "./Detail.styled";
import Button from "../../atoms/Button/Button.atom";
import LoadingScreen from "../../molecules/LoadingScreen/LoadingScreen.molecule";

import LikeIcon from "../../../public/icon/like_icon.svg";
import UnlikeIcon from "../../../public/icon/unlike_icon.svg";

import { getPetById, updatePetById } from "../../../lib/db/pets";

export default function DetailTemplate() {
  const [errorCharge, setErrorCharge] = useState(false);
  const [petDetail, setPetDetail] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { index } = router.query;

  useEffect(() => {
    async function getPeDetail(idPet) {
      const snapshot = await getPetById(idPet);
      setPetDetail(snapshot.val());
      setErrorCharge(false);
    }

    index == 0 || index ? getPeDetail(index) : setErrorCharge(true);
  }, [index]);

  useEffect(() => {
    if (loading && petDetail) {
      setLoading(false);
    }
  }, [petDetail]);

  const handleClickButton = async () => {
    const updatedPet = { ...petDetail };

    if (petDetail?.like) {
      updatedPet["like"] = !petDetail.like;
    } else {
      updatedPet["like"] = true;
    }

    await updatePetById(index, updatedPet);

    setPetDetail(updatedPet);
  };

  return (
    <>
      {loading && <LoadingScreen />}
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
          <div>
            <div className="image-wrapper">
              <img alta="Pet image profile" src={petDetail?.profile} />
            </div>
            <div className="title-wrapper">
              <p>{petDetail?.name}</p>
              <div className="icon-wrapper" onClick={() => handleClickButton()}>
                {petDetail?.like ? <LikeIcon /> : <UnlikeIcon />}
              </div>
            </div>

            <div className="text-wrapper">
              <ul>
                <li>
                  <p>
                    <span>Descripción:</span> {petDetail?.description}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Edad:</span> {petDetail?.age}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Sexo:</span> {petDetail?.gender}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </SCDetail>
    </>
  );
}
