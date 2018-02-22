export const slide7 = `## Async Await In Depth

#### Awaitables Types
  - Task
  - Task\\<T\\>
  - Task.Yield
  - Task.FromResult
  - or you can write your own awaitables

  \`\`\` c#
  public async Task NewStuffAsync()
  {
    // Use await and have fun with the new stuff.
    await ...
  }

  public Task MyOldTaskParallelLibraryCode()
  {
    // Note that this is not an async method, so we can't use await in here.
    ...
  }

  public async Task ComposeAsync()
  {
    // We can await Tasks, regardless of where they come from.
    await NewStuffAsync();
    await MyOldTaskParallelLibraryCode();
  }
  \`\`\`

#### Return Types / Values
  - Async methods can return Task\<T\>, Task, or void.  

  \`\`\` c#
  public async Task\<int\> CalculateAnswer()
  {
    await Task.Delay(100); // (Probably should be longer...)

    // Return a type of "int", not "Task<int>"
    return 42;
  }
  \`\`\`
`
