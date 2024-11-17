import {Router} from 'express';
const router = Router()

router.get('/',(req,res) => res.render('index'))
router.get('/cont',(req,res) => res.render('cont'))

export default router