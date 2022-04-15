import * as anchor from "@project-serum/anchor";

export const toAnchorDate = (value?: anchor.BN) => {
  if (!value) {
    return;
  }

  return new Date(value.toNumber() * 1000);
};
