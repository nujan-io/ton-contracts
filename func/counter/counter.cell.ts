import { beginCell } from 'ton-core';

const cell = beginCell()
  .storeUint('0x7e8764ef', 32) // op (op #0x7e8764ef = increment)
  .storeUint(1, 64) // query id
  .storeUint(4, 32) // increase by
  .endCell();

export default cell;
