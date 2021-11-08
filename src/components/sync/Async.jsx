import { atom, RecoilRoot, selector, useRecoilValue } from "recoil";
import * as React from "react";

const atableOfUsers = {
  1: {
    name: "a",
    age: 12,
  },
  2: {
    name: "b",
    age: 2,
  },
  3: {
    name: "c",
    age: 122,
  },
};

const getDummyDB = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([1, 2, 3]);
    }, 2000);
  });
};

const acurrentUserIdState = atom({
  key: "aCurrentUserID",
  default: 1,
});

const acurrentUserNameState = selector({
  key: "aCurrentUserName",
  get: async ({ get }) => {
    return await getDummyDB();
  },
});

const AsyncCurrentUserInfo = () => {
  const userName = useRecoilValue(acurrentUserNameState);
  return (
    <>
      <div>{userName}</div>
    </>
  );
};

export const AsyncUserApp = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AsyncCurrentUserInfo />
      </React.Suspense>
    </RecoilRoot>
  );
};
