module.exports = function check(str, bracketsConfig) {
    const stack = [];

    const data = new Map(bracketsConfig);
    const closeItem = new Set(data.values());
    const openItem = new Set(data.keys());




    for (let char of str) {

        if (openItem.has(char)) {

            if (data.get(char) === char && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }


        } else if (closeItem.has(char)) {
            if (stack.length === 0 || data.get(stack.pop()) !== char) return false;
        }
    }


    return stack.length === 0;
}
