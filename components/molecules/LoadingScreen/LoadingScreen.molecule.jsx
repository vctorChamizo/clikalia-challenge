import React from "react";

import { SCLoadingScreen } from "./LoadingScreen.styled";

export default function LoadingScreen() {
  return (
    <SCLoadingScreen>
      <div className="spinner" />
    </SCLoadingScreen>
  );
}
