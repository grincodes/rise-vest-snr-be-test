"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFakeRepo = void 0;
class BaseFakeRepo {
    constructor() {
        this._items = [];
    }
    addFakeItem(t) {
        let found = false;
        for (const item of this._items) {
            if (this.compareFakeItems(item, t)) {
                found = true;
            }
        }
        if (!found) {
            this._items.push(t);
        }
    }
    removeFakeItem(t) {
        this._items = this._items.filter((item) => !this.compareFakeItems(item, t));
    }
}
exports.BaseFakeRepo = BaseFakeRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUZha2VSZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL3Rlc3RzL0Jhc2VGYWtlUmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFzQixZQUFZO0lBR2hDO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxDQUFJO1FBQ3JCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNqQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFBO2FBQ2I7U0FDRjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNwQjtJQUNILENBQUM7SUFFTSxjQUFjLENBQUMsQ0FBSTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM3RSxDQUFDO0NBR0Y7QUF6QkQsb0NBeUJDIn0=