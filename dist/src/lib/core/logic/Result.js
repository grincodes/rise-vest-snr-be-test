"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.Right = exports.Left = exports.Result = void 0;
class Result {
    constructor(isSuccess, error, value) {
        if (isSuccess && error) {
            throw new Error("InvalidOperation: A result cannot be successful and contain an error");
        }
        if (!isSuccess && !error) {
            throw new Error("InvalidOperation: A failing result needs to contain an error message");
        }
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;
        this._value = value;
        Object.freeze(this);
    }
    getValue() {
        if (!this.isSuccess) {
            console.log(this.error);
            throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
        }
        return this._value;
    }
    errorValue() {
        return this.error;
    }
    static ok(value) {
        return new Result(true, null, value);
    }
    static fail(error) {
        return new Result(false, error);
    }
    static combine(results) {
        for (const result of results) {
            if (result.isFailure)
                return result;
        }
        return Result.ok();
    }
}
exports.Result = Result;
class Left {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return true;
    }
    isRight() {
        return false;
    }
}
exports.Left = Left;
class Right {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return false;
    }
    isRight() {
        return true;
    }
}
exports.Right = Right;
const left = (l) => {
    return new Left(l);
};
exports.left = left;
const right = (a) => {
    return new Right(a);
};
exports.right = right;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2xvZ2ljL1Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLE1BQU07SUFNakIsWUFBbUIsU0FBa0IsRUFBRSxLQUFrQixFQUFFLEtBQVM7UUFDbEUsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO1lBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQTtTQUN4RjtRQUNELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFBO1NBQ3hGO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUVuQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFBO1NBQ3JGO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3BCLENBQUM7SUFFTSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBVSxDQUFBO0lBQ3hCLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBRSxDQUFJLEtBQVM7UUFDM0IsT0FBTyxJQUFJLE1BQU0sQ0FBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBSSxDQUFJLEtBQVU7UUFDOUIsT0FBTyxJQUFJLE1BQU0sQ0FBSSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBc0I7UUFDMUMsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDNUIsSUFBSSxNQUFNLENBQUMsU0FBUztnQkFBRSxPQUFPLE1BQU0sQ0FBQTtTQUNwQztRQUNELE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFBO0lBQ3BCLENBQUM7Q0FDRjtBQWpERCx3QkFpREM7QUFJRCxNQUFhLElBQUk7SUFHZixZQUFZLEtBQVE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0NBQ0Y7QUFkRCxvQkFjQztBQUVELE1BQWEsS0FBSztJQUdoQixZQUFZLEtBQVE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBQ0Y7QUFkRCxzQkFjQztBQUVNLE1BQU0sSUFBSSxHQUFHLENBQU8sQ0FBSSxFQUFnQixFQUFFO0lBQy9DLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEIsQ0FBQyxDQUFBO0FBRlksUUFBQSxJQUFJLFFBRWhCO0FBRU0sTUFBTSxLQUFLLEdBQUcsQ0FBTyxDQUFJLEVBQWdCLEVBQUU7SUFDaEQsT0FBTyxJQUFJLEtBQUssQ0FBTyxDQUFDLENBQUMsQ0FBQTtBQUMzQixDQUFDLENBQUE7QUFGWSxRQUFBLEtBQUssU0FFakIifQ==