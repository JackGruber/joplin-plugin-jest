import { fetch } from "../src/data";

// describe("No mock", function () {
//     it("returns name successfully", async () => {
//         const actual = await fetch();
//         expect(actual.data.name).toBe("CRS-22 & IROSA");
//     });
// });

import axios, { AxiosResponse } from "axios";
jest.mock("axios");

describe("Mock", function () {
    beforeAll(async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        const mockedResponse: AxiosResponse = {
            data: {
                name: "Henry",
            },
            status: 200,
            statusText: "OK",
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValue(mockedResponse);
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Test 1", async () => {
        expect(axios.get).not.toHaveBeenCalled();
        const actual = await fetch();
        expect(actual.data.name).toBe("Henry");
        expect(axios.get).toHaveBeenCalled();
    });

    it("Test 2", async () => {
        expect(axios.get).not.toHaveBeenCalled();
        const actual = await fetch();
        expect(actual.data.name).toBe("Henry");
        expect(axios.get).toHaveBeenCalled();
    });
});
