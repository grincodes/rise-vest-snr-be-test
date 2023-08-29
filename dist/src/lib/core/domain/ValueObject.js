"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    constructor(props) {
        const baseProps = Object.assign({}, props);
        this.props = baseProps;
    }
    equals(vo) {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.props === undefined) {
            return false;
        }
        return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWVPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvZG9tYWluL1ZhbHVlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLE1BQXNCLFdBQVc7SUFHL0IsWUFBWSxLQUFRO1FBQ2xCLE1BQU0sU0FBUyxxQkFDVixLQUFLLENBQ1QsQ0FBQTtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO0lBQ3hCLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBbUI7UUFDL0IsSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUVELElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsQ0FBQztDQUNGO0FBdEJELGtDQXNCQyJ9