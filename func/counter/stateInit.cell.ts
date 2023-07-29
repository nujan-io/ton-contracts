import { beginCell } from 'ton-core';

const cell = beginCell()
  .storeUint(1, 32)
  .storeUint(0, 32) // Initial counter value
  .endCell();

export default cell;
