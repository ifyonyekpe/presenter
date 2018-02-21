export const slide7 = `## Async Await In Depth

#### Awaitables
  Common Types
  - Task
  - Task\\<T\\>
  - Task.Yield
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
  - Async methods can return Task<T>, Task, or void. In almost all cases, you want to return Task<T> or Task, and return void only when you have to.
  - Task and Task<T> are awaitable while void is not, however Task acts as a void because it does not return a value.
  - You have to return void when you have async event handlers.
  - To return a value, the method must be of Task<T> and must return a value of type T.

  \`\`\` c#
  public async Task\<int\> CalculateAnswer()
  {
    await Task.Delay(100); // (Probably should be longer...)

    // Return a type of "int", not "Task<int>"
    return 42;
  }
  \`\`\`
`
