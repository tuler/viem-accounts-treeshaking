import { mnemonicToAccount } from "viem/accounts";

const mnemonic = "test test test test test test test test test test test junk";
const account = mnemonicToAccount(mnemonic);
console.log(mnemonic);
console.log(account.address);
