import { database } from "./instance";

export const getPets = (updaterFunction) => {
  database.ref("pets/").on("value", (snapshot) => {
    const data = snapshot.val();
    data ? updaterFunction(data) : updaterFunction([]);
  });
};

export const getPetById = (id) => {
  return database.ref(`/pets/${id}`).once("value");
};

export const updatePetById = (id, updatedPet) => {
  const updates = {};
  updates[`/pets/${id}`] = updatedPet;
  return database.ref().update(updates);
};
