module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops my burrito fell apart" })
                console.log(err)
            })
    },
    getOne: (req, res, next) => {
        const dbInstance= req.app.get('db')
        const{ id } = req.params
    
        dbInstance.get_product(id)
        .then ( thing => res.status(200).send( thing ) )
        .catch(err => {
            res.status(500).send({errorMessage: "Oops I forgot to put the seat down!"})
        })
    },


    addProduct: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, image_url, price } = req.body

        dbInstance.create_product([name, image_url, price])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops I can add that burrito" })
                console.log(err)
            })
    },
    deleteProduct: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.delete(id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "I can't get rid of the monkeys!" })
                console.log(err)
            })
    },

}