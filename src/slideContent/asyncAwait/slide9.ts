export const slide9 = `## Async Await In Depth

#### Async Composition
  - async method also offers the ability to start several operations and await for one (or all) to complete

  \`\`\` c#
  public async Task DoOperationsConcurrentlyAsync()
  {
    Task[] tasks = new Task[3];
    tasks[0] = DoOperation0Async();
    tasks[1] = DoOperation1Async();
    tasks[2] = DoOperation2Async();

    // At this point, all three tasks are running at the same time.

    // Now, we await them all.
    await Task.WhenAll(tasks);
  }

  public async Task<int> GetFirstToRespondAsync()
  {
    // Call two web services; take the first response.
    Task<int>[] tasks = new[] { WebService1Async(), WebService2Async() };

    // Await for the first one to respond.
    Task<int> firstTask = await Task.WhenAny(tasks);

    // Return the result.
    return await firstTask;
  }
  \`\`\`

  > **Note**: you can also use these methods along with Task.Run to do simple parallel composition.
`
