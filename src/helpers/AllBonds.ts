import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as BusdImg } from "src/assets/tokens/BUSD.svg";
import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as BnbImg } from "src/assets/tokens/BNB.svg";
import { ReactComponent as DMBusdImg } from "src/assets/tokens/DM-BUSD.svg";


// import { abi as BondSapBusdContract } from "src/abi/bonds/SapBusdContract.json";
import { abi as DMBusdContract } from "src/abi/bonds/DMBusdContract.json";
import { abi as SapBnbContract } from "src/abi/bonds/SapBnbContract.json";

import { abi as BusdBondContract } from "src/abi/bonds/BusdContract.json";
import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as BnbBondContract } from "src/abi/bonds/BnbContract.json";
import { abi as ReserveDMBusdContract } from "src/abi/reserves/DMBusd.json";
import { abi as ReserveSapBnbContract } from "src/abi/reserves/SapBnb.json";
import { abi as ierc20Abi } from "src/abi/IERC20.json";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond

export const busd = new StableBond({
  name: "busd",
  displayName: "BUSD",
  bondToken: "BUSD",
  bondIconSvg: BusdImg,
  // fourAddress: "0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6",
  bondContractABI: BusdBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x371b1fD69C224Ee58B3AA31c1bc9a2161E274921",
      reserveAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
      reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
    },
  },
});

// export const wbnb = new StableBond({
//   name: "wbnb",
//   displayName: "WBNB",
//   bondToken: "WBNB",
//   bondIconSvg: BnbImg,
//   bondContractABI: BnbBondContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x5ea259F10ADAd0eDE2F8f234D05947BcBDF9bA17",
//       reserveAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
//       reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
//     },
//   },
// });

export const dm_busd = new LPBond({
  name: "dm_busd_lp",
  displayName: "DM-BUSD LP",
  bondToken: "BUSD",
  bondIconSvg: DMBusdImg,
  bondContractABI: DMBusdContract,
  reserveContract: ReserveDMBusdContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xa25122b7028FECe8Bca45b86cE3c5AdDD3B22358",
      reserveAddress: "0xa38371237cc073ff67134b116ab36d5879c343b3",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xAf6e4fdB1e87FBd39ac5F78489B229D205B337a6",
});

// export const sap_wbnb = new LPBond({
//   name: "sap_wbnb_lp",
//   displayName: "SAP-WBNB LP",
//   bondToken: "WBNB",
//   bondIconSvg: SapBnbImg,
//   bondContractABI: SapBnbContract,
//   reserveContract: ReserveSapBnbContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x5b10F2E7C762Bd756D2Cd0c004767B7e57E3962D",
//       reserveAddress: "0xD47584730a77Dd5Ba724d04C54B82245983f3ffB",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
//       reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
//     },
//   },
//   lpUrl:
//     "https://sapphireswap.finance/add/0x039639Ed22A7654f74C1B0017C9d0DF85C26B63B/0xe9e7cea3dedca5984780bafc599bd69add087d56",
// });

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [busd,  dm_busd];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
