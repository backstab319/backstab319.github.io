export class RandomColor {
    options: string[] = ['Primary', 'Secondary', 'Tertiary', 'Success', 'Warning', 'Danger', 'Light', 'Medium', 'Dark'];
    getRandom() {
        const random = require('random');
        const randomValue = random.int(0, this.options.length - 1);
        return this.options[randomValue];
    }
}
