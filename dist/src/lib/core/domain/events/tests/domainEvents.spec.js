// import * as sinon from "sinon"
// import { DomainEvents } from "../DomainEvents"
// import { MockJobCreatedEvent } from "./mocks/events/mockJobCreatedEvent"
// import { MockJobDeletedEvent } from "./mocks/events/mockJobDeletedEvent"
// import { MockJobAggregateRoot } from "./mocks/domain/mockJobAggregateRoot"
// import { MockPostToSocial } from "./mocks/services/mockPostToSocial"
// import { MockJobAggregateRootId } from "./mocks/domain/mockJobAggregateRootId"
// import { UniqueEntityID } from "../../UniqueEntityID"
// let social: MockPostToSocial
// let job: MockJobAggregateRoot
// let spy
// describe("Domain Events", () => {
//   beforeEach(() => {
//     social = null
//     DomainEvents.clearHandlers()
//     DomainEvents.clearMarkedAggregates()
//     spy = null
//     job = null
//   })
//   describe("Given a JobCreatedEvent, JobDeletedEvent and a PostToSocial handler class", () => {
//     it("Should be able to setup event subscriptions", () => {
//       social = new MockPostToSocial()
//       social.setupSubscriptions()
//       expect(Object.keys(DomainEvents["handlersMap"]).length).toBe(2)
//       expect(DomainEvents["handlersMap"][MockJobCreatedEvent.name].length).toBe(1)
//       expect(DomainEvents["handlersMap"][MockJobDeletedEvent.name].length).toBe(1)
//     })
//     it("There should be exactly one handler subscribed to the JobCreatedEvent", () => {
//       social = new MockPostToSocial()
//       social.setupSubscriptions()
//       expect(DomainEvents["handlersMap"][MockJobCreatedEvent.name].length).toBe(1)
//     })
//     it("There should be exactly one handler subscribed to the JobDeletedEvent", () => {
//       social = new MockPostToSocial()
//       social.setupSubscriptions()
//       expect(DomainEvents["handlersMap"][MockJobCreatedEvent.name].length).toBe(1)
//     })
//     it("Should add the event to the DomainEvents list when the event is created", () => {
//       job = MockJobAggregateRoot.createJob({}, MockJobAggregateRootId)
//       social = new MockPostToSocial()
//       social.setupSubscriptions()
//       const domainEventsAggregateSpy = sinon.spy(DomainEvents, "markAggregateForDispatch")
//       // setTimeout(() => {
//       //   expect(domainEventsAggregateSpy.calledOnce).toBeTruthy();
//       //   expect(domainEventsAggregateSpy.callCount).toBe(0)
//       //   expect(DomainEvents['markedAggregates'][0]['length']).toBe(1);
//       // }, 1000);
//     })
//     it("Should call the handlers when the event is dispatched after marking the aggregate root", () => {
//       social = new MockPostToSocial()
//       social.setupSubscriptions()
//       const jobCreatedEventSpy = sinon.spy(social, "handleJobCreatedEvent")
//       const jobDeletedEventSpy = sinon.spy(social, "handleDeletedEvent")
//       // Create the event, mark the aggregate
//       job = MockJobAggregateRoot.createJob({}, MockJobAggregateRootId)
//       // Dispatch the events now
//       DomainEvents.dispatchEventsForAggregate(MockJobAggregateRootId)
//       // setTimeout(() => {
//       //   expect(jobCreatedEventSpy.calledOnce).toBeFalsy();
//       //   expect(jobDeletedEventSpy.calledOnce).toBeTruthy();
//       // }, 1000);
//     })
//     it("Should remove the marked aggregate from the marked aggregates list after it gets dispatched", () => {
//       social = new MockPostToSocial()
//       social.setupSubscriptions()
//       // Create the event, mark the aggregate
//       job = MockJobAggregateRoot.createJob({}, MockJobAggregateRootId)
//       // Dispatch the events now
//       DomainEvents.dispatchEventsForAggregate(MockJobAggregateRootId)
//       // setTimeout(() => {
//       //   expect(DomainEvents['markedAggregates']['length']).toBe(0);
//       // }, 1000);
//     })
//     it("Should only add the domain event to the ", () => {
//       social = new MockPostToSocial()
//       social.setupSubscriptions()
//       // Create the event, mark the aggregate
//       MockJobAggregateRoot.createJob({}, new UniqueEntityID("99"))
//       expect(DomainEvents["markedAggregates"]["length"]).toBe(1)
//       // Create a new job, it should also get marked
//       job = MockJobAggregateRoot.createJob({}, new UniqueEntityID("12"))
//       expect(DomainEvents["markedAggregates"]["length"]).toBe(2)
//       // Dispatch another action from the second job created
//       job.deleteJob()
//       // The number of aggregates should be the same
//       expect(DomainEvents["markedAggregates"]["length"]).toBe(2)
//       // However, the second aggregate should have two events now
//       expect(DomainEvents["markedAggregates"][1].domainEvents.length).toBe(2)
//       // And the first aggregate should have one event
//       expect(DomainEvents["markedAggregates"][0].domainEvents.length).toBe(1)
//       // Dispatch the event for the first job
//       DomainEvents.dispatchEventsForAggregate(new UniqueEntityID("99"))
//       expect(DomainEvents["markedAggregates"]["length"]).toBe(1)
//       // The job with two events should still be there
//       expect(DomainEvents["markedAggregates"][0].domainEvents.length).toBe(2)
//       // Dispatch the event for the second job
//       DomainEvents.dispatchEventsForAggregate(new UniqueEntityID("12"))
//       // There should be no more domain events in the list
//       expect(DomainEvents["markedAggregates"]["length"]).toBe(0)
//     })
//   })
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluRXZlbnRzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvZG9tYWluL2V2ZW50cy90ZXN0cy9kb21haW5FdmVudHMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakMsaURBQWlEO0FBQ2pELDJFQUEyRTtBQUMzRSwyRUFBMkU7QUFDM0UsNkVBQTZFO0FBQzdFLHVFQUF1RTtBQUN2RSxpRkFBaUY7QUFDakYsd0RBQXdEO0FBRXhELCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFDaEMsVUFBVTtBQUVWLG9DQUFvQztBQUNwQyx1QkFBdUI7QUFDdkIsb0JBQW9CO0FBQ3BCLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixPQUFPO0FBRVAsa0dBQWtHO0FBQ2xHLGdFQUFnRTtBQUNoRSx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBRXBDLHdFQUF3RTtBQUV4RSxxRkFBcUY7QUFDckYscUZBQXFGO0FBQ3JGLFNBQVM7QUFFVCwwRkFBMEY7QUFDMUYsd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUVwQyxxRkFBcUY7QUFDckYsU0FBUztBQUVULDBGQUEwRjtBQUMxRix3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBRXBDLHFGQUFxRjtBQUNyRixTQUFTO0FBRVQsNEZBQTRGO0FBQzVGLHlFQUF5RTtBQUN6RSx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBRXBDLDZGQUE2RjtBQUU3Riw4QkFBOEI7QUFDOUIsdUVBQXVFO0FBQ3ZFLGdFQUFnRTtBQUNoRSw0RUFBNEU7QUFDNUUscUJBQXFCO0FBQ3JCLFNBQVM7QUFFVCwyR0FBMkc7QUFDM0csd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUVwQyw4RUFBOEU7QUFDOUUsMkVBQTJFO0FBRTNFLGdEQUFnRDtBQUNoRCx5RUFBeUU7QUFFekUsbUNBQW1DO0FBQ25DLHdFQUF3RTtBQUV4RSw4QkFBOEI7QUFDOUIsZ0VBQWdFO0FBQ2hFLGlFQUFpRTtBQUNqRSxxQkFBcUI7QUFDckIsU0FBUztBQUVULGdIQUFnSDtBQUNoSCx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBRXBDLGdEQUFnRDtBQUNoRCx5RUFBeUU7QUFFekUsbUNBQW1DO0FBQ25DLHdFQUF3RTtBQUV4RSw4QkFBOEI7QUFDOUIseUVBQXlFO0FBQ3pFLHFCQUFxQjtBQUNyQixTQUFTO0FBRVQsNkRBQTZEO0FBQzdELHdDQUF3QztBQUN4QyxvQ0FBb0M7QUFFcEMsZ0RBQWdEO0FBQ2hELHFFQUFxRTtBQUNyRSxtRUFBbUU7QUFFbkUsdURBQXVEO0FBQ3ZELDJFQUEyRTtBQUMzRSxtRUFBbUU7QUFFbkUsK0RBQStEO0FBQy9ELHdCQUF3QjtBQUV4Qix1REFBdUQ7QUFDdkQsbUVBQW1FO0FBRW5FLG9FQUFvRTtBQUNwRSxnRkFBZ0Y7QUFFaEYseURBQXlEO0FBQ3pELGdGQUFnRjtBQUVoRixnREFBZ0Q7QUFDaEQsMEVBQTBFO0FBQzFFLG1FQUFtRTtBQUVuRSx5REFBeUQ7QUFDekQsZ0ZBQWdGO0FBRWhGLGlEQUFpRDtBQUNqRCwwRUFBMEU7QUFFMUUsNkRBQTZEO0FBQzdELG1FQUFtRTtBQUNuRSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUsifQ==