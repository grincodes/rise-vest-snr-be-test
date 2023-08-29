"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class Events {
    /**
     * @method markCustomEventForDispatch
     * @static
     * @desc Called by event root objects that have created domain
     * events to eventually be dispatched when the infrastructure commits
     * the unit of work.
     */
    static markCustomEventForDispatch(event) {
        console.log("Event", event);
        const eventFound = !!this.findMarkedAggregateByID(event.id);
        if (!eventFound) {
            Events.markedCustomEvents.push(event);
        }
    }
    static dispatchAggregateEvents(event) {
        event.events.forEach((event) => this.dispatch(event));
    }
    static removeAggregateFromMarkedDispatchList(event) {
        const index = Events.markedCustomEvents.findIndex((a) => a.equals(event));
        Events.markedCustomEvents.splice(index, 1);
    }
    static findMarkedAggregateByID(id) {
        let found = null;
        console.log("all events", Events.markedCustomEvents);
        for (const event of Events.markedCustomEvents) {
            if (event.id.equals(id)) {
                found = event;
            }
        }
        return found;
    }
    static dispatchEventsForAggregate(id) {
        const event = this.findMarkedAggregateByID(id);
        if (event) {
            console.log("event dispatched");
            this.dispatchAggregateEvents(event);
            event.clearEvents();
            this.removeAggregateFromMarkedDispatchList(event);
        }
        console.log("event not found");
    }
    static register(callback, eventClassName) {
        if (!this.handlersMap.hasOwnProperty(eventClassName)) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(callback);
        // create rabbitmq channel
        //   conn.createChannel(function (err, channel) {
        //     ch = channel;
        // });
    }
    static clearHandlers() {
        this.handlersMap = {};
    }
    static clearMarkedAggregates() {
        Events.markedCustomEvents = [];
    }
    static dispatch(event) {
        console.log("an event has actually been dispatched on dispatch(");
        const eventClassName = event.constructor.name;
        if (this.handlersMap.hasOwnProperty(eventClassName)) {
            const handlers = this.handlersMap[eventClassName];
            for (const handler of handlers) {
                handler(event);
            }
        }
        //  ch.sendToQueue(queueName, new Buffer(data), {persistent: true});
    }
}
exports.Events = Events;
Events.handlersMap = {};
Events.markedCustomEvents = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2RvbWFpbi9ldmVudHMvRXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLE1BQWEsTUFBTTtJQUlqQjs7Ozs7O09BTUc7SUFFSSxNQUFNLENBQUMsMEJBQTBCLENBQUMsS0FBdUI7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFM0QsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDdEM7SUFDSCxDQUFDO0lBRU8sTUFBTSxDQUFDLHVCQUF1QixDQUFDLEtBQXVCO1FBQzVELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVPLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQyxLQUF1QjtRQUMxRSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDekUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVPLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFrQjtRQUN2RCxJQUFJLEtBQUssR0FBcUIsSUFBSSxDQUFBO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3BELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFO1lBQzdDLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUssR0FBRyxLQUFLLENBQUE7YUFDZDtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLDBCQUEwQixDQUFDLEVBQWtCO1FBQ3pELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUU5QyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ25CLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNsRDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFpQyxFQUFFLGNBQXNCO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtTQUN0QztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRS9DLDBCQUEwQjtRQUMxQixpREFBaUQ7UUFDakQsb0JBQW9CO1FBQ3BCLE1BQU07SUFDUixDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWE7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxxQkFBcUI7UUFDakMsTUFBTSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFhO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUVqRSxNQUFNLGNBQWMsR0FBVyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtRQUVyRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sUUFBUSxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUE7WUFFeEQsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNmO1NBQ0Y7UUFFRCxvRUFBb0U7SUFDdEUsQ0FBQzs7QUF4Rkgsd0JBeUZDO0FBeEZnQixrQkFBVyxHQUFHLEVBQUUsQ0FBQTtBQUNoQix5QkFBa0IsR0FBdUIsRUFBRSxDQUFBIn0=