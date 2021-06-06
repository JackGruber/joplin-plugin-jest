export default class TestClass {
    async getById(id): Promise<string> {
        if (id == 1) {
            return "ID 1 OK";
        } else {
            return "NE";
        }
    }
}
