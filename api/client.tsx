import localforage from "localforage";
import type { User } from "../features/user/userSlice";
const version = 1.0;
const AUTH_KEY = `MINI_TWITTER_AUTH_USER_${version}`;
const USER_KEY = `MINI_TWITTER_USERS_${version}`;
const TWEET_KEY = `MINI_TWITTER_TWEETS_${version}`;

export const login = async (userName: string, pass: string) => {
  const users = (await localforage.getItem(USER_KEY)) as Array<User>;
  if (!users) {
    return null;
  }
  let user = users.find((o) => o.userName === userName);
  if (user && user.pass === pass) {
    return user;
  }
  return null;
};

export const reg = async (userName: string, pass: string) => {
  let users = ((await localforage.getItem(USER_KEY)) as Array<User>) || [];
  const user = {
    userName,
    pass,
    id: Date.now(),
  };
  if (!users.find((o) => o.userName === userName)) {
    users.push(user);
    localforage.setItem(USER_KEY, users);
    return user;
  }
  return null;
};

export const getLoginUser = async () => {
  const user = (await localforage.getItem(AUTH_KEY)) as User;
  if (user) {
    return user;
  }
  return null;
};

export const getTweetsByTime = (lastTime: number) => {};

export const editTweet = () => {};

export const delTweet = () => {};
