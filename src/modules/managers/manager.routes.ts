import express from 'express'
import { create, deleteById, getAll, updateById } from './manager.controller';

const router = express.Router();

router.post('/', create);

router.get('/', getAll);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

export default router;
