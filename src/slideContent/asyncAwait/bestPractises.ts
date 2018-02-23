export const a = `## Best Practices

#### Deadlock Scenerio
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
        return jsonTask.Result.ToString();
    }
}
  \`\`\`
`

export const b = `## Best Practices

#### Deadlock Scenerio Solution
- Async all the way up
- Use \`await\` instead of \`Task.Result\`

\`\`\` c#
public async void Button1_Click(...)
{
  var json = await GetJsonAsync(...);
  textBox1.Text = json;
}

public class MyController : ApiController
{
  public async Task<string> Get()
  {
    var json = await GetJsonAsync(...);
    return json.ToString();
  }
}
\`\`\`

> Note: Deadlock cannot be avoided in ASP.NET child actions
> \`\`\` c#
> @Html.Action("SomeAction", "SomeController")
> \`\`\`
`

export const c = `## Best Practices

#### Third-party Library
- important to \`ConfigureAwait(false)\`
- slight performance increase
- default implementation can cause deadlocks

\`\`\` c#
protected async void button1_Click(object sender, EventArgs e)
{
    int result = await DoSomeWorkAsync();
}

private async Task<int> DoSomeWorkAsync()
{
    await Task.Delay(100).ConfigureAwait(true);
    return 1;
}
`

export const d = `## Best Practices

#### Avoid Executing Parallel Loops in the Synchronization Context
- Execute the loop within a task instance instead
- Marshal the UI and update back the UI thread only when core computation has completed

Bad
\`\`\` c#
protected async void MyButton_Click(object sender, EventArgs e)
{
  Parallel.For(0, N, i =>
  {
      // do work for i
      DoWork(i);
  });
}
\`\`\`
---

Good
\`\`\` c#
protected async void MyButton_Click(object sender, EventArgs e)
{
  Task.Factory.StartNew(() =>
    Parallel.For(0, N, i =>
    {
        // do work for i
        DoWork(i);
    });
  );
}
\`\`\`
`

export const e = `## Best Practices

#### Avoid Async Void
- specific purpose to make asynchronous event handlers possible.
- exceptions are not captured naturally
    - can be observed using \`AppDomain.UnhandledException\`
- different composing semantics
- difficult to test

\`\`\` c#
async void MyMethodAsync()
{
  // Do asynchronous work.
  await Task.Delay(1000);
}
`
