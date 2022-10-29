import {Router} from 'express';
const router = Router();


//SOLICITAR LA PAGINA PRINCIPAL
router.get('/', (req, res) => res.render('index', {title: 'André Oscco Web'}))

router.get('/about', (req, res) => res.render('about', {title: 'Sobre mí'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contacto'}))

export default router;