import * as repo from '../repository/user'

const users = [
  'ava',
  'boyd',
  'raylan',
  'winona',
];

export const get = async (id) => {
  return repo.get(id);
};

export const getAll = async () => {
    return repo.getAll({});
};

export const create = async (user) => {
  return repo.create(user);
}

export const update = async (user) => {
  return repo.update(user);
}

export const remove = async (user) => {
  return repo.remove(user);
}

export const getFirstUser = () => users[0];
