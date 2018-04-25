import * as service from '../service/user';

export const get = async (ctx) => {
  const id = parseInt(ctx.params.id, 10);
  ctx.body = { users: await service.get(id), time: Date.now() };
};

export const getAll = async (ctx) => {
  ctx.body = { users: await service.getAll(), time: Date.now() };
};

export const post = async (ctx) => {
  const object = {
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email,
    };
    ctx.body = await service.create(object);
};

export const put = async (ctx) => {
  const object = {
        id: ctx.request.body.id,
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email,
    };
    ctx.body = await service.update(object);
};

export const remove = async (ctx) => {
  const id = parseInt(ctx.params.id, 10);
  ctx.body = await service.remove(id);
}