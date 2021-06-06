import TestClass from "../src/class";

jest.mock("../src/class");

describe("Auto Mock class", function () {
    beforeAll(async () => {
        //TestClass.mockClear();
    });

    it("V1", async () => {
        const mockGetById = jest.fn();
        TestClass.prototype.getById = mockGetById;
        mockGetById.mockReturnValue(Promise.resolve("football"));

        const testClass = new TestClass();

        expect(testClass.getById).not.toHaveBeenCalled();

        const result = await testClass.getById("a");
        expect(result).toBe("football");

        expect(testClass.getById).toHaveBeenCalled();
    });

    it("V2", async () => {
        jest.spyOn(TestClass.prototype, "getById").mockReturnValue(
            Promise.resolve("zwei")
        );
        const testClass = new TestClass();

        expect(testClass.getById).not.toHaveBeenCalled();

        const result = await testClass.getById("a");
        expect(result).toBe("zwei");

        expect(testClass.getById).toHaveBeenCalled();
    });
});

//
