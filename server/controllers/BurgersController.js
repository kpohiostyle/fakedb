import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController {
    constructor() {
        super("api/burgers");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .delete("/:id", this.delete)
    }
    async getAll(_, res, next) {
        try {
            const burgers = await burgersService.find()
            return res.send(burgers);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const burger = await burgersService.findById(req.params.id)
            return res.send(burger)
        } catch (error) {

        }
    }
    async create(req, res, next) {
        try {
            let data = await burgersService.create(req.body)
            res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let data = await burgersService.delete(req.params.id)
            res.send(data)
        } catch (error) {

        }
    }
}
