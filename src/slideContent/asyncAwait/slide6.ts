export const slide6 = `## Async Await In Depth

Asynchronous methods look something like this:
\`\`\` c#
public async Task DoSomethingAsync()
{
  // In the Real World, we would actually do something...
  // For this example, we're just going to (asynchronously) wait 100ms.
  await Task.Delay(100);
}
\`\`\`


#### async operator
- is applied to a method to indicate it is asynchronous
- it does not run this method on a thread pool thread
- it runs synchronously until it hits the await

#### await operator
- is applied to task in an asynchronous method to suspend execution of the method until the awaited task completes
    > \`Task\`: unit of work; an object denoting an ongoing operation or computation being performed by the machine    

- it takes an argument, an awaitable (an asynchronous operation)
- examines the awaitable to see if it is already completed.
- if the awaitable is not complete, then it acts asynchronously by telling the awaitable to run the remainder of the method when it completes, and then returns the async method.
- later on, when the awaitable completes, it will execute the remainder of the async method on a context that was captured before the await returned.
    
`
