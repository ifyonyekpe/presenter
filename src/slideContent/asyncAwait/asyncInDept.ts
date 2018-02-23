export const a = `## Async Await In Depth

#### Asynchronous methods
- marked with contextual keyword async.
- compiler only performs some special transformation to the method.

##### Simple
\`\`\` c#
// Basic example
public async Task DoSomethingAsync()
{
    await Task.Delay(100);
    Response.Write("Will update after await returns")
}
\`\`\`

---

##### Complex
\`\`\` c#
// My "library" method.
public static async Task<JObject> GetJsonAsync(Uri uri)
{
    using (var client = new HttpClient())
    {
        var jsonString = await client.GetStringAsync(uri);
        return JObject.Parse(jsonString);
    }
}

// My "top-level" method.
public class MyController : ApiController
{
    public string Get()
    {
        var jsonTask = GetJsonAsync(...);
        return jsonTask.Result.ToString(); // warning: buggy
    }
}
\`\`\`
`

export const b = `## Async Await In Depth

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

export const c = `## Async Await In Depth

#### Context
- Synchronization Context
- Execution Context

  \`\`\` c#
  protected async void MyButton_Click(object sender, EventArgs e)
  {
    // Since we asynchronously wait, the ASP.NET thread is not blocked by the file download.
    // This allows the thread to handle other requests while we're waiting.
    await DownloadFileAsync(...);

    // Since we resume on the ASP.NET context, we can access the current request.
    // We may actually be on another *thread*, but we have the same ASP.NET request context.
    Response.Write("File downloaded!");
  }
  \`\`\`

#### Avoiding Context
- \`ConfigureAwait(bool continueOnCapturedContext)\`

  \`\`\` c#
  private async Task DownloadFileAsync(string fileName)
  {
    // First code started with an ASP.NET context
    // Use HttpClient or whatever to download the file contents.
    var fileContents = await DownloadFileContentsAsync(fileName).ConfigureAwait(false);

    // Note that because of the ConfigureAwait(false), we are not on the original context here.
    // Instead, we're running on the thread pool.

    // Write the file contents out to a disk file.
    await WriteToDiskAsync(fileName, fileContents).ConfigureAwait(false);

    // The second call to ConfigureAwait(false) is not *required*.
  }
  \`\`\`
`
export const d = `## Async Await In Depth

#### Async Composition
  - \`Task.WhenAny\`
  - \`Task.WhenAll\`
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
`
