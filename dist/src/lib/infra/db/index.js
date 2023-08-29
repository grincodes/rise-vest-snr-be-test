"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uow = exports.dataService = void 0;
const DatabaseModule_1 = require("./DatabaseModule");
const UnitOfWork_1 = require("./UnitOfWork");
exports.dataService = new DatabaseModule_1.DatabaseService();
exports.uow = new UnitOfWork_1.UnitOfWork();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2luZnJhL2RiL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFtRDtBQUNuRCw2Q0FBMEM7QUFFN0IsUUFBQSxXQUFXLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDbkMsUUFBQSxHQUFHLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUMifQ==