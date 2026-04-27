import * as anchor from "@coral-xyz/anchor";

describe("mini_wallet", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  it("Proyecto cargado correctamente", async () => {
    console.log("Mini Wallet listo para usar");
  });
});