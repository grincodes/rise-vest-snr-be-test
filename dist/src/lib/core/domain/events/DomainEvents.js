"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvents = void 0;
class DomainEvents {
    /**
     * @method markAggregateForDispatch
     * @static
     * @desc Called by aggregate root objects that have created domain
     * events to eventually be dispatched when the infrastructure commits
     * the unit of work.
     */
    static markAggregateForDispatch(aggregate) {
        const aggregateFound = !!this.findMarkedAggregateByID(aggregate.id);
        if (!aggregateFound) {
            DomainEvents.markedAggregates.push(aggregate);
        }
    }
    static dispatchAggregateEvents(aggregate) {
        aggregate.domainEvents.forEach((event) => this.dispatch(event));
    }
    static removeAggregateFromMarkedDispatchList(aggregate) {
        const index = DomainEvents.markedAggregates.findIndex((a) => a.equals(aggregate));
        DomainEvents.markedAggregates.splice(index, 1);
    }
    static findMarkedAggregateByID(id) {
        let found = null;
        for (const aggregate of DomainEvents.markedAggregates) {
            if (aggregate.id.equals(id)) {
                found = aggregate;
            }
        }
        return found;
    }
    static dispatchEventsForAggregate(id) {
        const aggregate = this.findMarkedAggregateByID(id);
        if (aggregate) {
            this.dispatchAggregateEvents(aggregate);
            aggregate.clearEvents();
            this.removeAggregateFromMarkedDispatchList(aggregate);
        }
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
        DomainEvents.markedAggregates = [];
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
exports.DomainEvents = DomainEvents;
DomainEvents.handlersMap = {};
DomainEvents.markedAggregates = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluRXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2RvbWFpbi9ldmVudHMvRG9tYWluRXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLE1BQWEsWUFBWTtJQUl2Qjs7Ozs7O09BTUc7SUFFSSxNQUFNLENBQUMsd0JBQXdCLENBQUMsU0FBNkI7UUFDbEUsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFbkUsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQzlDO0lBQ0gsQ0FBQztJQUVPLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUE2QjtRQUNsRSxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRU8sTUFBTSxDQUFDLHFDQUFxQyxDQUFDLFNBQTZCO1FBQ2hGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUNqRixZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRU8sTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQWtCO1FBQ3ZELElBQUksS0FBSyxHQUF1QixJQUFJLENBQUE7UUFFcEMsS0FBSyxNQUFNLFNBQVMsSUFBSSxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7WUFDckQsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDM0IsS0FBSyxHQUFHLFNBQVMsQ0FBQTthQUNsQjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLDBCQUEwQixDQUFDLEVBQWtCO1FBQ3pELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUVsRCxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN2QyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDdkIsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ3REO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBdUMsRUFBRSxjQUFzQjtRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUE7U0FDdEM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUUvQywwQkFBMEI7UUFDMUIsaURBQWlEO1FBQ2pELG9CQUFvQjtRQUNwQixNQUFNO0lBQ1IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFTSxNQUFNLENBQUMscUJBQXFCO1FBQ2pDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7SUFDcEMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBbUI7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFBO1FBRWpFLE1BQU0sY0FBYyxHQUFXLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFBO1FBRXJELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbkQsTUFBTSxRQUFRLEdBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUV4RCxLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ2Y7U0FDRjtRQUVELG9FQUFvRTtJQUN0RSxDQUFDOztBQXJGSCxvQ0FzRkM7QUFyRmdCLHdCQUFXLEdBQUcsRUFBRSxDQUFBO0FBQ2hCLDZCQUFnQixHQUF5QixFQUFFLENBQUEifQ==