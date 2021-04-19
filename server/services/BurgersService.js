import { fakeDb } from "../db/FakeDb"
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class BurgersService {
    delete(id) {
        let burger = fakeDb.burgers.find(b => b.id === id)
        if (!burger) {
            throw new BadRequest("The Gremlins are afoot");
        }
        fakeDb.burgers.filter(b => b.id !== id)

    }
    create(newBurger) {
        newBurger.id = generateId()

        fakeDb.burgers.push(newBurger)
        return newBurger
    }
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return fakeDb.burgers;
    }
    async findById(id) {
        let burger = fakeDb.burgers.find(e => e.id === id)
        if (!burger) {
            throw new BadRequest("There be Gremlins running amuck");
        }
        return burger;
    }
}

export const burgersService = new BurgersService();