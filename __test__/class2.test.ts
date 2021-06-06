import TestClass2 from "../src/class2";

let mockGetById = jest.fn().mockReturnValue(Promise.resolve("football"));
jest.mock("../src/class2", () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation(() => {
            return {
                getById: mockGetById,
            };
        }),
    };
});

describe("Auto Mock class", function () {
    beforeAll(async () => {});

    it("V1", async () => {
        const testClass = new TestClass2();
        expect(testClass.getById).not.toHaveBeenCalled();
        const result = await testClass.getById("a");
        expect(result).toBe("football");
        expect(testClass.getById).toHaveBeenCalled();
    });
});
