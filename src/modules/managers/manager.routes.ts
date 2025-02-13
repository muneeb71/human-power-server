import express from 'express'
import { create, deleteById, getAll, updateById } from './manager.controller';
import { isAuthenticated } from '../../middleware/isAuthenticated';
import { authorizeRoles } from '../../middleware/authorizeRoles';

const router = express.Router();

router.post('/',isAuthenticated, authorizeRoles(["Human Power" ,"IT"]), create);

router.get('/',isAuthenticated, authorizeRoles(["Human Power", "IT" , "TP HR", "PM"]), getAll);

router.put('/:id', isAuthenticated,updateById);

router.delete('/:id',isAuthenticated, authorizeRoles(["Human Power", "TP HR", "PM"]), deleteById);

export default router;
