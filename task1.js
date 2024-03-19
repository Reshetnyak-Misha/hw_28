function deepFreeze(object) {

    if (typeof object !== 'object' || object === null || Object.isFrozen(object)) {
        return;
    }

    Object.freeze(object);

    Object.getOwnPropertyNames(object).forEach(function(name) {
        deepFreeze(object[name]);
    });
}

const fileSystem = {
    name: "root",
    type: "folder",
    children: [
        {
            name: "folder1",
            type: "folder",
            children: [
                { name: "file1.txt", type: "file" },
                { name: "file2.txt", type: "file" }
            ]
        },
        {
            name: "folder2",
            type: "folder",
            children: [
                { name: "file3.txt", type: "file" }
            ]
        }
    ]
};

deepFreeze(fileSystem);
fileSystem.children[0].name = "folder223232";
fileSystem.children[0].children[0].type = "folder223232";

console.log(fileSystem.children[0]);




