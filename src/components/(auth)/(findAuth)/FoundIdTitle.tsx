'use client';

import authState from '@/recoil/authAtom';
import { useRecoilState } from 'recoil';

const FoundIdTitle = () => {
  const [state, _] = useRecoilState(authState);
  const { foundId } = state;

  return <h3 className="text-2xl text-[#011B5B] mb-2">{foundId}</h3>;
};

export default FoundIdTitle;
