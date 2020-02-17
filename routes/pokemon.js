var router = require('express').Router(),
	Pokemon = require('./../models/pokemon'),
	Type = require('./../models/type');

router.get('/',(req, res)=>
{
	Pokemon.find()
	.then(pokemons =>
	{
		res.render('pokemon/index.html',{pokemons : pokemons});
	})
	.catch (err => res.status(400).json({err}));
});

router.get('/:id', (req, res)=>
{
	Pokemon.findById(req.params.id).populate('types').then(pokemon =>
	{
		res.render('pokemon/pokemon.html',{pokemon : pokemon});
	}).catch(err => res.status(400).json({err}));
});

module.exports = router;