import dbModel from '../models';

const model = dbModel.User;

export const get = (id) => {
    return model.find({
        where: {id: id},
    });
};

export const getAll = (payload) => {
    return model.findAll(payload);
};

export const create = (payload) => {
    return model.create(payload);
};

export const update = async (payload) => {
    await model.update(payload, {
        where: {
            id: payload.id,
        },
    });
    return get(payload.id);
};

export const remove = (id) => {
    return model.destroy({
        where: {id},
    });
};