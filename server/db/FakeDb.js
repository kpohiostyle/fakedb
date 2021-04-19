import { generateId } from "../utils/GenerateId"

class FakeDb {
    burgers = [
        { name: 'Bonsi', price: 10.99, description: 'lettuce, pineapple, tomato', id: generateId() }, { name: 'Burning Love', price: 12.99, description: 'jalepenos, lettuce, spicy sauce', id: generateId() }
    ]
}

export const fakeDb = new FakeDb()