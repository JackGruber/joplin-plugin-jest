import { testDate } from "../src/functions";

describe("Jest for Date", function () {
    beforeAll(async () => {});

    it("SpyOn Date.now", async () => {
        const testEpoch = 1487076708000;
        const spyOnDateNow = jest
            .spyOn(Date, "now")
            .mockImplementation(() => testEpoch);

        expect(await testDate()).toBe(testEpoch);
        spyOnDateNow.mockRestore();
        expect(await testDate()).not.toBe(testEpoch);
    });
});
