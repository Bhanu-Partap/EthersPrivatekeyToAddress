import {Wallet} from "ethers"
import dotenv from 'dotenv';
dotenv.config();
const {PRIVATE_KEY} = process.env;

function test2(){
  const privateKey = PRIVATE_KEY;
  const wallet = new Wallet(privateKey);
  const address = wallet.address;
  console.log(address);
}

test2()