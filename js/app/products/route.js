import {Router} from "express"

const productRouter = Router()
productRouter.get("/", (req, res) => {
    res.json({
        url: req.url,
    })
})

export default productRouter