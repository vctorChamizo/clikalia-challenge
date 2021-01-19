import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SCIndex } from "./Index.styled";
import { Card } from "../../molecules/Card/Card.atom";
import LoadingScreen from "../../molecules/LoadingScreen/LoadingScreen.molecule";

import { getPets, updatePetById } from "../../../lib/db/pets";

export default function IndexTemplate() {
  const [petList, setPetList] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getPets(setPetList);
  }, []);

  useEffect(() => {
    if (petList) {
      setLoading(false);
    }
  }, [petList]);

  const handleClickElement = (index) => {
    router.push(`/detail?index=${index}`);
  };

  const handleClickButton = (index, like) => {
    const updatedPet = petList[index];
    updatedPet["like"] = like;

    updatePetById(index, updatedPet);
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <SCIndex>
        {petList && (
          <>
            {petList.length == 0 ? (
              <div className="error-wrapper">
                <p>No hay ninguna mascota.</p>
              </div>
            ) : (
              <div>
                {petList.map((element, index) => {
                  return (
                    <Card
                      key={index}
                      actionButton={(like) => handleClickButton(index, like)}
                      action={() => handleClickElement(index)}
                    >
                      {element}
                    </Card>
                  );
                })}
              </div>
            )}
          </>
        )}
      </SCIndex>
    </>
  );
}
