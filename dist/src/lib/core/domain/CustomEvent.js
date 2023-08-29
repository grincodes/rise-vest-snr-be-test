"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent = void 0;
const Entity_1 = require("./Entity");
const Events_1 = require("./events/Events");
class CustomEvent extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this._events = [];
    }
    get id() {
        return this._id;
    }
    get events() {
        return this._events;
    }
    addCustomEvent(event) {
        console.log("add event", event);
        // Add the domain event to this aggregate's list of domain events
        this._events.push(event);
        // Add this aggregate instance to the domain event's list of aggregates who's
        // events it eventually needs to dispatch.
        Events_1.Events.markCustomEventForDispatch(this);
        console.log("add custom event", event.getEventId());
        this.dispatchEvent(event.getEventId());
        // Log the domain event
        this.logDomainEventAdded(event);
    }
    clearEvents() {
        this._events.splice(0, this._events.length);
    }
    logDomainEventAdded(event) {
        const thisClass = Reflect.getPrototypeOf(this);
        const eventClass = Reflect.getPrototypeOf(event);
        console.info(`[Custom Event Created]:`, thisClass.constructor.name, "==>", eventClass.constructor.name);
    }
    dispatchEvent(eventId) {
        Events_1.Events.dispatchEventsForAggregate(eventId);
    }
}
exports.CustomEvent = CustomEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvZG9tYWluL0N1c3RvbUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpQztBQUNqQyw0Q0FBd0M7QUFJeEMsTUFBc0IsV0FBZSxTQUFRLGVBQVM7SUFBdEQ7O1FBQ1UsWUFBTyxHQUFhLEVBQUUsQ0FBQTtJQW9DaEMsQ0FBQztJQWxDQyxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRVMsY0FBYyxDQUFDLEtBQWE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDL0IsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLDZFQUE2RTtRQUM3RSwwQ0FBMEM7UUFDMUMsZUFBTSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7UUFFbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtRQUN0Qyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxLQUFhO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pHLENBQUM7SUFDUyxhQUFhLENBQUMsT0FBdUI7UUFDN0MsZUFBTSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzVDLENBQUM7Q0FDRjtBQXJDRCxrQ0FxQ0MifQ==