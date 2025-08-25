
const { Router } = require("express");
const { getLivros, getLivroPeloId, postLivro, patchLivro, deleteLivro } = require("../controladores/livroControladores");


const router = Router();

router.get('/', getLivros);
router.get('/:id',getLivroPeloId);
router.post('/', postLivro);
router.patch('/:id', patchLivro);
router.delete('/:id', deleteLivro);


module.exports = router;