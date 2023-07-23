"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("832acbcf-bb25-4a61-9cae-6e82106053dd");
  }, []);

    return null
};
