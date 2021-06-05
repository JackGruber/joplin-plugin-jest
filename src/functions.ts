import joplin from "api";

export async function getDoubleNumber(): Promise<number> {
    const value = await joplin.settings.value("number");
    return value * 2;
}

export async function getNumber(): Promise<number> {
    return await joplin.settings.value("number");
}

export async function getText(): Promise<string> {
    return await joplin.settings.value("text");
}

export async function someFunction(num: number): Promise<number> {
    return num * num;
}
