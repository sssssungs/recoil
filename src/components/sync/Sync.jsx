import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const tableOfUsers = {
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

const currentUserIdState = atom({
  key: "CurrentUserID",
  default: 1,
});

const currentUserNameState = selector({
  key: "CurrentUserName",
  get: ({ get }) => {
    if (get(currentUserIdState) > 3) return;
    return tableOfUsers[get(currentUserIdState)].name;
  },
});

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameState);
  const [id, setId] = useRecoilState(currentUserIdState);
  return (
    <>
      <div>
        {userName}
        <button onClick={() => setId(Number(id) + 1)}>+</button>
      </div>
    </>
  );
};

export const UserApp = () => {
  return (
    <RecoilRoot>
      <CurrentUserInfo />
    </RecoilRoot>
  );
};
