export const slide8 = `## Async Await In Depth

#### Context
  - when you await a built-in awaitable, then the awaitable will capture the current "context" and later apply it to the remainder of the async method
  - If \`SynchronizationContext.Current\` is not null, then it’s the current SynchronizationContext (UI or ASP.NET context)
  - Otherwise its a \`TaskScheduler.Default\` (thread pool context)

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
  - If you want to tell the awaiter to not capture the current context, you call the **ConfigureAwait** and pass \`false\`
    - This method is used to suppress the default behavior of marshaling back to the original synchronization context
  - The important thing to note is that each level of async method calls has it's own context.

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
