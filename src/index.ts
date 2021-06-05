import joplin from "api";
import { SettingItemType } from "api/types";
import { getDoubleNumber, getNumber, getText, someFunction } from "./functions";

joplin.plugins.register({
    onStart: async function () {
        console.info("Jest plugin started!");

        await joplin.settings.registerSection("jestSection", {
            label: "Jest",
        });

        await joplin.settings.registerSettings({
            number: {
                value: 5,
                minimum: 0,
                maximum: 2880,
                type: SettingItemType.Int,
                section: "jestSection",
                public: true,
                label: "Test numbers",
            },
            text: {
                value: "hello world",
                type: SettingItemType.String,
                section: "jestSection",
                public: true,
                label: "Test text",
            },
        });

        console.log(await getDoubleNumber());
        console.log(await getNumber());
        console.log(await getText());
        console.log(await someFunction(4));
    },
});
